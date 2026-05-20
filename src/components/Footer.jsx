import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-darkBlue text-white pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      {/* Background soft glow blobs */}
      <div className="absolute top-[-30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary-green/10 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Section */}
          <div>
            <RouterLink to="/" className="flex items-center space-x-3 mb-6 group">
              <img 
                src="/images/logo.jpg" 
                alt="Privir Healthcare Logo" 
                className="h-12 w-12 object-contain rounded-xl bg-white p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="font-poppins font-extrabold text-lg text-white leading-none tracking-wide">PRIVIR</span>
                <span className="font-poppins font-bold text-[8px] text-primary-green tracking-[0.25em] leading-none mt-1 uppercase">HEALTHCARE</span>
              </div>
            </RouterLink>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm font-normal">
              Dedicated to transforming community wellbeing, providing critical medical aid, and empowering families through healthcare advocacy and support.
            </p>
            <div className="flex space-x-3">
              {[
                { 
                  name: 'Facebook', 
                  href: '#', 
                  svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg> 
                },
                { 
                  name: 'Twitter', 
                  href: '#', 
                  svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> 
                },
                { 
                  name: 'Instagram', 
                  href: '#', 
                  svg: <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> 
                },
                { 
                  name: 'Linkedin', 
                  href: '#', 
                  svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
                }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-primary-green hover:to-primary-lightGreen border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-extrabold text-sm uppercase tracking-wider text-primary-lightGreen mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><RouterLink to="/about" className="text-gray-300 hover:text-primary-green text-sm font-semibold transition duration-300">About Us</RouterLink></li>
              <li><RouterLink to="/campaigns" className="text-gray-300 hover:text-primary-green text-sm font-semibold transition duration-300">Our Campaigns</RouterLink></li>
              <li><RouterLink to="/volunteer" className="text-gray-300 hover:text-primary-green text-sm font-semibold transition duration-300">Become a Volunteer</RouterLink></li>
              <li><RouterLink to="/donate" className="text-gray-300 hover:text-primary-green text-sm font-semibold transition duration-300">Donate Now</RouterLink></li>
              <li><RouterLink to="/contact" className="text-gray-300 hover:text-primary-green text-sm font-semibold transition duration-300">Contact Us</RouterLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-extrabold text-sm uppercase tracking-wider text-primary-lightGreen mb-6">Contact Details</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">Unit No. 423, Tower-A, Spez I-Tech Park, Sohna Rd, Sector-49, Gurugram 122018</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-green flex-shrink-0" />
                <span className="text-gray-300 text-sm font-semibold">+91 9416362914</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-green flex-shrink-0" />
                <span className="text-gray-300 text-sm font-semibold">healthcareprivir@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-poppins font-extrabold text-sm uppercase tracking-wider text-primary-lightGreen mb-6">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">Subscribe to receive regular updates from our field campaigns and medical camps.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary-green text-white placeholder-gray-400 font-medium"
                required
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-primary-green to-primary-lightGreen hover:scale-102 transition duration-300 text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center cursor-pointer shadow-[0_4px_15px_rgba(46,139,87,0.25)]"
              >
                Subscribe Now
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>

        </div>

        {/* Footer Sub-bottom */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 text-xs font-semibold">
            &copy; {new Date().getFullYear()} PRIVIR HEALTHCARE PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6">
            <RouterLink to="/privacy" className="text-gray-400 hover:text-white text-xs font-semibold transition duration-300">Privacy Policy</RouterLink>
            <RouterLink to="/terms" className="text-gray-400 hover:text-white text-xs font-semibold transition duration-300">Terms of Service</RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
