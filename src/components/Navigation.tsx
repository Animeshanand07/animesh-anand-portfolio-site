
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Download, Menu, X, ExternalLink } from 'lucide-react';

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b shadow-sm' : 'bg-background/70 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Animesh Anand
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground text-lg hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground text-lg hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground text-lg hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground text-lg hover:text-primary transition-colors"
            >
              Contact
            </button>
            <a
              href="https://drive.google.com/drive/folders/1GhT7gIMCUsEM5dMpPvAXG3QS-OraKTT4?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-lg items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
            <a
              href="https://animeshtales.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-lg items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <ExternalLink size={16} />
              <span>Freelance</span>
            </a>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground text-lg hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground text-lg hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-foreground text-lg hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground text-lg hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <a
                href="https://drive.google.com/drive/folders/1GhT7gIMCUsEM5dMpPvAXG3QS-OraKTT4?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-lg items-center space-x-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
              <a
                href="https://animeshtales.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-lg items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ExternalLink size={16} />
                <span>Freelance</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
