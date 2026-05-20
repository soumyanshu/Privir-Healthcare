import React, { useState } from 'react';
import { IndianRupee, Heart, ShieldCheck, CreditCard, Award } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);

  const predefinedAmounts = ['500', '1000', '2500', '5000'];

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = amount === 'custom' ? customAmount : amount;
    alert(`Processing ${isMonthly ? 'monthly' : 'one-time'} donation of ₹${finalAmount}`);
  };

  return (
    <div className="bg-primary-softGray min-h-screen py-16 px-4 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-green/10 text-primary-green text-xs font-extrabold rounded-full uppercase tracking-wider mb-3">
            Support Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-poppins font-black text-primary-darkBlue mb-4">Make a Contribution</h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-normal">
            Your generous contribution helps us sustain our grassroots programs, rescue children, support women, and plant trees. All donations are 80G tax-exempt.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100/50">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Left Column: Form */}
            <div className="md:col-span-3 p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                
                {/* Donation Type */}
                <div className="flex p-1.5 bg-primary-softGray rounded-2xl mb-8">
                  <button
                    type="button"
                    onClick={() => setIsMonthly(false)}
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${!isMonthly ? 'bg-white shadow-sm text-primary-darkBlue border border-gray-100' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    Give Once
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMonthly(true)}
                    className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${isMonthly ? 'bg-white shadow-sm text-primary-green border border-gray-100' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    Monthly <Heart className="inline w-3 h-3 text-primary-green ml-1 animate-pulse" />
                  </button>
                </div>

                {/* Amounts */}
                <h3 className="font-poppins font-extrabold text-primary-darkBlue text-sm uppercase tracking-wider mb-4">Select Donation Amount</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  {predefinedAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleAmountClick(val)}
                      className={`py-4 rounded-2xl font-black text-lg transition duration-300 border-2 ${
                        amount === val && customAmount === ''
                          ? 'border-primary-green bg-primary-green/5 text-primary-green' 
                          : 'border-gray-200/80 text-gray-600 hover:border-primary-green/45'
                      }`}
                    >
                      ₹{val}
                    </button>
                  ))}
                </div>

                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IndianRupee className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter Custom Amount"
                    className={`w-full pl-10 pr-5 py-4 rounded-2xl border-2 transition text-sm font-bold focus:outline-none ${
                      amount === 'custom' ? 'border-primary-green ring-1 ring-primary-green' : 'border-gray-200 focus:border-primary-green focus:ring-1 focus:ring-primary-green'
                    }`}
                  />
                </div>

                {/* Personal Info */}
                <h3 className="font-poppins font-extrabold text-primary-darkBlue text-sm uppercase tracking-wider mb-4">Donor Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="First Name" required className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold" />
                  <input type="text" placeholder="Last Name" required className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold" />
                </div>
                <input type="email" placeholder="Email Address" required className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 mb-4 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold" />
                <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 mb-8 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green bg-primary-softGray/50 text-sm font-semibold" />

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-green to-primary-lightGreen text-white font-bold text-lg py-4 rounded-2xl transition duration-300 shadow-[0_4px_20px_rgba(46,139,87,0.3)] hover:scale-102 hover:shadow-[0_4px_30px_rgba(46,139,87,0.5)] flex items-center justify-center cursor-pointer"
                >
                  <Heart className="w-5 h-5 mr-2 animate-pulse" />
                  Donate ₹{(amount === 'custom' ? customAmount || '0' : amount).toLocaleString()}
                </button>
              </form>
            </div>

            {/* Right Column: Info */}
            <div className="md:col-span-2 bg-primary-darkBlue text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Background ambient blobs */}
              <div className="absolute top-[-20%] right-[-10%] w-60 h-60 bg-primary-green/20 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10">
                <h3 className="font-poppins font-black text-2xl mb-8 text-primary-lightGreen">Impact & Security</h3>
                
                <ul className="space-y-8 mb-12">
                  <li className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-xl mr-4 shrink-0 border border-white/5">
                      <ShieldCheck className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">100% Encrypted</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">Transactions are processed through verified gateways with strict encryption protocols.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-xl mr-4 shrink-0 border border-white/5">
                      <Heart className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">Direct Field Action</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">90% of all public contributions are deployed directly into ground campaigns and rescue kits.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-xl mr-4 shrink-0 border border-white/5">
                      <Award className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">80G Tax Benefits</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">We will email you a digital donation certificate containing details for tax deductions.</p>
                    </div>
                  </li>
                </ul>

                <div className="pt-8 border-t border-white/10 text-center">
                  <p className="text-xs text-gray-400 font-extrabold uppercase tracking-widest mb-4">Accepted Payment Options</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-extrabold border border-white/5">UPI / QR</span>
                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-extrabold border border-white/5">NET BANKING</span>
                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-extrabold border border-white/5">DEBIT/CREDIT CARD</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
