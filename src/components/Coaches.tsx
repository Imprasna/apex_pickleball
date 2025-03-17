const Coaches = () => {
  const coaches = [
    {
      name: "Jake S.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1374",
      role: "Head Coach"
    },
    {
      name: "Katie D.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1374",
      role: "Performance Coach"
    },
    {
      name: "John G.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1374",
      role: "Junior Coach"
    }
  ];

  return (
    <div className="py-20 px-6 bg-emerald-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">Crafting Pickleball Experiences Together</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {coaches.map((coach, index) => (
          <div key={index} className="text-center">
            <img 
              src={coach.image} 
              alt={coach.name} 
              className="w-64 h-64 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">{coach.name}</h3>
            <p className="text-emerald-300">{coach.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaches;