const Services = () => {
  const services = [
    {
      title: "Custom Facility Design",
      description: "Craft bespoke website experiences tailored to your facility's unique needs and branding.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1470"
    },
    {
      title: "Mobile Optimization Services",
      description: "Ensure your pickleball website is fully responsive for mobile, enhancing user experience on all devices.",
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&q=80&w=1374"
    },
    {
      title: "SEO and Marketing Integration",
      description: "Boost your facility's online visibility with seamless integration of SEO and digital marketing strategies.",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=1471"
    }
  ];

  return (
    <div className="py-20 px-6 bg-emerald-50">
      <h2 className="text-4xl font-bold text-center mb-16">Tailored Designs for Pickleball Spaces</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;