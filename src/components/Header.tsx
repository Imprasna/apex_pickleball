import { useState, useEffect } from "react";
import { Instagram, Youtube } from "lucide-react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-20 transition-all duration-300 ${showHeader ? "bg-emerald-900 text-white shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="text-xl md:text-2xl font-bold">Apex Pickleball</div>
      <div className="flex items-center gap-4 md:gap-6">
        <a href="https://www.instagram.com/_apexpickleball?igsh=N3V5NTB1cWEyYnc%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
          <Instagram size={20} />
        </a>
        <a href="https://youtube.com" className="hover:text-emerald-300">
          <Youtube size={20} className="md:w-6 md:h-6" />
        </a>
        <button onClick={handleScrollToContact} className="border border-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base hover:bg-white hover:text-emerald-900 transition-colors">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Header;
