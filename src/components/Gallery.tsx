const Gallery = () => {
  const items = [
    {
      title: "Interactive Class Schedules",
      description: "We developed an interactive class schedule feature that allows users to easily view and book their preferred pickleball classes. This tool integrates seamlessly with payment gateways, offering a hassle-free booking experience while providing real-time updates and notifications to participants.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1470"
    },
    {
      title: "Dynamic Photo Gallery",
      description: "A vibrant and dynamic photo gallery was created to showcase the facility's amenities and events. This feature allows users to peruse through images with captions, fostering an engaging visual experience that highlights the energy and excitement of the pickleball community.",
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&q=80&w=1374"
    }
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16">Innovative Pickleball Facility Designs</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {items.map((item, index) => (
          <div key={index} className="space-y-4">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;