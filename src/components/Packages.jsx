import { Clock, Users, Star, Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'Island Paradise',
    location: 'Maldives',
    image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '7 Days / 6 Nights',
    people: 'Up to 4 People',
    rating: 4.9,
    reviews: 342,
    price: 2499,
    features: ['5-Star Resort', 'All Meals Included', 'Water Sports', 'Spa Access', 'Airport Transfer'],
    badge: 'Best Seller',
  },
  {
    name: 'Alpine Adventure',
    location: 'Swiss Alps',
    image: 'https://images.pexels.com/photos/1488478/pexels-photo-1488478.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 Days / 9 Nights',
    people: 'Up to 6 People',
    rating: 5.0,
    reviews: 289,
    price: 3299,
    features: ['Luxury Chalet', 'Ski Pass Included', 'Mountain Guide', 'Gourmet Dining', 'Helicopter Tour'],
    badge: 'Premium',
  },
  {
    name: 'Cultural Discovery',
    location: 'Tokyo & Kyoto',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12 Days / 11 Nights',
    people: 'Up to 8 People',
    rating: 4.8,
    reviews: 456,
    price: 2799,
    features: ['Boutique Hotels', 'Cultural Tours', 'Traditional Meals', 'Tea Ceremony', 'Train Pass'],
    badge: 'Popular',
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full inline-block mb-4">
            Tour Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Luxury
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Travel Packages
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked experiences designed for discerning travelers seeking the extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {pkg.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-gray-200 text-sm">{pkg.location}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-teal-600" />
                    <span>{pkg.people}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(pkg.rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {pkg.rating} ({pkg.reviews} reviews)
                  </span>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-3xl font-bold text-gray-800">
                      ${pkg.price}
                      <span className="text-lg text-gray-500 font-normal">/person</span>
                    </p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Book Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
