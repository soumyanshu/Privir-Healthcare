import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <div className="bg-primary-softGray min-h-screen pb-20 animate-fade-in-up">
      {/* Premium Header */}
      <div className="relative text-primary-darkBlue py-28 px-4 overflow-hidden border-b border-gray-200">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30 transform scale-105"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-green/10 text-primary-green text-xs font-extrabold rounded-full uppercase tracking-wider mb-3">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4 tracking-tight text-black">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl font-medium leading-relaxed">
            Have questions or want to partner with us? We'd love to hear from you. Reach out to our team today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl font-poppins font-bold text-primary-darkBlue mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                Connect with us directly via phone, email, or visit our corporate office at Sector-49 Gurugram.
              </p>
            </div>

            <div className="space-y-6">
              {/* Card 1: Address */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-all duration-300">
                <div className="bg-primary-green/10 p-4 rounded-xl mr-5 group-hover:bg-primary-green transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-poppins text-primary-darkBlue mb-1">Our Registered Office</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Unit No. 423, Tower-A, Spez I-Tech Park,<br />
                    Sohna Rd, Sector-49, Gurugram 122018
                  </p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-all duration-300">
                <div className="bg-primary-green/10 p-4 rounded-xl mr-5 group-hover:bg-primary-green transition-colors duration-300">
                  <Phone className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-poppins text-primary-darkBlue mb-1">Call/WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-1 leading-relaxed">For general inquiries and volunteer coordination:</p>
                  <a href="tel:+919416362914" className="text-primary-green font-bold hover:underline text-base">+91 9416362914</a>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-all duration-300">
                <div className="bg-primary-green/10 p-4 rounded-xl mr-5 group-hover:bg-primary-green transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-poppins text-primary-darkBlue mb-1">Email Addresses</h3>
                  <p className="text-gray-600 text-sm mb-1 leading-relaxed">Send us your feedback, proposals or partnership ideas:</p>
                  <a href="mailto:healthcareprivir@gmail.com" className="text-primary-green font-bold hover:underline text-base block">healthcareprivir@gmail.com</a>
                </div>
              </div>

              {/* Card 4: Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-all duration-300">
                <div className="bg-primary-green/10 p-4 rounded-xl mr-5 group-hover:bg-primary-green transition-colors duration-300">
                  <Clock className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-poppins text-primary-darkBlue mb-1">Operating Hours</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Monday – Saturday: 9:30 AM – 6:30 PM<br />
                    Sunday: Closed (Field activities run as scheduled)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-green to-primary-lightGreen"></div>
              
              {submitted ? (
                <div className="py-12 text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-primary-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-darkBlue mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-6">
                    Thank you for reaching out, {formData.name}. Our community representatives will review your inquiry and respond shortly.
                  </p>
                  <div className="w-12 h-1 bg-gray-200 mx-auto rounded-full"></div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-primary-darkBlue mb-2">Send a Message</h3>
                    <p className="text-gray-500 text-sm">Please fill out this form and we'll get back to you as soon as possible.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 bg-gray-50/50 transition-all duration-300" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 bg-gray-50/50 transition-all duration-300" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 bg-gray-50/50 transition-all duration-300" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                        placeholder="Inquiry / Feedback / Partnership"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 bg-gray-50/50 transition-all duration-300" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      rows="5" 
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 bg-gray-50/50 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-primary-green hover:bg-primary-lightGreen text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
