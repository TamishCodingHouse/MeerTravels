import { ArrowRight, Plane } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-600 to-teal-700"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
          <Plane className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Start Your
          <span className="block">Next Adventure?</span>
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied travelers who have discovered the world with WanderLux.
          Your dream destination awaits!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
            <span>Start Planning Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center space-x-2">
            <span>Contact Us</span>
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">50K+</p>
            <p className="text-white/80">Happy Travelers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">80+</p>
            <p className="text-white/80">Destinations</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">98%</p>
            <p className="text-white/80">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
