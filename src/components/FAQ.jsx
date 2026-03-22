import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book a tour package?',
    answer: 'Booking with WanderLux is simple! Browse our packages, select your preferred dates, and click "Book Now". Our team will contact you within 24 hours to finalize details and process your booking.',
  },
  {
    question: 'What is included in the tour packages?',
    answer: 'Our packages typically include accommodation, meals as specified, guided tours, transportation during the tour, and entrance fees to attractions. Specific inclusions vary by package and are clearly listed on each tour page.',
  },
  {
    question: 'Can I customize my tour itinerary?',
    answer: 'Absolutely! We specialize in creating bespoke travel experiences. Contact our travel experts to discuss your preferences, and we\'ll craft a personalized itinerary that matches your interests and budget.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer flexible cancellation policies. Cancellations made 30+ days before departure receive a full refund minus a small processing fee. For cancellations within 30 days, terms vary by package. Travel insurance is recommended.',
  },
  {
    question: 'Do you provide travel insurance?',
    answer: 'Yes, we highly recommend comprehensive travel insurance. We partner with leading insurance providers to offer coverage for trip cancellation, medical emergencies, lost luggage, and more.',
  },
  {
    question: 'Are your tours suitable for families with children?',
    answer: 'Many of our tours are family-friendly! We offer packages designed for all ages with activities suitable for children. Contact us to discuss the best options for your family\'s needs.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full inline-block mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about planning your perfect journey
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-800 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
