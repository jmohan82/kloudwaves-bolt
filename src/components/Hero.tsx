import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Crafting Digital Excellence
          </h1>
          <p className="text-gray-300 text-xl mb-8">
            We transform your ideas into powerful digital solutions. Expert web development tailored to your success.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition flex items-center"
            >
              Start Project <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border border-gray-500 text-white px-8 py-3 rounded-full hover:border-blue-500 transition"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Development Team"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}