import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Services from './components/Services';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'destinations', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroCarousel />
      <Services />
      <Destinations />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;