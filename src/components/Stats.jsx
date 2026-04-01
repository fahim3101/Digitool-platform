import React from 'react';

const Stats = () => {
  return (
    <div className="bg-[#8b5cf6] py-16 px-6 lg:px-20 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-purple-400">
        <div className="w-full md:w-1/3 py-4 md:py-0">
          <h2 className="text-5xl lg:text-6xl font-bold mb-2">50K+</h2>
          <p className="text-purple-100 text-lg">Active Users</p>
        </div>
        <div className="w-full md:w-1/3 py-4 md:py-0">
          <h2 className="text-5xl lg:text-6xl font-bold mb-2">200+</h2>
          <p className="text-purple-100 text-lg">Premium Tools</p>
        </div>
        <div className="w-full md:w-1/3 py-4 md:py-0">
          <h2 className="text-5xl lg:text-6xl font-bold mb-2">4.9</h2>
          <p className="text-purple-100 text-lg">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;