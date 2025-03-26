import Hero from './components/Hero';
import Services from './components/Services';
import Coaches from './components/Coaches';
import Gallery from './components/Gallery';
// import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import PhotoGallery from './components/PhotoGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Coaches />
      <Gallery />
      {/* <ClientLogos /> */}
      <Testimonials />
      <PhotoGallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;