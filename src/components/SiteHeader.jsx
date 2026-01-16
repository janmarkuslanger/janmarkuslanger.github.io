const SiteHeader = ({ minimal = false }) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a className="flex items-center gap-2 text-sm font-semibold text-text" href={baseUrl}>
          <span className="h-2 w-2 rounded-full bg-accent shadow-glow" aria-hidden="true" />
          Jan Markus Langer
        </a>
        {!minimal && (
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="link-muted" href="#services">
              Leistungen
            </a>
            <a className="link-muted" href="#tech">
              Technologien
            </a>
            <a className="link-muted" href="#contact">
              Kontakt
            </a>
          </nav>
        )}
        {!minimal && (
          <a
            className="btn-secondary text-xs sm:text-sm"
            href="mailto:janlanger.softwareengineering@gmail.com"
          >
            Projekt anfragen
          </a>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
