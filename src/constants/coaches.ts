import Rohit from "../assets/rohit.jpg";
import Prasanna from "../assets/prasanna.jpg";

export interface Coach {
  name: string;
  role: string;
  image: string;
}

export const coaches: Coach[] = [
    {
      name: "Rohit Ahuja",
      image: Rohit,
      role: "Head Coach"
    },
    {
      name: "Prasanna S",
      image: Prasanna,
      role: "Junior Coach"
    },
    // {
    //   name: "John G.",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1374",
    //   role: "Junior Coach"
    // }
  ];