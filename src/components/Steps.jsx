import React from 'react';
import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const Steps = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1f2937] mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="bg-white p-10 rounded-2xl shadow-sm text-center border border-gray-100 relative">
          <span className="absolute top-4 right-4 bg-[#8b5cf6] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">01</span>
          <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <img src={userIcon} alt="Create Account" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-[#1f2937] mb-3">Create Account</h3>
          <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-10 rounded-2xl shadow-sm text-center border border-gray-100 relative">
          <span className="absolute top-4 right-4 bg-[#8b5cf6] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">02</span>
          <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <img src={packageIcon} alt="Choose Products" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-[#1f2937] mb-3">Choose Products</h3>
          <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-10 rounded-2xl shadow-sm text-center border border-gray-100 relative">
          <span className="absolute top-4 right-4 bg-[#8b5cf6] text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">03</span>
          <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <img src={rocketIcon} alt="Start Creating" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-[#1f2937] mb-3">Start Creating</h3>
          <p className="text-gray-500 text-sm">Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;