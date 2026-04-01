import React from 'react';
import bannerImg from '../assets/banner.png';
import playIcon from '../assets/Play.png';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 lg:px-20 lg:py-20 bg-white">
      {/* Left Content */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#8b5cf6] text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-[#8b5cf6]"></span>
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-[#1f2937] leading-tight mb-6">
          Supercharge Your <br className="hidden lg:block" /> Digital Workflow
        </h1>
        <p className="text-gray-500 text-base lg:text-lg mb-8 max-w-md">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold py-3 px-8 rounded-full transition shadow-lg shadow-purple-500/30">
            Explore Products
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#8b5cf6] text-[#8b5cf6] hover:bg-purple-50 font-semibold py-3 px-8 rounded-full transition">
            <img src={playIcon} alt="Play" className="w-4 h-4" /> Watch Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img src={bannerImg} alt="Digital Workflow" className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-xl" />
      </div>
    </div>
  );
};

export default Banner;