import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// @ts-ignore
import { testimonials } from "../constants/testimonials";

const Testimonials = () => {
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
          {testimonials.map((testimonial: any, index: number) => (
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
