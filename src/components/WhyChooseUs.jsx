import { Shield, Heart, Award, Car, ShieldCheck, Headphones, Building2, IndianRupee, Earth } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Local Expertise with Global Standards',
    description:
      "We started in Delhi, India — and now we're building a travel presence internationally. We blend local insight with global quality to offer you the best of both worlds",
  },
  {
    icon: Shield,
    title: 'Personal Touch at Every Step',
    description:
      'From airport pickup to final farewell, our team is available to guide and support you with personalized assistance.',
  },
  {
    icon: Heart,
    title: 'Curated Experiences, Not Just Tours',
    description:
      "Whether you're looking for luxury, heritage, adventure, honeymoon, or spiritual journeys — we tailor it all your way.",
  },
  {
    icon: Car,
    title: 'Trained Guides & Verified Drivers',
    description:
      'Every journey is made smooth with our friendly experts, handpicked local guides, and certified professional drivers.',
  },
  {
    icon: Award,
    title: 'Clean, Sanitized & Comfortable Travel',
    description:
      'We use only sanitized vehicles, from luxury sedans to tempo travelers and buses — keeping your safety a top priority.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent, Hassle-Free & Honest Pricing',
    description:
      'No hidden charges, no confusion. We believe in total clarity and building lifelong relationships with our travelers.',
  },
  {
    icon: Headphones,
    title: '24x7 Support Worldwide',
    description:
      'With our global expansion goal, we’re working to ensure you’re never alone — whether you’re in India, Kenya, Dubai, or New York.',
  },
  {
    icon: Building2,
    title: 'Responsible Travel Company',
    description:
      'We care for nature and local communities. We promote digital travel, reduce paper waste, and ensure our vehicles comply with eco-friendly standards.',
  },

  {
    icon: Earth,
    title: 'Expanding Globally — One Country at a Time',
    description:
      'Our dream is to establish Meer Travels offices in every major country, giving travelers the confidence of local support, authentic experiences, and the backing of a reputed Indian company. From India to Africa, Europe to the USA — our doors will be open for you everywhere.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-teal-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#F6AA09] font-semibold text-sm uppercase tracking-wider bg-slate-800 px-4 py-2 rounded-full inline-block mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experience the
            <span className="block text-transparent bg-clip-text bg-primary-gradient">
              Meer Travels Difference
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We go beyond ordinary travel to create extraordinary experiences that stay with you forever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-slate-200 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
