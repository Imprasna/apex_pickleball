// @ts-ignore
import { Coach, coaches } from "../constants/coaches";

const CoachesComponent = () => {
  return (
    <div className="py-20 px-6 bg-emerald-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">Crafting Pickleball Experiences Together</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {coaches?.map((coach: Coach, index: number) => (
          <div key={index} className="text-center">
            <img 
              src={coach?.image} 
              alt={coach?.name} 
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

export default CoachesComponent;