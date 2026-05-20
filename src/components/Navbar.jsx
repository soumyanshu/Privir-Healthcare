import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Campaigns', path: '/campaigns' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/40 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/images/logo.jpg" 
                alt="Privir Healthcare Logo" 
                className="h-11 w-11 object-contain rounded-xl shadow-sm border border-gray-100 transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="font-poppins font-extrabold text-xl text-primary-darkBlue leading-none tracking-wide group-hover:text-primary-green transition-colors duration-300">PRIVIR</span>
                <span className="font-poppins font-bold text-[9px] text-primary-green tracking-[0.25em] leading-none mt-1 uppercase">HEALTHCARE</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`relative py-2 text-sm font-bold tracking-wide transition duration-300 ${
                  isActive(link.path) 
                    ? 'text-primary-green font-semibold' 
                    : 'text-primary-darkBlue/80 hover:text-primary-green'
                } group`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary-green transition-transform duration-300 origin-center ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
            <Link 
              to="/donate" 
              className="relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-300 bg-gradient-to-r from-primary-green to-primary-lightGreen rounded-full overflow-hidden hover:scale-105 hover:shadow-[0_4px_15px_rgba(46,139,87,0.3)]"
            >
              <Heart className="w-4 h-4 mr-2 animate-pulse" />
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-primary-darkBlue hover:text-primary-green focus:outline-none p-2 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 absolute top-full left-0 w-full shadow-xl animate-fade-in-up py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`block px-4 py-3 rounded-2xl text-base font-bold transition-all duration-300 ${
                isActive(link.path) 
                  ? 'bg-primary-green/10 text-primary-green' 
                  : 'text-primary-darkBlue hover:bg-gray-50 hover:text-primary-green'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 mt-2">
            <Link 
              to="/donate" 
              className="block w-full text-center bg-gradient-to-r from-primary-green to-primary-lightGreen text-white py-3.5 rounded-2xl font-bold transition duration-300 shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
