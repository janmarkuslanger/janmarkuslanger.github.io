const Hero = () => {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 animate-fade-up">
            <p className="section-kicker">Softwareentwickler und Softwarearchitekt</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Ich baue zuverlässige Systeme mit Klarheit und Ruhe.
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Ich bin Softwareentwickler und Softwarearchitekt mit Fokus auf Clean Architecture,
              wartbare Systeme und klare Problemlösung. Ich helfe Teams, verlässliche Produkte zu
              liefern, die sich langfristig weiterentwickeln lassen und an Geschäftszielen
              ausgerichtet bleiben.
            </p>
            <p className="text-sm text-muted">
              Ausserhalb der Arbeit bin ich sportlich aktiv und stärke damit Disziplin,
              Kontinuität und Balance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href="mailto:janlanger.softwareengineering@gmail.com">
                Gespräch starten
              </a>
              <a className="btn-secondary" href="#services">
                Leistungen ansehen
              </a>
            </div>
          </div>
          <div className="card space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Arbeitsweise</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Fokus</span>
            </div>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                Ich entwerfe Clean Architecture, die Teams schnell arbeiten lässt und Systeme
                stabil hält.
              </li>
              <li>Ich baue wartbare Codebasen mit klarer Verantwortung und nachhaltiger Umsetzung.</li>
              <li>Ich kläre Problemstellungen gründlich, bevor ich Lösungen baue.</li>
              <li>Ich kommuniziere kollaborativ mit klarem Fokus auf Umsetzung.</li>
            </ul>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-muted">
              Ich bin für ausgewählte Freelance- und Consulting-Projekte verfügbar.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
