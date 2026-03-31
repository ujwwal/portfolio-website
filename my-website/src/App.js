import Navbar from './components/layout/Navbar';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';

function App() {
  return (
    <div className="bg-page text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
