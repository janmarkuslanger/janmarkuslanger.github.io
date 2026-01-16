import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';

const LegalLayout = ({ title, description, children }) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen">
      <SiteHeader minimal />
      <main className="section">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 space-y-3">
            <p className="section-kicker">Rechtliches</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
            <p className="text-sm text-muted sm:text-base">{description}</p>
            <a className="link-muted text-sm" href={baseUrl}>
              Zur Startseite
            </a>
          </div>
          <div className="space-y-6 text-sm text-muted leading-relaxed">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default LegalLayout;
