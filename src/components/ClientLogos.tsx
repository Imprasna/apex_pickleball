const ClientLogos = () => {
  const logos = [
    { name: "Logo 1", logo: "LOQO" },
    { name: "Logo 2", logo: "Logoipsum" },
    { name: "Logo 3", logo: "logoipsum" },
    { name: "Logo 4", logo: "IPSUM" },
    { name: "Logo 5", logo: "Logoipsum" }
  ];

  return (
    <div className="py-16 px-6 bg-emerald-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="bg-emerald-800/50 p-6 rounded-lg">
              <p className="text-white text-xl font-bold text-center">{logo.logo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;