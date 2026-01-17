import LegalLayout from '../layouts/LegalLayout.jsx';

const Imprint = () => {
  return (
    <LegalLayout
      title="Impressum"
      description="Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV."
    >
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Angaben gemäß § 5 TMG</h2>
        <p>
          Jan-Markus Langer
          <br />
          Breslauer Str. 7
          <br />
          51789 Lindlar
          <br />
          Deutschland
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Kontakt</h2>
        <p>
          E-Mail: janlanger.softwareengineering@gmail.com
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p>
          Jan-Markus Langer
          <br />
          Breslauer Str. 7
          <br />
          51789 Lindlar
          <br />
          Deutschland
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Umsatzsteuer</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: nicht vorhanden.
          <br />
          Als Kleinunternehmer gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen
          zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
          der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
          entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Haftung für Links</h2>
        <p>
          Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
          Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
          mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
          ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Imprint;
