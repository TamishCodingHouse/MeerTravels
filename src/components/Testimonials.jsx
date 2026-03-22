import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Our Swiss Alps adventure was absolutely incredible! Every detail was perfectly planned, and the accommodations exceeded our expectations. WanderLux turned our dream vacation into reality.',
    tour: 'Swiss Alps Tour',
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'The cultural immersion in Tokyo was beyond amazing. Our guide was knowledgeable and friendly, and we experienced authentic Japanese culture that most tourists never see. Highly recommended!',
    tour: 'Cultural Discovery',
  },
  {
    name: 'Emma Williams',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'The Maldives package was pure luxury from start to finish. Crystal clear waters, pristine beaches, and world-class service. This was the honeymoon of our dreams. Thank you, WanderLux!',
    tour: 'Island Paradise',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full inline-block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Travelers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Say About Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real travelers who experienced the magic of our journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                <Quote className="w-8 h-8 text-white" />
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-teal-50"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-xs text-teal-600 font-semibold mt-1">{testimonial.tour}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
