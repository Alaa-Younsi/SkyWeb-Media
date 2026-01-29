import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center px-2 md:px-0">
            <img src="/favicon.png" alt="SkyWeb Media" className="w-10 h-10" />
            <span className="ml-3 text-2xl font-bold text-skyblue-900">SkyWeb Media</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-skyblue-700 hover:text-skyblue-900 font-medium transition-colors">Home</a>
            <a href="#services" className="text-skyblue-700 hover:text-skyblue-900 font-medium transition-colors">Services</a>
            <a href="#why-us" className="text-skyblue-700 hover:text-skyblue-900 font-medium transition-colors">Why Us</a>
            <a href="#approach" className="text-skyblue-700 hover:text-skyblue-900 font-medium transition-colors">Approach</a>
            <a href="#contact" className="text-skyblue-700 hover:text-skyblue-900 font-medium transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block btn-primary">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-skyblue-700 px-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-4 border-t border-skyblue-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-skyblue-700 hover:text-skyblue-900 font-medium py-2">Home</a>
              <a href="#services" className="text-skyblue-700 hover:text-skyblue-900 font-medium py-2">Services</a>
              <a href="#why-us" className="text-skyblue-700 hover:text-skyblue-900 font-medium py-2">Why Us</a>
              <a href="#approach" className="text-skyblue-700 hover:text-skyblue-900 font-medium py-2">Approach</a>
              <a href="#contact" className="text-skyblue-700 hover:text-skyblue-900 font-medium py-2">Contact</a>
              <button className="btn-primary w-full mt-4">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;