
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Download } from 'lucide-react';

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          
          <div className="hidden md:flex items-center space-x-36 ml-12">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground text-2xl hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground text-2xl hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground text-2xl hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground text-2xl hover:text-primary transition-colors"
            >
              Contact
            </button>
            <a
              href="https://drive.google.com/file/d/1yuPR2f-IBya93gKcfu9FRiUlSSABcxl-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-2xl items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-4"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
