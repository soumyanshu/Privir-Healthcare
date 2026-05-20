import React from 'react';
import { Users, IndianRupee, Globe, Calendar, LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-inter">
      {/* Sidebar */}
      <aside className="w-64 bg-primary-darkBlue text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-poppins font-bold text-white tracking-tight">HopeAdmin</h2>
        </div>
        <nav className="flex-1 py-6 space-y-2 px-4">
          <a href="#" className="flex items-center px-4 py-3 bg-primary-green rounded-lg text-white font-medium">
            <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 rounded-lg transition">
            <IndianRupee className="w-5 h-5 mr-3" /> Donations
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 rounded-lg transition">
            <Globe className="w-5 h-5 mr-3" /> Campaigns
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 rounded-lg transition">
            <Users className="w-5 h-5 mr-3" /> Volunteers
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 rounded-lg transition">
            <Calendar className="w-5 h-5 mr-3" /> Events
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 rounded-lg transition">
            <FileText className="w-5 h-5 mr-3" /> Reports
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 rounded-lg transition">
            <Settings className="w-5 h-5 mr-3" /> Settings
          </a>
          <a href="/" className="flex items-center px-4 py-3 text-red-400 hover:bg-white/10 rounded-lg transition mt-2">
            <LogOut className="w-5 h-5 mr-3" /> Back to Site
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Topbar */}
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-2xl font-poppins font-bold text-gray-800">Overview</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center text-white font-bold">
              AD
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-xl mr-4">
                <IndianRupee className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Donations</p>
                <h3 className="text-2xl font-bold text-gray-800">₹12,45,000</h3>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
              <div className="p-4 bg-green-50 text-primary-green rounded-xl mr-4">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Active Volunteers</p>
                <h3 className="text-2xl font-bold text-gray-800">342</h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
              <div className="p-4 bg-purple-50 text-purple-600 rounded-xl mr-4">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Active Campaigns</p>
                <h3 className="text-2xl font-bold text-gray-800">12</h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
              <div className="p-4 bg-orange-50 text-orange-600 rounded-xl mr-4">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Upcoming Events</p>
                <h3 className="text-2xl font-bold text-gray-800">5</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Donations Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-poppins font-bold text-lg text-gray-800">Recent Donations</h3>
                <button className="text-primary-green text-sm font-medium hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-sm">
                      <th className="p-4 font-medium">Donor Name</th>
                      <th className="p-4 font-medium">Campaign</th>
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm">
                    <tr className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="p-4 font-medium">Rahul Verma</td>
                      <td className="p-4">Child Education</td>
                      <td className="p-4 text-gray-500">Oct 24, 2023</td>
                      <td className="p-4 text-right font-bold text-primary-green">₹5,000</td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="p-4 font-medium">Priya Singh</td>
                      <td className="p-4">Food Distribution</td>
                      <td className="p-4 text-gray-500">Oct 23, 2023</td>
                      <td className="p-4 text-right font-bold text-primary-green">₹2,500</td>
                    </tr>
                    <tr className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="p-4 font-medium">Anonymous</td>
                      <td className="p-4">General Fund</td>
                      <td className="p-4 text-gray-500">Oct 22, 2023</td>
                      <td className="p-4 text-right font-bold text-primary-green">₹10,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-medium">Amit Patel</td>
                      <td className="p-4">Tree Plantation</td>
                      <td className="p-4 text-gray-500">Oct 22, 2023</td>
                      <td className="p-4 text-right font-bold text-primary-green">₹1,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-poppins font-bold text-lg text-gray-800 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full py-3 px-4 bg-primary-green/10 text-primary-green font-medium rounded-xl hover:bg-primary-green hover:text-white transition flex items-center justify-center">
                  <Globe className="w-5 h-5 mr-2" /> Add New Campaign
                </button>
                <button className="w-full py-3 px-4 bg-blue-50 text-blue-600 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" /> Create Event
                </button>
                <button className="w-full py-3 px-4 bg-purple-50 text-purple-600 font-medium rounded-xl hover:bg-purple-600 hover:text-white transition flex items-center justify-center">
                  <FileText className="w-5 h-5 mr-2" /> Download Report
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
