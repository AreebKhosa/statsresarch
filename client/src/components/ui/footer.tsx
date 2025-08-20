import { Linkedin, Twitter } from "lucide-react";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-portfolio-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/attached_assets/organization logo_1754146980657.png" 
                alt="Statistical Institute Logo" 
                className="h-16 w-16 object-contain mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Statistical Institute of Research and Science</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">Premier Research Institute & Statistical Consulting</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <SiGooglescholar className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <SiResearchgate className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors duration-200">Expertise</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Research</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Latest Publication</h4>
            <p className="text-gray-300 text-sm mb-2">"Advanced Bayesian Methods for Healthcare Analytics"</p>
            <p className="text-gray-400 text-sm">Journal of Statistical Medicine, 2023</p>
            <button className="mt-3 text-portfolio-secondary hover:text-white font-semibold transition-colors duration-200 flex items-center gap-2">
              Download PDF <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2023 Statistical Institute of Research and Science. All rights reserved. | Premier Research Institute</p>
        </div>
      </div>
    </footer>
  );
}
