import React from 'react';

export function Portfolio() {
  return (
    <section id="work" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white text-center mb-16">Our Work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80" 
            alt="E-commerce Platform" 
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">E-commerce Platform</h3>
              <p className="text-gray-300">Modern shopping experience with React</p>
            </div>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80" 
            alt="Healthcare Dashboard" 
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">Healthcare Dashboard</h3>
              <p className="text-gray-300">Real-time patient monitoring system</p>
            </div>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80" 
            alt="Mobile App" 
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">Mobile App</h3>
              <p className="text-gray-300">Cross-platform fitness tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}