import Header from "./Header";

const Hero = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Navigation */}
      <Header />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-6 z-10">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Expert Pickleball<br className="hidden sm:block" />
            Coaching in Chennai<br className="hidden sm:block" />
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Chennai's Premier Pickleball Coaching done here. We provide the best coaching and training for all age groups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
