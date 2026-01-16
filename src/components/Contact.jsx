import SectionHeader from './SectionHeader.jsx';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeader
            kicker="Kontakt"
            title="Ich bin bereit, zuverlässige Systeme zu bauen"
            description="Wenn Sie einstellen, architektonische Unterstützung brauchen oder einen verlässlichen Partner für die Umsetzung suchen, lassen Sie uns sprechen."
          />
          <div className="card space-y-4">
            <p className="text-sm text-muted">
              Senden Sie mir eine kurze Beschreibung und Ihren Zeitplan. Ich antworte innerhalb von
              zwei Werktagen.
            </p>
            <a className="btn-primary w-full" href="mailto:janlanger.softwareengineering@gmail.com">
              janlanger.softwareengineering@gmail.com
            </a>
            <div className="flex flex-col gap-2 text-sm">
              <a
                className="link-muted"
                href="https://github.com/janmarkuslanger"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="link-muted"
                href="https://www.linkedin.com/in/jan-markus-langer/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
