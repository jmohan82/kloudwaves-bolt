import React from 'react';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Code2 className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">KloudWaves</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 KloudWaves. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}