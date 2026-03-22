import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Destinations from './components/Destinations';
// import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
// import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
// import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Honeymoon from './components/Honeymoon';
import IndiaTour from './components/IndiaTour';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BookingForm />
      <About />
      <Destinations />
      <Honeymoon/>
      <IndiaTour/>
      {/* <Packages /> */}
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <Gallery />
      {/* <FAQ /> */}
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
