import React from 'react';
import { Users, Clock, BookOpen, Send } from 'lucide-react';

const Volunteer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="bg-primary-softGray min-h-screen pb-20 animate-fade-in-up">
      {/* Premium Header */}
      <div className="relative text-primary-darkBlue py-28 px-4 overflow-hidden border-b border-gray-200">
        {/* Background Image with Tint */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30 transform scale-105"
          style={{ backgroundImage: "url('/images/volunteer-bg.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-green/10 text-primary-green text-xs font-extrabold rounded-full uppercase tracking-wider mb-3">
            Get Involved
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-black mb-4 tracking-tight text-black">Become a Volunteer</h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl font-medium leading-relaxed">
            Your time and skills can make a world of difference. Join our dedicated team of changemakers today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Info */}
        <div className="space-y-10">
          <div>
            <span className="text-xs text-primary-green font-extrabold tracking-widest uppercase mb-2 inline-block px-3 py-1 bg-primary-green/10 rounded-full">
              Why Join?
            </span>
            <h2 className="text-3xl md:text-4xl font-poppins font-black text-primary-darkBlue mt-2 mb-6">Why Volunteer With Us?</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
              Volunteering is more than just giving your time; it's about connecting with your community, learning new skills, and making a tangible impact on people's lives. At Privir Healthcare, we value every individual's contribution.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-500 group">
              <div className="bg-primary-green/10 p-3.5 rounded-2xl h-fit mr-6 group-hover:bg-primary-green transition-colors duration-300">
                <Users className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-primary-darkBlue mb-2">Community Connection</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Meet like-minded individuals and build lasting relationships with people who share your passion for social change.</p>
              </div>
            </div>

            <div className="flex bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-500 group">
              <div className="bg-primary-green/10 p-3.5 rounded-2xl h-fit mr-6 group-hover:bg-primary-green transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-primary-darkBlue mb-2">Skill Development</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Enhance your professional and interpersonal skills through hands-on experience in project management, communication, and leadership.</p>
              </div>
            </div>

            <div className="flex bg-white p-8 rounded-3xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-500 group">
              <div className="bg-primary-green/10 p-3.5 rounded-2xl h-fit mr-6 group-hover:bg-primary-green transition-colors duration-300">
                <Clock className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-primary-darkBlue mb-2">Flexible Commitment</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Whether you can spare an hour a week or a few days a month, we have opportunities that fit your schedule.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100/50 border-t-4 border-t-primary-green">
          <h2 className="text-2xl font-poppins font-black text-primary-darkBlue mb-8">Registration Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">First Name *</label>
                <input type="text" required className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold" />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">Last Name *</label>
                <input type="text" required className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">Email Address *</label>
                <input type="email" required className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold" />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">Phone Number *</label>
                <input type="tel" required className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">Area of Interest *</label>
              <select required className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold text-gray-700">
                <option value="">Select an area</option>
                <option value="education">Child Education</option>
                <option value="health">Healthcare Drives</option>
                <option value="environment">Environmental Conservation</option>
                <option value="food">Food Distribution</option>
                <option value="events">Event Management</option>
                <option value="digital">Digital & Social Media</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">Availability *</label>
              <select required className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold text-gray-700">
                <option value="">Select availability</option>
                <option value="weekends">Weekends</option>
                <option value="weekdays">Weekdays</option>
                <option value="flexible">Flexible</option>
                <option value="fulltime">Full-time (Internship)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-2">Why do you want to volunteer? (Optional)</label>
              <textarea rows="4" className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary-green to-primary-lightGreen text-white font-bold text-lg py-4 rounded-2xl transition duration-300 shadow-[0_4px_20px_rgba(46,139,87,0.3)] hover:scale-102 hover:shadow-[0_4px_30px_rgba(46,139,87,0.5)] flex items-center justify-center cursor-pointer mt-4"
            >
              Submit Application
              <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Volunteer;
