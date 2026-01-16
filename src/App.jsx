import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import TechStack from './components/TechStack.jsx';
import Contact from './components/Contact.jsx';
import SiteFooter from './components/SiteFooter.jsx';

const App = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
