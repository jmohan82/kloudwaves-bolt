import React from 'react';

export function CTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
        <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
          Let's collaborate to bring your vision to life. Our team is ready to help you succeed.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </div>
    </section>
  );
}