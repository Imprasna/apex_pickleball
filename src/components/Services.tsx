import { services } from "../constants/services";

const Services = () => {
  return (
    <div className="py-20 px-6 bg-emerald-50">
      <h2 className="text-4xl font-bold text-center mb-16">Pickleball Coaching Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={service?.image} alt={service.title} className="w-full h-48 object-cover" />
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
