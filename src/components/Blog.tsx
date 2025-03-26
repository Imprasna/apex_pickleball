import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { posts } from "../constants/posts"; // Auto-imported blog data

const Blog = () => {
  return (
    <div className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16">Latest Pickleball Insights</h2>
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link 
                to={`/blog/${post.id}`} 
                className="group block space-y-4 mb-9 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-emerald-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
