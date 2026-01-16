import LegalLayout from '../layouts/LegalLayout.jsx';

const Privacy = () => {
  return (
    <LegalLayout
      title="Datenschutz"
      description="Dies ist ein Platzhaltertext und wird mit meiner Datenschutzerklaerung ersetzt."
    >
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Verantwortliche Stelle</h2>
        <p>
          Jan Markus Langer
          <br />
          Strasse
          <br />
          PLZ Ort
          <br />
          Land
          <br />
          E-Mail: janlanger.softwareengineering@gmail.com
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Erhobene Daten</h2>
        <p>
          Ich erhebe nicht bewusst personenbezogene Daten ausser den Informationen, die Sie mir bei
          einer Kontaktaufnahme senden. Dieser Abschnitt wird mit Details zu Analytics, Formularen
          oder Hosting-Logs ergaenzt, falls genutzt.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Zweck der Verarbeitung</h2>
        <p>
          Ich verarbeite Daten, um Anfragen zu beantworten und einen sicheren, verlaesslichen
          Betrieb der Website zu gewaehren. Dieser Abschnitt wird an meine tatsaechlichen Zwecke
          angepasst.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Speicherdauer</h2>
        <p>
          Ich speichere personenbezogene Daten nur so lange, wie es fuer den Zweck erforderlich ist.
          Dieser Abschnitt wird mit konkreten Fristen ergaenzt, falls relevant.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Loeschung oder Einschraenkung der
          Verarbeitung Ihrer personenbezogenen Daten. Sie koennen ausserdem der Verarbeitung
          widersprechen und Datenuebertragbarkeit verlangen. Fuer Anfragen nutzen Sie bitte die
          Kontaktdaten oben.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-base font-semibold text-text">Drittanbieter</h2>
        <p>
          Ich nutze die folgenden Drittanbieter (Analytics, Hosting, E-Mail): [Platzhalter]. Wenn
          keine genutzt werden, wird dies hier explizit genannt.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Privacy;
