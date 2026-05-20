import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, ArrowRight, Quote, Shield, BookOpen, Scale, Activity, CheckCircle, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary-softGray overflow-hidden">
      
      {/* 1. Hero Section - Premium & Dynamic */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden py-12 md:py-0">
        {/* Background Image & Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
          {/* Layered gradients for a high-end dramatic appearance */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-darkBlue/95 via-primary-darkBlue/80 to-transparent z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-darkBlue/90 via-transparent to-transparent opacity-80 z-0"></div>
        </div>

        {/* Ambient light glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary-green/20 blur-[120px] animate-pulse-slow z-0"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-lightGreen/15 blur-[150px] animate-float z-0"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start py-8 md:py-12">
          <div className="w-full lg:w-4/5 xl:w-3/4 text-left animate-fade-in-up">
            <div className="inline-flex items-center px-5 py-2.5 bg-primary-green/20 backdrop-blur-md border border-primary-green/45 rounded-full text-white text-sm sm:text-base font-extrabold uppercase tracking-widest mb-8">🌱 Dedicated to Genuine Social Work</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-black text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
              Empowering Communities,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-lightGreen">
                Restoring Dignity
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl font-light leading-relaxed drop-shadow-lg">
              We are a grassroots social work organization fighting for equality, social justice, and the upliftment of marginalized families. Your support makes real, documented change possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-14 w-full sm:w-auto">
              <Link 
                to="/donate" 
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 font-black text-white text-base sm:text-lg md:text-xl transition-all duration-300 bg-gradient-to-r from-primary-green to-primary-lightGreen rounded-full overflow-hidden hover:scale-105 hover:shadow-[0_0_40px_rgba(46,139,87,0.5)] cursor-pointer"
              >
                <span className="relative flex items-center">
                  Support Our Work <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/volunteer" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 font-black text-white text-base sm:text-lg md:text-xl transition-all duration-300 border-2 border-white/50 rounded-full hover:bg-white hover:text-primary-darkBlue hover:border-white backdrop-blur-sm hover:scale-105 hover:shadow-[0_4px_25px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                Become a Volunteer
              </Link>
            </div>

            {/* Quick Hero Floating Statistics */}
            <div className="inline-grid grid-cols-3 gap-2 sm:gap-6 md:gap-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-4 sm:p-6 md:p-9 w-full sm:w-auto shadow-xl">
              <div>
                <span className="block text-2xl sm:text-4xl md:text-5xl font-black font-poppins text-white leading-none">15k+</span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-extrabold uppercase tracking-widest mt-2 sm:mt-3.5 block leading-snug">Lives Touched</span>
              </div>
              <div className="border-l border-white/15 pl-3 sm:pl-6 md:pl-10">
                <span className="block text-2xl sm:text-4xl md:text-5xl font-black font-poppins text-primary-lightGreen leading-none">90%</span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-extrabold uppercase tracking-widest mt-2 sm:mt-3.5 block leading-snug">Direct Allocation</span>
              </div>
              <div className="border-l border-white/15 pl-3 sm:pl-6 md:pl-10">
                <span className="block text-2xl sm:text-4xl md:text-5xl font-black font-poppins text-white leading-none">50+</span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-extrabold uppercase tracking-widest mt-2 sm:mt-3.5 block leading-snug">Active Camps</span>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* 2. Our Focus Areas */}
      <section className="py-20 md:py-28 bg-primary-softGray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs text-primary-green font-extrabold tracking-widest uppercase mb-2 inline-block px-3 py-1 bg-primary-green/10 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-poppins font-black text-primary-darkBlue mt-2">
              Core Areas of Social Work
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-green to-primary-lightGreen mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Women Empowerment', desc: 'Providing vocational training, micro-finance support, and safe havens for survivors of domestic violence.' },
              { icon: BookOpen, title: 'Child Protection & Ed.', desc: 'Rescuing children from labor, providing trauma counseling, and ensuring access to quality education.' },
              { icon: Scale, title: 'Free Legal Aid', desc: 'Fighting for the rights of the underprivileged through pro-bono legal counseling and representation.' },
              { icon: Activity, title: 'Community Health', desc: 'Running rural health camps, mental health awareness programs, and maternal care initiatives.' }
            ].map((area, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_50px_rgba(11,31,58,0.06)] transition-all duration-500 border border-gray-100 hover:border-primary-green/20 group hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-green transition-all duration-500 transform group-hover:rotate-6">
                    <area.icon className="w-7 h-7 text-primary-green group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-xl font-poppins font-bold text-primary-darkBlue mb-3 group-hover:text-primary-green transition-colors duration-300">{area.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm font-normal">{area.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-xs font-bold text-primary-green opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 3. Featured Campaigns */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-softGray rounded-l-full opacity-50 blur-[150px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-xs text-primary-green font-extrabold tracking-widest uppercase mb-2 inline-block px-3 py-1 bg-primary-green/10 rounded-full">
                Take Action
              </span>
              <h3 className="text-3xl md:text-5xl font-poppins font-black text-primary-darkBlue mt-2 mb-4">
                Urgent Social Campaigns
              </h3>
              <p className="text-gray-500 text-base md:text-lg">
                Your immediate contribution can directly intervene in a crisis and provide life-saving support to those currently struggling.
              </p>
            </div>
            <Link to="/campaigns" className="mt-6 md:mt-0 inline-flex items-center text-primary-darkBlue font-bold hover:text-primary-green transition duration-300 text-lg group">
              View All Campaigns <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Campaign 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100/80 hover:shadow-2xl hover:border-gray-200/50 transition-all duration-500 group flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img src="/images/women-skills.png" alt="Women Skill Development" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <span className="absolute top-4 left-4 z-20 bg-primary-green text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Education</span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-poppins font-bold text-primary-darkBlue mb-3 group-hover:text-primary-green transition-colors duration-300">Women Skill Development</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">Vocational training programs for women to help them gain marketable skills and achieve complete financial independence.</p>

                <Link to="/donate" className="block w-full text-center bg-primary-softGray hover:bg-primary-darkBlue text-primary-darkBlue hover:text-white py-4 rounded-2xl font-bold transition-all duration-300 cursor-pointer">
                  Sponsor Training
                </Link>
              </div>
            </div>

            {/* Campaign 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100/80 hover:shadow-2xl hover:border-gray-200/50 transition-all duration-500 group flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img src="/images/street-school.jpg" alt="Child Education" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <span className="absolute top-4 left-4 z-20 bg-blue-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Education</span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-poppins font-bold text-primary-darkBlue mb-3 group-hover:text-primary-green transition-colors duration-300">Street to School Project</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">Identifying street children, providing foundational learning, and integrating them into formal schooling systems.</p>

                <Link to="/donate" className="block w-full text-center bg-primary-softGray hover:bg-primary-darkBlue text-primary-darkBlue hover:text-white py-4 rounded-2xl font-bold transition-all duration-300 cursor-pointer">
                  Sponsor a Child
                </Link>
              </div>
            </div>

            {/* Campaign 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100/80 hover:shadow-2xl hover:border-gray-200/50 transition-all duration-500 group flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img src="/images/clean-water.png" alt="Clean Water Project" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <span className="absolute top-4 left-4 z-20 bg-teal-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Environment</span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-poppins font-bold text-primary-darkBlue mb-3 group-hover:text-primary-green transition-colors duration-300">Clean Water Project</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">Installing water purifiers in schools and community centers in drought-prone regions to provide safe drinking water.</p>

                <Link to="/donate" className="block w-full text-center bg-primary-softGray hover:bg-primary-darkBlue text-primary-darkBlue hover:text-white py-4 rounded-2xl font-bold transition-all duration-300 cursor-pointer">
                  Fund Clean Water
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 4. Volunteer & Community Section - Split Layout */}
      <section className="py-20 md:py-28 bg-primary-darkBlue relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-primary-green/20 blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full bg-primary-lightGreen/15 blur-[120px] animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-primary-darkBlue/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src="/images/volunteer-bg.jpeg" alt="Social Workers" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-primary-darkBlue/95 to-transparent z-20">
                  <p className="text-white text-lg md:text-xl font-poppins font-medium italic leading-relaxed">
                    "Social work is not just charity; it is a professional commitment to building a just and equitable society."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <span className="text-xs text-primary-green font-extrabold tracking-widest uppercase mb-2 inline-block px-3 py-1 bg-primary-green/10 rounded-full">
                Join The Movement
              </span>
              <h3 className="text-3xl md:text-4xl font-poppins font-black text-primary-darkBlue mt-2 mb-6">
                Become a Catalyst for Change
              </h3>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                Our social workers and volunteers are the backbone of our operations. Whether you are a trained professional (lawyer, doctor, counselor) or an empathetic individual wanting to help, we need you on the ground.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-primary-softGray p-3.5 rounded-xl mr-5 shrink-0 border border-gray-100">
                    <Users className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-poppins text-primary-darkBlue mb-1">Field Volunteering</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Engage directly with communities, conduct surveys, and assist in our rescue and relief operations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-softGray p-3.5 rounded-xl mr-5 shrink-0 border border-gray-100">
                    <BookOpen className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-poppins text-primary-darkBlue mb-1">Pro-Bono Professional Services</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Offer your specialized skills in law, medicine, psychology, or education to those who cannot afford it.</p>
                  </div>
                </div>
              </div>

              <Link to="/volunteer" className="inline-block bg-primary-green hover:bg-primary-lightGreen text-white px-10 py-4.5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_4px_20px_rgba(46,139,87,0.3)] hover:shadow-[0_4px_35px_rgba(46,139,87,0.5)] transform hover:-translate-y-1 cursor-pointer">
                Register to Volunteer
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* 5. Success Stories - Premium Cards */}
      <section className="py-20 md:py-28 bg-primary-softGray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs text-primary-green font-extrabold tracking-widest uppercase mb-2 inline-block px-3 py-1 bg-primary-green/10 rounded-full">
              Impact Stories
            </span>
            <h3 className="text-3xl md:text-5xl font-poppins font-black text-primary-darkBlue mt-2">
              Voices of Resilience
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-green to-primary-lightGreen mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-10 rounded-3xl relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-green/20 group">
              <Quote className="absolute top-10 right-10 text-primary-softGray/50 w-24 h-24 -z-0 opacity-40 group-hover:text-primary-green/10 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-5 border-2 border-primary-green p-0.5 shadow-sm">
                    <img src="/images/testimonial-kavita.jpg" alt="Beneficiary Kavita" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xl text-primary-darkBlue">Kavita M.</h4>
                    <p className="text-xs font-extrabold text-primary-green uppercase tracking-wider">Domestic Abuse Survivor</p>
                  </div>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
                  "When I had nowhere to go, the legal aid team not only helped me secure a restraining order but also provided me with a safe shelter and counseling. Today, I run my own small tailoring business thanks to their skill program. They gave me my life back."
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-10 rounded-3xl relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-darkBlue/20 group">
              <Quote className="absolute top-10 right-10 text-primary-softGray/50 w-24 h-24 -z-0 opacity-40 group-hover:text-primary-darkBlue/10 transition-colors duration-300" />
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-5 border-2 border-primary-darkBlue p-0.5 shadow-sm">
                    <img src="/images/testimonial-rajan.jpg" alt="Volunteer Rajan" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xl text-primary-darkBlue">Dr. Rajan S.</h4>
                    <p className="text-xs font-extrabold text-primary-darkBlue uppercase tracking-wider">Pro-Bono Doctor</p>
                  </div>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
                  "Working alongside the field workers in remote tribal villages has been eye-opening. The organization ensures that our medical supplies reach the most disconnected communities. True social work happens on the ground, and I am proud to be a part of it."
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;
