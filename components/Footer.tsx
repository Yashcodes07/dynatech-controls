"use client";
import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Common style for the sliding underline animation
  const linkStyle = "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-blue-600 transition-colors duration-300";

  return (
    <footer className="bg-slate-50 text-slate-600 py-12 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">
            Dynatech Controls<span className="text-blue-600">.</span>
          </h2>
          <address className="not-italic text-sm leading-relaxed">
            Plot No. 239<br />
            Sector 8, Imt Manesar, Gurugram,<br />
            Haryana 122050<br />
            India
          </address>
          <div className="text-sm space-y-1">
            <p><strong>Phone:</strong> + 91 81301-11432</p>
            <p><strong>Phone:</strong> + 91 72899-89683</p>
            <p className="pt-2"><strong>Email:</strong>Shubhankar.singh@dynatechcontrols.in</p>
            <p><strong>Email:</strong> Praval.singh@dynatechcontrols.in</p>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4 text-lg">Useful Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className={linkStyle}>Home</a></li>
            <li><a href="#about" className={linkStyle}>About us</a></li>
            <li><a href="#services" className={linkStyle}>Services</a></li>
            <li><a href="#" className={linkStyle}>Terms of service</a></li>
            <li><a href="#" className={linkStyle}>Privacy policy</a></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4 text-lg">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-600 transition-colors cursor-default">SPM Designing And Manufacturing</li>
            <li className="hover:text-red-600 transition-colors cursor-default">LEAK TESTING</li>
            <li className="hover:text-red-600 transition-colors cursor-default">LIGHTING SPM</li>
            <li className="hover:text-red-600 transition-colors cursor-default">PLC Programming</li>
            <li className="hover:text-red-600 transition-colors cursor-default">ROBOTIC WELDING</li>
            <li className="hover:text-red-600 transition-colors cursor-default">PNEUMATIC</li>
            <li className="hover:text-red-600 transition-colors cursor-default">JIG And Fixtures</li>
          </ul>
        </div>

        {/* Column 4: Social Networks */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4 text-lg">Our Social Networks</h3>
          <p className="text-sm mb-6">Connect with us on our social platforms.</p>
          <div className="flex gap-4">
            {/* LinkedIn */}
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/company/dynatech-controls"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white shadow-sm transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>

            {/* Instagram */}
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/dynatech_controls" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#e4405f] hover:text-white shadow-sm transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </motion.a>

            {/* Facebook */}
            {/* <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com/your-page" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#1877f2] hover:text-white shadow-sm transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </motion.a> */}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© Copyright <strong>Dynatech Controls</strong>. All Rights Reserved</p>
        <p className="text-slate-400">Designed for Excellence</p>
      </div>
    </footer>
  );
};

export default Footer;