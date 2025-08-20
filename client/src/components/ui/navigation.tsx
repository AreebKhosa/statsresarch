import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../logo.jpg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <img 
                src={logo} 
                alt="Statistical Institute Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xs text-portfolio-primary font-medium mt-1 text-center leading-tight">
                Statistical Institute of<br />Research and Science
              </span>
            </div>
            <span className="ml-4 text-sm text-portfolio-muted hidden lg:block">Excellence in Analytics</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium">Home</a>
            <a href="#expertise" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium">Expertise</a>
            <a href="#services" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium">Services</a>
            <a href="#projects" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium">Research</a>
            <a href="#visualizations" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium">Visualizations</a>
            {/* <a href="#team" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium">Team</a> */}
            <a href="#contact" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium">Contact</a>
          </div>
          
          <button 
            className="md:hidden text-portfolio-primary hover:text-portfolio-secondary transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#expertise" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>Expertise</a>
              <a href="#services" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#projects" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>Research</a>
              <a href="#visualizations" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>Visualizations</a>
              <a href="#team" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>Team</a>
              <a href="#contact" className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
