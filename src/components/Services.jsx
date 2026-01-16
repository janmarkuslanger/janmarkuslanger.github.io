import SectionHeader from './SectionHeader.jsx';
import ServiceCard from './ServiceCard.jsx';
import { services } from '../data/services.js';

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="Leistungen"
          title="Ich biete fokussierte Unterstützung von Strategie bis Umsetzung"
          description="Ich unterstütze Sie dabei, verlässliche Software zu bauen, Unsicherheit zu reduzieren und die Umsetzung an Ergebnissen auszurichten."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
