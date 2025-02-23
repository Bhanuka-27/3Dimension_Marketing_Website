import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/90 text-gray-300 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full">
                <img src={"Logo.png"} alt="3Dimension Logo" className="w-full h-full object-contain" />
              </div>
              <span className="ml-2 md:ml-3 text-lg md:text-xl font-bold text-gray-100">3Dimension</span>
            </Link>
            <p className="text-sm md:text-base text-gray-400">
              Empowering businesses with innovative software solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/3dimension1.0/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/3dimension1-0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gray-100 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gray-100 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-gray-100 transition-colors">Project Team</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gray-100 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <span>+94 779 078 188</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:3dimension25tech@gmail.com" className="hover:text-gray-100 transition-colors">
                  3dimension25tech@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            &copy; {currentYear} 3Dimension. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
