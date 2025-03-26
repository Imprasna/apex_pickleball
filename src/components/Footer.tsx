import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Copyright is reserved. Designed by{" "}
              <a href="https://gridvortex.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-700 hover:bg-white hover:bg-opacity-1 hover:font-bold hover:rounded-md px-1">
                Grid Vortex
              </a>
            </p>
          </div>


          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/_apexpickleball?igsh=N3V5NTB1cWEyYnc%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
              <Instagram size={24} />
            </a>
            <a href="https://youtube.com" className="hover:text-emerald-300">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;