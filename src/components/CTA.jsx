import React from 'react';

const CTA = () => {
  return (
    <div className="bg-[#8b5cf6] py-24 px-6 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready To Transform Your Workflow?</h2>
      <p className="text-purple-100 mb-10 max-w-2xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <button className="bg-white text-[#8b5cf6] font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition shadow-xl">
          Explore Products
        </button>
        <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition">
          View Pricing
        </button>
      </div>
      <p className="text-purple-200 text-sm">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default CTA;