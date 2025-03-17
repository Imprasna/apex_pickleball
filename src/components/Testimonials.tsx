import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amelia Thompson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1374",
      text: "Grit Pickleball Academy transformed our online presence with their expert design skills. The website is not only visually striking but also user-friendly, making it easy for players to sign up and stay informed. Their team exceeded our expectations at every step!"
    },
    {
      name: "Ravi Nair",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1374",
      text: "Working with Grit Pickleball Academy was an absolute pleasure. They crafted a stunning, intuitive website that perfectly captures our brand. Our membership registrations have significantly increased, and players love the seamless experience. Highly recommend their services for any pickleball facility!"
    },
    {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1374",
      text: "The attention to detail and professional approach of Grit Pickleball Academy is outstanding. They understood our vision perfectly and delivered a website that exceeds all expectations. The booking system is seamless and our members love it!"
    }
  ];

  return (
    <div className="py-20 px-6 bg-emerald-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">Testimonials from Satisfied Clients</h2>
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-emerald-800/50 p-8 rounded-lg h-full">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mb-6 object-cover"
                />
                <p className="text-lg mb-6 line-clamp-4">{testimonial.text}</p>
                <p className="font-bold">- {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;