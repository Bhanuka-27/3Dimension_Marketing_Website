import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "inline-flex items-center px-1 pt-1 text-sm font-medium transition-all";
    const activeClasses = "text-gray-100 border-b-2 border-gray-600";
    const inactiveClasses = "text-gray-300 border-b-2 border-transparent hover:text-gray-100 hover:border-gray-600";
    
    return `${baseClasses} ${isActivePath(path) ? activeClasses : inactiveClasses}`;
  };

  const getMobileLinkClasses = (path: string) => {
    const baseClasses = "block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-all";
    const activeClasses = "border-gray-600 text-gray-100 bg-gray-700";
    const inactiveClasses = "border-transparent text-gray-300 hover:text-gray-100 hover:bg-gray-600 hover:border-gray-600";
    
    return `${baseClasses} ${isActivePath(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="bg-gray-800 shadow-lg fixed w-full z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              {/* Make logo responsive */}
              <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 overflow-hidden rounded-full transition-all duration-300 group-hover:ring-2 group-hover:ring-gray-600">
                <img 
                  src="/Logo.png"
                  alt="3Dimension Logo" 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="ml-2 md:ml-4 text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 transition-colors duration-300 group-hover:text-gray-300">3Dimension</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-4 lg:space-x-8">
              {[
                { path: "/", label: "Home" },
                { path: "/services", label: "Services" },
                { path: "/about", label: "About Us" },
                { path: "/team", label: "Project Team" },
                { path: "/contact", label: "Contact Us" }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={getLinkClasses(path)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="flex items-center">
            <button className="hidden md:block bg-gray-700 text-gray-100 px-4 lg:px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-gray-900/50">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } md:hidden fixed inset-0 z-50 transform transition-all duration-300 ease-in-out`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-gray-900/50 backdrop-blur-sm ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative bg-gray-800 w-64 max-w-sm h-full border-r border-gray-700 overflow-y-auto">
          <div className="px-4 pt-5 pb-6">
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/" 
                className="flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src="/Logo.png" alt="3Dimension Logo" className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold text-gray-100">3Dimension</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-1">
              {[
                { path: "/", label: "Home" },
                { path: "/services", label: "Services" },
                { path: "/about", label: "About Us" },
                { path: "/team", label: "Project Team" },
                { path: "/contact", label: "Contact Us" }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={getMobileLinkClasses(path)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <button className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-full text-base font-medium hover:bg-gray-600 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
