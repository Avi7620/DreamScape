import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', section: 'home' },
    { label: 'Services', section: 'services' },
    { label: 'Destinations', section: 'destinations' },
    { label: 'About', section: 'about' },
    { label: 'Contact', section: 'contact' }
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Plane className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'} transition-colors`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} transition-colors`}>
              DreamScape
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                } ${activeSection === item.section ? 'text-blue-500' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-sm`}>
        <div className="px-4 py-2 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;