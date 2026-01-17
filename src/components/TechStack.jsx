import SectionHeader from './SectionHeader.jsx';
import TechGroup from './TechGroup.jsx';
import { techStack } from '../data/tech.js';

const TechStack = () => {
  return (
    <section id="tech" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="Technologien"
          title="Ich nutze einen fokussierten, verlässlichen Stack"
          description="Ich setze auf bewährte Sprachen und Cloud-Tools, die Systeme robust, skalierbar und wartbar halten."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {techStack.map((group) => (
            <TechGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
