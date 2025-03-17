import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p>© Copyright is reserved. Designed by Grid Vortex</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://instagram.com" className="hover:text-emerald-300">
              <Instagram size={24} />
            </a>
            <a href="https://youtube.com" className="hover:text-emerald-300">
              <Youtube size={24} />
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <span className="font-bold">Durable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;