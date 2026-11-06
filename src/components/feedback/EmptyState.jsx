export default function EmptyState({ icon, title, message, ctaLabel, onCtaClick }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-5 text-center px-4">
      <span
        className="material-symbols-outlined text-on-surface-variant"
        style={{ fontSize: '64px' }}
      >
        {icon}
      </span>

      <div className="space-y-2">
        <h3 className="text-headline-md font-bold text-on-surface font-display">
          {title}
        </h3>
        <p className="text-body-md text-on-surface-variant max-w-sm">{message}</p>
      </div>

      {ctaLabel && onCtaClick && (
        <button
          onClick={onCtaClick}
          className="mt-2 px-8 py-3 bg-primary text-on-primary rounded-full text-label-md font-semibold hover:bg-primary-container active:scale-95 transition-all"
        >
          {ctaLabel}
        </button>
      )}
    </div>
  );
}
