import LegalLayout from '../layouts/LegalLayout.jsx';

const Privacy = () => {
  return (
    <LegalLayout
      title="Datenschutz"
      description="Informationen zur Verarbeitung personenbezogener Daten auf dieser Website."
    >
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Verantwortliche Stelle</h2>
        <p>
          Jan-Markus Langer
          <br />
          Breslauer Str. 7
          <br />
          51789 Lindlar
          <br />
          Deutschland
          <br />
          E-Mail: janlanger.softwareengineering@gmail.com
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Hosting</h2>
        <p>
          Diese Website wird über GitHub Pages bereitgestellt. Anbieter ist GitHub, Inc.,
          88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA. Beim Aufruf der Website werden
          durch GitHub technische Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Abrufs,
          angeforderte Seite, Referrer, Browser-Informationen) in Server-Logfiles verarbeitet.
          Die Verarbeitung erfolgt zur Sicherstellung des technischen Betriebs und der Sicherheit
          der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Dabei kann eine Verarbeitung
          von Daten in den USA nicht ausgeschlossen werden; GitHub nutzt hierfür
          Standardvertragsklauseln.
        </p>
      </section>
      <section className="space-y-2">

      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Kontaktaufnahme</h2>
        <p>
          Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (z. B.
          Name, E-Mail-Adresse, Nachricht) zur Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht,
          sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Cookies und Tracking</h2>
        <p>
          Diese Website setzt keine Cookies, kein Tracking und keine Analyse-Tools ein.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Externe Links</h2>
        <p>
          Diese Website enthält Links zu externen Profilen (GitHub, LinkedIn). Beim Anklicken gelten
          die Datenschutzbestimmungen der jeweiligen Anbieter. Dabei kann es zu einer Verarbeitung
          personenbezogener Daten außerhalb der EU kommen.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der
          Verarbeitung Ihrer personenbezogenen Daten. Sie können außerdem der Verarbeitung
          widersprechen und Datenübertragbarkeit verlangen. Zudem haben Sie das Recht, sich bei
          einer Datenschutzaufsichtsbehörde zu beschweren.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Privacy;
