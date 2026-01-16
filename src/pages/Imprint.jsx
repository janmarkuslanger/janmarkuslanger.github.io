import LegalLayout from '../layouts/LegalLayout.jsx';

const Imprint = () => {
  return (
    <LegalLayout
      title="Impressum"
      description="Dies ist ein Platzhaltertext und wird mit meinen offiziellen Angaben ersetzt."
    >
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Verantwortlich für den Inhalt</h2>
        <p>
          Jan Markus Langer
          <br />
          Strasse
          <br />
          PLZ Ort
          <br />
          Land
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Kontakt</h2>
        <p>
          Telefon: +00 000 000000
          <br />
          E-Mail: janlanger.softwareengineering@gmail.com
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">USt-IdNr.</h2>
        <p>USt-IdNr. gemäss Section 27a UStG: [Platzhalter]</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Haftung für Inhalte</h2>
        <p>
          Ich erstelle die Inhalte dieser Website mit Sorgfalt. Für die Richtigkeit,
          Vollständigkeit und Aktualität übernehme ich keine Haftung. Dieser Abschnitt wird mit
          meinem offiziellen Rechtstext ersetzt.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Haftung für Links</h2>
        <p>
          Externe Links stelle ich zur Orientierung bereit. Für die Inhalte externer Links sind die
          jeweiligen Betreiber verantwortlich. Dieser Abschnitt wird mit meinem offiziellen
          Rechtstext ersetzt.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Imprint;
