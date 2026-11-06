
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-app mx-auto px-gutter py-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>

            <span className="text-headline-lg-mobile font-extrabold text-white font-display">
              Food Bank
            </span>

            <p className="text-label-md text-surface-container-highest mt-1">
              Discover the best food & drinks near you
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
            {['About Us', 'Contact', 'Terms of Service', 'Privacy Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-label-md text-surface-container-highest hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-label-sm text-surface-container-highest">
            &copy; {year} Food Bank. All rights reserved. Built with React + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
