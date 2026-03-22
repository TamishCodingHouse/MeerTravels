import { ArrowRight, Play } from 'lucide-react';
import heroVideo from "../assets/videos/6036324_Mountain_Rural_3840x2160 (1).mp4"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-teal-900/60 to-blue-800/70 z-10"></div> */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          loading='lazy'
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-36">
        <div className="space-y-8 mb-32">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Discover Your Next
            <span className="block bg-primary-gradient bg-clip-text text-transparent">
              Dream Destination
            </span>
          </h1>

          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Embark on unforgettable journeys to the world's most breathtaking locations.
            Create memories that last a lifetime with our curated luxury travel experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group bg-primary-gradient  px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#b9ad47] transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <span>Book Your Adventure</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
