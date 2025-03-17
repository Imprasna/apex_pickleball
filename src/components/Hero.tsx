import { Instagram, Youtube } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-emerald-900 text-white">
      <nav className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-10">
        <div className="text-xl md:text-2xl font-bold">Grit Pickleball Academy</div>
        <div className="flex items-center gap-4 md:gap-6">
          <a href="https://instagram.com" className="hover:text-emerald-300">
            <Instagram size={20} className="md:w-6 md:h-6" />
          </a>
          <a href="https://youtube.com" className="hover:text-emerald-300">
            <Youtube size={20} className="md:w-6 md:h-6" />
          </a>
          <button className="border border-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base hover:bg-white hover:text-emerald-900 transition-colors">
            Contact
          </button>
        </div>
      </nav>
      
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-6">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Expert Pickleball<br className="hidden sm:block" />
            Facility Planning in<br className="hidden sm:block" />
            Puducherry
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Puducherry's Premier Pickleball Branding and Facility Design Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;