import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-400 py-16 px-6 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold text-white mb-6">DigiTools</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Templates</a></li>
            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Community</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs">© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-8 text-xs">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;