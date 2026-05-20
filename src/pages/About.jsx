import React from 'react';
import { Target, Eye, Award, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-primary-softGray min-h-screen pb-20 animate-fade-in-up">
      {/* Premium Header */}
      <div className="relative text-primary-darkBlue py-28 px-4 overflow-hidden border-b border-gray-200">
        {/* Background Image with Tint */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-100 transform scale-105"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-green/10 text-primary-green text-xs font-extrabold rounded-full uppercase tracking-wider mb-3">
            Our Identity
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-black mb-4 tracking-tight text-black">About Us</h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl font-medium leading-relaxed">
            Discover our journey, our vision for a healthier world, and the passionate team behind Privir Healthcare.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        
        {/* NGO Story */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100/50 flex flex-col lg:flex-row gap-12 items-center hover:shadow-md transition-shadow duration-500">
          <div className="lg:w-1/2">
            <span className="text-xs text-primary-green font-extrabold tracking-widest uppercase mb-2 inline-block px-3 py-1 bg-primary-green/10 rounded-full">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-poppins font-black text-primary-darkBlue mt-2 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base font-normal">
              Founded with a simple belief: every individual deserves access to high-quality healthcare and a dignified life, Privir Healthcare started as a dedicated team of doctors, social workers, and community builders. What began as a local health initiative has blossomed into a registered medical social support network impacting thousands of families.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
              Over the years, we have expanded our reach to encompass education, healthcare, and environmental conservation. Our journey is fueled by the unwavering support of our donors, the dedication of our volunteers, and the resilient spirit of the communities we serve.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative p-2 border border-gray-100 rounded-3xl bg-white shadow-md">
              <img src="/images/about-story.jpg" alt="Our story" className="rounded-2xl shadow-sm w-full object-cover h-80 md:h-[450px]" />
              <div className="absolute -bottom-6 -left-6 bg-primary-green text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs border border-white/20">
                <span className="block text-3xl font-black font-poppins">100%</span>
                <span className="text-xs text-gray-150">Transparency & grassroots integrity in every donation.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100/50 border-t-4 border-t-primary-green hover:shadow-md transition-shadow duration-500 group">
            <div className="w-14 h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-7 h-7 text-primary-green" />
            </div>
            <h2 className="text-2xl font-poppins font-black text-primary-darkBlue mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-sm font-normal">
              To create an equitable and sustainable world where every individual, regardless of their background, has access to basic necessities, quality education, and opportunities to thrive in harmony with nature. We aim to break the generational cycles of poverty and ill health.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100/50 border-t-4 border-t-primary-darkBlue hover:shadow-md transition-shadow duration-500 group">
            <div className="w-14 h-14 bg-primary-darkBlue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-primary-darkBlue" />
            </div>
            <h2 className="text-2xl font-poppins font-black text-primary-darkBlue mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-sm font-normal">
              To empower marginalized communities through sustainable grassroots programs in education, healthcare, and environmental conservation, fostering self-reliance, gender equity, and community-driven development model.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section>
          <div className="text-center mb-16">
            <span className="text-xs text-primary-green font-extrabold tracking-widest uppercase mb-2 inline-block px-3 py-1 bg-primary-green/10 rounded-full">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-poppins font-black text-primary-darkBlue mt-2">Meet Our Team</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-green to-primary-lightGreen mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              { name: 'Dr. Aman Kumar', role: 'Founder & Director', img: '/images/Dr-Aman-Kmar.png' },
              { name: 'Ms. Sharda', role: 'Head of Operations', img: '/images/Mis-Sharda.png' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group">
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-darkBlue/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                    <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center">
                      View Profile <ArrowRight className="w-4 h-4 ml-1.5" />
                    </span>
                  </div>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-poppins font-black text-primary-darkBlue">{member.name}</h3>
                  <p className="text-primary-green text-sm font-extrabold uppercase tracking-widest mt-1.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-primary-darkBlue text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Abstract light blobs for depth */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-lightGreen/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-poppins font-black mb-6 flex items-center">
                <Award className="w-9 h-9 text-primary-green mr-4 animate-float" />
                Awards & Recognition
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base font-normal">
                Our tireless efforts have been recognized by several prestigious bodies. In 2022, we were awarded the <strong className="text-white">"Best Community Impact NGO"</strong> by the National Social Welfare Board.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base font-normal">
                More importantly, our true achievement lies in the smiles of the thousands of children attending school and families sleeping with a full stomach.
              </p>
            </div>
            <div className="lg:w-1/3 w-full text-center flex justify-center">
              <div className="relative p-1 border-2 border-primary-green/30 rounded-full">
                <div className="inline-flex flex-col items-center justify-center w-36 h-36 border-2 border-primary-green rounded-full bg-primary-green/10 backdrop-blur-sm">
                  <span className="block text-4xl font-black font-poppins text-primary-green mb-1">10+</span>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-gray-300">National Awards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
