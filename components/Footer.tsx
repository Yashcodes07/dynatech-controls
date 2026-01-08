"use client";
import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Common style for the sliding underline animation
  const linkStyle = "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-red-600 transition-colors duration-300";

  return (
 <footer className="bg-slate-50 text-slate-600 py-10 px-4 border-t border-slate-200">
  <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

    {/* Column 1: Company Info */}
    <div className="space-y-3 col-span-2 sm:col-span-1">
      <div>
        <p className="font-bold text-xl text-red-600">Dynatech</p>
        <p className="font-semibold text-xl text-black">Controls</p>
      </div>

      <address className="not-italic text-xs leading-relaxed">
        Plot No. 239, Sector 8<br />
        IMT Manesar, Gurugram<br />
        Haryana 122050, India
      </address>

      <a
        href="https://maps.app.goo.gl/ABorft4XZ24bn5e87"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-medium bg-red-200 text-red-700 hover:bg-white transition"
      >
        📍 Google Maps
      </a>

      <div className="text-xs space-y-0.5">
        <p><strong>📞</strong> +91 81301-11432</p>
        <p><strong>📞</strong> +91 72899-89683</p>
        <p className="pt-1"><strong>✉</strong> Shubhankar.singh@dynatechcontrols.in</p>
        <p><strong>✉</strong> Praval.singh@dynatechcontrols.in</p>
      </div>
    </div>

    {/* Column 2: Useful Links */}
    <div>
      <h3 className="font-bold text-slate-900 mb-3 text-sm">Useful Links</h3>
      <ul className="space-y-2 text-xs">
        <li><a href="#home" className={linkStyle}>Home</a></li>
        <li><a href="#about" className={linkStyle}>About</a></li>
        <li><a href="#services" className={linkStyle}>Services</a></li>
        <li><a href="#products" className={linkStyle}>Products</a></li>
        <li><a href="#contact" className={linkStyle}>Contact</a></li>
      </ul>
    </div>

    {/* Column 3: Services */}
    <div>
      <h3 className="font-bold text-slate-900 mb-3 text-sm">Services</h3>
      <ul className="space-y-2 text-xs">
        <li>SPM Designing</li>
        <li>Leak Testing</li>
        <li>Lighting SPM</li>
        <li>PLC Programming</li>
        <li>Robotic Welding</li>
      </ul>
    </div>

    {/* Column 4: Social */}
    <div>
      <h3 className="font-bold text-slate-900 mb-3 text-sm">Social</h3>
      <p className="text-xs mb-4">Connect with us</p>

      <div className="flex gap-3">
        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          href="https://www.linkedin.com/company/dynatech-controls"
          target="_blank"
          className="w-9 h-9 bg-white border rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition"
        >
          <Linkedin size={18} />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          href="https://instagram.com/dynatech_controls"
          target="_blank"
          className="w-9 h-9 bg-white border rounded-full flex items-center justify-center hover:bg-[#e4405f] hover:text-white transition"
        >
          <Instagram size={18} />
        </motion.a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-slate-200 text-xs flex flex-col sm:flex-row justify-between items-center gap-2">
    <p>© Dynatech Controls. All Rights Reserved</p>
    <p className="text-slate-400">Designed for Excellence</p>
  </div>
</footer>

  );
};

export default Footer;