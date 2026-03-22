import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import brandLogo from "../assets/images/BrandCLogo.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState("false")
  const [termCondition, setShowTermCondition] = useState("false")
  return (
    <>

      <footer id="contact" className="bg-gradient-to-r from-[#e5e59a77] to-[#58482610] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3">
                <Link to="/">
                  <img
                    src={brandLogo}
                    alt="Brand Logo"
                    className="h-28 w-auto object-contain"
                  />
                </Link>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Creating extraordinary travel experiences that inspire and transform. Your journey to the world's most beautiful destinations begins here.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-gradient transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-gradient transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-gradient transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-gradient transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-slate-800">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="#about" className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="#destinations" className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors">Destinations</Link>
                </li>
                <li>
                  <Link to="#packages" className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors">Tour Packages</Link>
                </li>
                <li>
                  <Link to="#gallery" className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors">Gallery</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="#contact" className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-slate-800">Contact Info</h3>
              <ul className="space-y-4">
                {/* <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#F6AA09] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors">123 Travel Street, Adventure City, AC 12345</span>
                </li> */}
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#F6AA09] flex-shrink-0" />
                  <span className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors">+91-8810407249</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#F6AA09] flex-shrink-0" />
                  <span className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors">www.meertravels.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-slate-800">Newsletter</h3>
              <p className="text-gray-700 font-medium hover:text-[#F6AA09] transition-colors mb-4">Subscribe to get special offers and travel inspiration</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-primary-gradient px-6 py-3 rounded-r-lg hover:shadow-lg hover:shadow-[#F6AA09] transition-all duration-300">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-800 text-sm">
                © 2024 <span className='text-[#F6AA09]'>MeerTravels</span>. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-800 hover:text-gray-900 text-sm transition-colors"
                >
                  Privacy Policy
                </button>
                <button onClick={() => setShowTermCondition(true)} className="text-gray-800 hover:text-gray-900 text-sm transition-colors">Terms of Service</button>
                {/* <button className="text-gray-800 hover:text-gray-900 text-sm transition-colors">Cookie Policy</button> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showPrivacy && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-white max-w-5xl w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center z-20">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Privacy & Refund Policy
                </h2>
                <p className="text-sm text-gray-500">
                  Meer Travels (A Unit of Meer Global Pvt. Ltd.)
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowPrivacy(false)}
                className="bg-primary-gradient text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                ✕
              </button>

            </div>

            {/* Content */}
            <div className="px-8 py-8 space-y-8 text-gray-700 leading-relaxed">

              {/* Section 1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  1. Information Collection and Usage
                </h3>

                <p>
                  We collect personal information solely for the purpose of
                  processing bookings, responding to inquiries, and improving
                  our services. We do not collect information without your
                  knowledge.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2. Cookies Policy
                </h3>

                <p>
                  Our website may use cookies to personalize content and
                  enhance user experience. You may disable cookies through
                  your browser settings.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3. Data Disclosure
                </h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To prevent fraud or illegal activity</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4. Data Security
                </h3>

                <p>
                  We apply industry-standard encryption and security measures
                  to protect your data from unauthorized access.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t pt-6">

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Refund & Cancellation Policy
                </h3>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border">

                  <table className="w-full text-left border-collapse">

                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4 font-semibold">
                          Cancellation Timeline
                        </th>
                        <th className="p-4 font-semibold">
                          Cancellation Fee
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr className="border-t">
                        <td className="p-4">
                          60–30 days before arrival
                        </td>
                        <td className="p-4">
                          25% of total booking
                        </td>
                      </tr>

                      <tr className="border-t bg-gray-50">
                        <td className="p-4">
                          29–15 days before arrival
                        </td>
                        <td className="p-4">
                          50% of total booking
                        </td>
                      </tr>

                      <tr className="border-t">
                        <td className="p-4">
                          14–7 days before arrival
                        </td>
                        <td className="p-4">
                          75% of total booking
                        </td>
                      </tr>

                      <tr className="border-t bg-gray-50">
                        <td className="p-4">
                          6 days or less / No Show
                        </td>
                        <td className="p-4 font-semibold text-red-600">
                          100% cancellation
                        </td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

              {/* Contact Section */}
              <div className="border-t pt-6">

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Contact Information
                </h3>

                <p>
                  For any privacy or refund-related inquiries,
                  please contact us:
                </p>

                <div className="mt-3 space-y-1 text-gray-800">
                  <p>
                    📞 +91-8810407249
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {termCondition && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowTermCondition(false)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl p-8 relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setShowTermCondition(false)}
              className="absolute top-4 right-4 bg-primary-gradient text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            <div class="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6">

              <h1 class="text-3xl font-bold text-gray-900">
                Terms and Conditions
              </h1>

              <p class="font-semibold text-gray-800">
                Meer Travels (a unit of Meer Global Pvt. Ltd.)
              </p>
              <div>
                <h2 class="text-xl font-semibold text-gray-900 mb-2">
                  1. General Correspondence
                </h2>

                <p>
                  All communications and correspondences related to tour packages,
                  travel bookings, or related services must be directed to
                  Meer Travels, a unit of Meer Global Pvt. Ltd.
                  The Client agrees to abide by all terms and conditions set forth
                  herein when engaging in services offered by Meer Travels.
                </p>
              </div>

              <div>
                <h2 class="text-xl font-semibold text-gray-900 mb-2">
                  2. Booking and Contract Formation
                </h2>

                <p>
                  A binding contract shall be deemed to exist between the Client
                  and Meer Travels only upon receipt of an advance payment for the
                  confirmed booking. The remaining balance must be paid prior to
                  the commencement of services.
                </p>

                <p>
                  Meer Travels reserves the right to decline any booking request
                  without providing a specific reason.
                </p>
              </div>

              <div>
                <h2 class="text-xl font-semibold text-gray-900 mb-2">
                  3. Mode of Payment
                </h2>

                <p class="mb-2 font-medium">
                  All payments must be made in favor of:
                  <br />
                  Progressive Meer Global Pvt. Ltd.
                </p>

                <p class="font-medium mb-2">
                  Accepted Payment Methods:
                </p>

                <ul class="list-disc pl-6 space-y-1">
                  <li>Credit Card (Visa / MasterCard)</li>
                  <li>Debit Card (Visa / MasterCard / Maestro)</li>
                  <li>UPI (Google Pay, PayTM, BHIM)</li>
                  <li>RTGS / NEFT / IMPS (Bank Transfer)</li>
                  <li>Cash or Cheque (subject to clearance)</li>
                </ul>

                <p class="mt-4 font-medium">
                  Important Notes:
                </p>

                <ul class="list-disc pl-6 space-y-2">
                  <li>
                    Payments via credit/debit card will attract a processing fee
                    of <strong>3.5%</strong>.
                  </li>
                  <li>
                    All payments must be made free of withholding tax or deductions.
                  </li>
                  <li>
                    Any bank or remittance charges are to be borne by the Client.
                  </li>
                  <li>
                    Meer Travels will never request OTP, CVV, or sensitive banking details.
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="text-xl font-semibold text-gray-900 mb-2">
                  4. Liability & Limitations
                </h2>

                <ul class="list-disc pl-6 space-y-2">
                  <li>
                    Additional transport usage beyond agreed hours will incur extra charges.
                  </li>
                  <li>
                    Any increase in government taxes or entry fees will be charged extra.
                  </li>
                  <li>
                    Meer Travels shall not be liable for delays caused by:
                    <ul class="list-disc pl-6 mt-2 space-y-1">
                      <li>Natural calamities</li>
                      <li>Weather conditions</li>
                      <li>Political disturbances</li>
                      <li>Traffic or mechanical failures</li>
                      <li>Airline cancellations</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="text-xl font-semibold text-gray-900 mb-2">
                  5. Limitation of Responsibility
                </h2>

                <ul class="list-disc pl-6 space-y-2">
                  <li>Personal injury or property damage</li>
                  <li>Theft, fire, or accidents</li>
                  <li>Delays by third-party vendors</li>
                  <li>Medical emergencies during travel</li>
                </ul>
              </div>

              <div>
                <h2 class="text-xl font-semibold text-gray-900 mb-2">
                  6. Insurance
                </h2>

                <p>
                  Meer Travels does not provide insurance coverage.
                  Clients are responsible for obtaining travel or medical insurance
                  before commencing the journey.
                </p>
              </div>

              <div>
                <h2 class="text-xl font-semibold text-gray-900 mb-2">
                  7. Governing Law and Jurisdiction
                </h2>

                <p>
                  These terms and conditions shall be governed by the laws of India.
                  Any disputes shall be subject to the exclusive jurisdiction of
                  courts located in Delhi, India.
                </p>
              </div>

              <div class="border-t pt-6">
                <h2 class="text-xl font-semibold text-gray-900 mb-2">
                  Contact Information
                </h2>

                <p>
                  For any legal or compliance-related queries, contact us:
                </p>

                <p class="mt-2">
                  📞 +91-8810407249
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

    </>
  );
}
