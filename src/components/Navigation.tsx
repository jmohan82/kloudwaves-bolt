import React from 'react';
import { Logo } from './Logo';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
          <a href="#work" className="text-gray-300 hover:text-white transition">Our Work</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>
        <button onClick={() => scrollToSection('contact')} className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}