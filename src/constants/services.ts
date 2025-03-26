import PersonalizedTrainingImage from "../assets/Personalized-Pickleball-Training.jpeg";
import CompetitiveCoachingImage from "../assets/Competitive-Pickleball-Coaching.jpg";
import SeniorsPickleballImage from "../assets/Pickleball-for-Seniors-Stay-Active.jpeg";
import CorporateEventsImage from "../assets/Corporate-Pickleball-Events-Team-Building.jpeg";
import StrategyImage from "../assets/Pickleball-Strategy.jpg";
import EquipmentConsultationImage from "../assets/Pickleball-Equipment-Consultation.jpg";

export interface Service {
    title: string;
    description: string;
    image: string;
}

export const services: Service[] = [
    {
        title: "Personalized Pickleball Training",
        description: "Tailored one-on-one and group coaching to enhance your skills, from beginners to advanced players.",
        image: PersonalizedTrainingImage
    },
    {
        title: "Competitive Pickleball Coaching",
        description: "Take your game to the next level with elite coaching designed for tournament preparation.",
        image: CompetitiveCoachingImage
    },
    {
        title: "Pickleball for Seniors: Stay Active & Fit",
        description: "Low-impact, high-fun training sessions perfect for staying healthy and social.",
        image: SeniorsPickleballImage
    },
    {
        title: "Corporate Pickleball Events & Team Building",
        description: "Strengthen teamwork and wellness with customized pickleball experiences for businesses.",
        image: CorporateEventsImage
    },
    {
        title: "Pickleball Strategy & Mental Game Training",
        description: "Learn advanced strategies, shot selection, and mindset techniques to dominate the court.",
        image: StrategyImage
    },
    {
        title: "Pickleball Equipment Consultation",
        description: "Get expert guidance on paddles, shoes, and gear tailored to your playing style.",
        image: EquipmentConsultationImage
    }
];
