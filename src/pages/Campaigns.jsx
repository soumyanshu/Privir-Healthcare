import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';

const Campaigns = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Education', 'Health', 'Environment', 'Food'];

  const campaigns = [
    {
      id: 1,
      title: 'Child Education Program',
      category: 'Education',
      description: 'Providing quality education and school supplies to underprivileged children in rural areas.',
      image: '/images/campaign-child-education.jpg',
      raised: 150000,
      goal: 300000,
    },
    {
      id: 2,
      title: 'Food For All',
      category: 'Food',
      description: 'Daily food distribution drives to ensure no one goes to sleep hungry in our city.',
      image: '/images/campaign-food-all.jpg',
      raised: 80000,
      goal: 100000,
    },
    {
      id: 3,
      title: 'Green Earth Initiative',
      category: 'Environment',
      description: 'A massive tree plantation drive aiming to plant 10,000 saplings to combat climate change.',
      image: '/images/campaign-green-earth.jpg',
      raised: 25000,
      goal: 50000,
    },
    {
      id: 4,
      title: 'Rural Healthcare Camp',
      category: 'Health',
      description: 'Free medical checkups and medicine distribution in remote villages without hospital access.',
      image: '/images/campaign-rural-health.jpg',
      raised: 120000,
      goal: 200000,
    },
    {
      id: 5,
      title: 'Clean Water Project',
      category: 'Environment',
      description: 'Installing water purifiers in schools and community centers in drought-prone regions.',
      image: '/images/clean-water.png',
      raised: 90000,
      goal: 150000,
    },
    {
      id: 6,
      title: 'Women Skill Development',
      category: 'Education',
      description: 'Vocational training programs for women to help them become financially independent.',
      image: '/images/women-skills.png',
      raised: 45000,
      goal: 100000,
    }
  ];

  // Filter and Search logic combined
  const filteredCampaigns = campaigns.filter(c => {
    const matchesCategory = filter === 'All' || c.category === filter;
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-primary-softGray min-h-screen pb-20 animate-fade-in-up">
      {/* Header */}
      <div className="relative text-primary-darkBlue py-28 px-4 overflow-hidden border-b border-gray-200">
        {/* Background Image with Tint */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30 transform scale-105"
          style={{ backgroundImage: "url('/images/campaign-child-education.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-green/10 text-primary-green text-xs font-extrabold rounded-full uppercase tracking-wider mb-3">
            Active Work
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-black mb-4 tracking-tight text-black">Our Campaigns</h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl font-medium leading-relaxed">Explore our ongoing projects and contribute to the causes closest to your heart.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6 bg-white p-4 rounded-3xl shadow-sm border border-gray-100/50">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition duration-300 ${
                  filter === cat 
                    ? 'bg-primary-green text-white shadow-md' 
                    : 'bg-primary-softGray text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-80">
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green text-sm font-medium transition-all duration-300"
            />
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCampaigns.map((campaign) => {
            return (
              <div key={campaign.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100/80 hover:shadow-2xl hover:border-gray-200/50 transition-all duration-500 group flex flex-col hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-primary-darkBlue text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider z-15 border border-gray-100">
                    {campaign.category}
                  </div>
                  <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-poppins font-bold text-primary-darkBlue mb-3 group-hover:text-primary-green transition-colors duration-300">{campaign.title}</h3>
                  <p className="text-gray-550 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">{campaign.description}</p>
                  

                  <Link to="/donate" className="block w-full text-center bg-primary-softGray hover:bg-primary-darkBlue text-primary-darkBlue hover:text-white py-4 rounded-2xl font-bold transition-all duration-300 cursor-pointer">
                    Donate to this Cause
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-150">
            <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-lg font-poppins font-bold text-gray-500">No campaigns match your search.</p>
            <p className="text-sm text-gray-400 mt-1">Try selecting a different category or adjusting your search term.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Campaigns;
