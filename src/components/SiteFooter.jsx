const SiteFooter = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>{year} Jan Markus Langer. Alle Rechte vorbehalten.</span>
        <div className="flex flex-wrap items-center gap-4">
          <a className="link-muted" href={`${baseUrl}imprint.html`}>
            Impressum
          </a>
          <a className="link-muted" href={`${baseUrl}privacy.html`}>
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
