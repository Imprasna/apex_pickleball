import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import Coaches from './components/Coaches';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import PhotoGallery from './components/PhotoGallery';
import ContactForm from './components/ContactForm';
import BlogPost from './components/BlogPost';
import Layout from './components/Layout';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Header />
            <Hero />
            <Services />
            <Coaches />
            <Blog />
            {/* <ClientLogos /> */}
            <Testimonials />
            <PhotoGallery />
            <ContactForm />
          </Layout>} />

          <Route path="/blog/:id" element={<Layout>
            <BlogPost />
          </Layout>} />
        </Routes>
    </Router>
  );
}

export default App;