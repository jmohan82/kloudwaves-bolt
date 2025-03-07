import React from 'react';
import { Rocket, Cloud, Zap, Users, Settings, LineChart } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white text-center mb-16">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
          <Rocket className="h-12 w-12 text-blue-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
          <p className="text-gray-400">Custom web applications built with modern technologies and best practices.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
          <Cloud className="h-12 w-12 text-blue-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Cloud Hosting</h3>
          <p className="text-gray-400">Secure, scalable cloud hosting solutions with 99.9% uptime guarantee.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
          <Zap className="h-12 w-12 text-blue-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Performance Optimization</h3>
          <p className="text-gray-400">Enhance your website's speed and efficiency for better user experience.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
          <Settings className="h-12 w-12 text-blue-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Web Maintenance</h3>
          <p className="text-gray-400">Regular updates, security patches, and ongoing support to keep your site running smoothly.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
          <Users className="h-12 w-12 text-blue-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Technical Consulting</h3>
          <p className="text-gray-400">Expert guidance on technology choices and architecture decisions.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
          <LineChart className="h-12 w-12 text-blue-500 mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Analytics & Monitoring</h3>
          <p className="text-gray-400">Track performance metrics and user behavior to optimize your digital presence.</p>
        </div>
      </div>
    </section>
  );
}