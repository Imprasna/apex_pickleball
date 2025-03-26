const PhotoGallery = () => {
  const photos = [
    "https://images.pexels.com/photos/29820786/pexels-photo-29820786/free-photo-of-empty-pickleball-court-with-net-in-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/27390435/pexels-photo-27390435/free-photo-of-rede.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17299534/pexels-photo-17299534/free-photo-of-ball-and-paddle-on-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/20823430/pexels-photo-20823430/free-photo-of-woman-with-a-table-tennis-racket-in-her-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/29439365/pexels-photo-29439365/free-photo-of-man-playing-pickleball-indoors-in-ha-n-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/29439364/pexels-photo-29439364/free-photo-of-pickleball-player-action-shot-in-hanoi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-black mb-16">Apex Pickleball Gallery</h2>
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