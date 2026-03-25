import { MapPin, Calendar, Users, Search } from 'lucide-react';

export default function BookingForm() {
  return (
    <div className="relative z-10 -mt-16 max-w-6xl mx-auto px-4">
      <div className="bg-white/70 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Your Perfect <span className='text-[#F6AA09]'>Adventure</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AA09] focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AA09] focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6AA09] focus:border-transparent outline-none transition-all appearance-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>

          <div className="flex items-end">
            <button className="w-full bg-primary-gradient px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#b9ad47] transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
