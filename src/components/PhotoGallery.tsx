const PhotoGallery = () => {
  const photos = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1470",
    "https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&q=80&w=1374",
    "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=1471",
    "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80&w=1469",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=1469",
    "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=1470"
  ];

  return (
    <div className="py-20 px-6 bg-emerald-900">
      <h2 className="text-4xl font-bold text-center text-white mb-16">Explore Our Facility Designs</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <img 
              src={photo} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;