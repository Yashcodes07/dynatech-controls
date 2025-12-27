import React from 'react';
import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
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
          <div className="text-sm">
            <p><strong>Phone:</strong> + 91 81301-11432 </p>
            <p><strong>Phone:</strong> + 91 72899-89683</p>
            <p><strong>Email:</strong> Shubhankar.singh@dynatechcontrols.in</p>
            <p><strong>Email:</strong> Praval.singh@dynatechcontrols.in</p>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition">About us</a></li>
            <li><a href="#service" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Terms of service</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Privacy policy</a></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>SPM Designing And Manufacturing</li>
            <li>LEAK TESTING</li>
            <li>LIGHTING SPM</li>
            <li>PLC Programming</li>
            <li>ROBOTIC WELDING</li>
            <li>PNEUMATIC</li>
            <li>JIG And Fixtures</li>
          </ul>
        </div>

        {/* Column 4: Social Networks */}
    
<div>
  <h3 className="font-bold text-slate-800 mb-4">Our Social Networks</h3>
  <p className="text-sm mb-4">Connect with us on our social platforms.</p>
  <div className="flex gap-3">
    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/company/dynatech-controls"
      target="_blank" 
      rel="noopener noreferrer"
      className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300"
      aria-label="LinkedIn"
    >
      <Linkedin size={18} />
    </a>

    {/* Instagram */}
    <a 
      href="https://instagram.com/dynatech_controls" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center hover:bg-[#e4405f] hover:text-white transition-all duration-300"
      aria-label="Instagram"
    >
      <Instagram size={18} />
    </a>

    {/* Facebook */}
    <a 
      href="https://facebook.com/your-page" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all duration-300"
      aria-label="Facebook"
    >
      <Facebook size={18} />
    </a>

    {/* Twitter/X */}
    {/* <a 
      href="https://twitter.com/your-handle" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
      aria-label="Twitter"
    >
      <Twitter size={18} />
    </a> */}
  </div>
</div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 text-sm">
        <p>© Copyright <strong>Dynatech Controls</strong>. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;