import React from 'react';
import { Cloud, Code2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <Cloud className="h-10 w-10 text-blue-500" />
        
      </div>
      <span className="ml-3 text-xl font-bold text-white">
        <span className="text-blue-500">Kloud</span>Waves
      </span>
    </div>
  );
}