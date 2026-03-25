import { Award, Globe, Users, TrendingUp } from 'lucide-react';
import AboutUs from "../assets/images/About/closeup-shot-female-hand-with-smartphone-taking-picture-sunset-sea-south-korea.jpg"
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState("vision");
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={AboutUs}
                loading='lazy'
                alt="Travelers exploring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 md:-right-8 bg-white rounded-2xl shadow-xl p-3  md:p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className=" h-10 w-10 md:w-16 md:h-16  bg-primary-gradient  rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#F6AA09]">5+</p>
                  <p className="text-gray-600 font-semibold">Years <span className='text-[#F6AA09]'>Experience</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#F6AA09] font-semibold text-sm uppercase tracking-wider bg-slate-800  px-4 py-2 rounded-full">
                About Meer Travels
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Creating Extraordinary
              <span className="block text-transparent bg-clip-text bg-primary-gradient">
                Travel Experiences
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              "Meer Travels – India's Fastest-Growing Global Travel Brand
              A Unit of Meer Global Pvt. Ltd.

              Meer Travels is not just a travel agency — it's a movement that brings people, cultures, and dreams together. Headquartered in Delhi, India, we are proud to be one of the most trusted and visionary travel companies in the country, offering both domestic and international tours with excellence, affordability, and a personal touch.

              With over two decades of experience in the travel and transportation industry, our journey started in India  and today, we’re setting our sights on every corner of the globe. Our mission is simple: To deliver powerful travel experiences that create lasting memories in India and across the world.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 
      ${activeTab === "vision"
                    ? "bg-primary-gradient text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                Our Vision
              </button>

              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 
      ${activeTab === "mission"
                    ? "bg-primary-gradient text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                Our Mission
              </button>
            </div>

            <div className="mt-6 text-lg text-gray-600 leading-relaxed transition-all duration-300">

              {activeTab === "vision" && (
                <p>
                  <strong>Our Vision: <span className='text-[#F6AA09]'>Travel Beyond Borders</span></strong><br /><br />
                  We aim to become a worldwide travel leader with physical offices in every major country, giving travelers local access, 24x7 assistance, and the confidence that comes with a truly global travel network. Through honesty, personalization, and innovation, Meer Travels will be a name people trust  anywhere in the world.

                </p>
              )}

              {activeTab === "mission" && (
                <p>
                  <strong>Our Mission: <span className='text-[#F6AA09]'>Inspire the World to Explore Differently</span></strong><br /><br />
                  At Meer Travels, we believe travel should be more than sightseeing. We design meaningful, offbeat, and culturally rich travel packages that let you discover the soul of a destination. Whether you're a solo explorer, couple, family, or corporate group — our mission is to ensure your travel is unforgettable, seamless, and full of life.

                </p>
              )}

            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-800">80+</p>
                <p className="text-gray-600 text-sm">Destinations</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-800">10K+</p>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-800">98%</p>
                <p className="text-gray-600 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
