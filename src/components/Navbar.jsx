import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import brandLogo from "../assets/images/BrandCLogo.png"
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src={brandLogo}
                alt="Brand Logo"
                className="h-28 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#home" className="hover:text-teal-300 transition-colors font-medium">Home</Link>
            <Link to="#about" className="hover:text-teal-300 transition-colors font-medium">About</Link>
            <Link to="#destinations" className="hover:text-teal-300 transition-colors font-medium">Destinations</Link>
            <Link to="#packages" className="hover:text-teal-300 transition-colors font-medium">Packages</Link>
            <Link to="#gallery" className=" hover:text-teal-300 transition-colors font-medium">Gallery</Link>
            <Link to="#contact" className="hover:text-teal-300 transition-colors font-medium">Contact</Link>
          </div>

          <div className="hidden md:block">
            <button className="bg-primary-gradient px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105">
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link to="#home" className="block text-gray-800 hover:text-teal-600 font-medium">Home</Link>
            <Link to="#about" className="block text-gray-800 hover:text-teal-600 font-medium">About</Link>
            <Link to="#destinations" className="block text-gray-800 hover:text-teal-600 font-medium">Destinations</Link>
            <Link to="#packages" className="block text-gray-800 hover:text-teal-600 font-medium">Packages</Link>
            <Link to="#gallery" className="block text-gray-800 hover:text-teal-600 font-medium">Gallery</Link>
            <Link to="#contact" className="block text-gray-800 hover:text-teal-600 font-medium">Contact</Link>
            <button className="w-full bg-primary-gradient text-white px-6 py-3 rounded-full font-semibold mt-4">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
