import { useTheme } from './hooks/useTheme';
import { ContactSection } from './components/contact/ContactSection';
import { AdvantagesSection } from './components/sections/AdvantagesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen overflow-hidden bg-brand-lightBg font-body text-brand-navy transition-colors duration-300 dark:bg-brand-darkBg dark:text-slate-100">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <ServicesSection />
        <AdvantagesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
