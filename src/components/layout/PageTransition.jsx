import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MIN_VISIBLE_MS = 160;
const SCROLL_FALLBACK_MS = 700;
const FADE_OUT_MS = 220;

export default function PageTransition({ children, isContentLoading = false }) {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);
  const transitionStartedAt = useRef(0);
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [readyPathname, setReadyPathname] = useState(null);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) return undefined;

    previousPathname.current = pathname;
    transitionStartedAt.current = Date.now();
    setIsActive(true);
    setIsExiting(false);
    setReadyPathname(null);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (window.scrollY <= 0) {
      setReadyPathname(pathname);
      return undefined;
    }

    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
    let fallbackTimer;
    let scrollingFinished = false;
    const finishScrolling = () => {
      if (scrollingFinished) return;
      scrollingFinished = true;
      window.removeEventListener('scrollend', finishScrolling);
      window.clearTimeout(fallbackTimer);
      setReadyPathname(pathname);
    };

    window.addEventListener('scrollend', finishScrolling, { once: true });
    window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior });
    fallbackTimer = window.setTimeout(
      finishScrolling,
      prefersReducedMotion ? 0 : SCROLL_FALLBACK_MS
    );

    return () => {
      window.removeEventListener('scrollend', finishScrolling);
      window.clearTimeout(fallbackTimer);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isActive || readyPathname !== pathname || isContentLoading) return undefined;

    const remainingVisibleTime = Math.max(
      0,
      MIN_VISIBLE_MS - (Date.now() - transitionStartedAt.current)
    );
    const exitTimer = window.setTimeout(
      () => setIsExiting(true),
      remainingVisibleTime
    );

    return () => window.clearTimeout(exitTimer);
  }, [isActive, isContentLoading, pathname, readyPathname]);

  useEffect(() => {
    if (!isActive || !isExiting) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const exitTimer = window.setTimeout(
      () => {
        setIsActive(false);
        setIsExiting(false);
      },
      prefersReducedMotion ? 0 : FADE_OUT_MS
    );

    return () => window.clearTimeout(exitTimer);
  }, [isActive, isExiting, pathname]);

  return (
    <>
      <div inert={isActive}>{children}</div>
      {isActive && (
        <div
          className={`page-transition-overlay${isExiting ? ' page-transition-overlay--exiting' : ''}`}
          role="status"
          aria-live="polite"
          onWheel={(event) => event.preventDefault()}
          onTouchMove={(event) => event.preventDefault()}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="page-transition-spinner border-surface-container-high border-t-primary" aria-hidden="true" />
            <p className="text-title-md font-bold text-primary">FoodBank</p>
            <p className="text-body-md text-on-surface-variant">
              Finding something delicious...
            </p>
          </div>
        </div>
      )}
    </>
  );
}
