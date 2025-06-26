
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Animesh Anand</h3>
            <p className="opacity-80">Product Strategist & Creative Professional</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:2023ceb1024@iitrpr.ac.in"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/animesh-anand-iitrpr"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              LinkedIn
            </a>
            <a 
              href="https://instagram.com/animesh_anand_official"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="opacity-60">
            © 2024 Animesh Anand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
