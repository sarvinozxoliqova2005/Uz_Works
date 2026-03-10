import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FeedbackSwiper = () => {
  const reviews = [
    {
      id: 1,
      text: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      author: "Julia Lee",
      date: "15-06-2023",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
      author: "Julia Lee",
      date: "15-06-2023",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
      author: "Julia Lee",
      date: "15-06-2023",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      text: "Another feedback example to show how the slider works with more items. It maintains the same style and smooth transition.",
      author: "Julia Lee",
      date: "15-06-2023",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Sarlavha */}
        <h2 className="text-center text-[36px] md:text-[48px] font-bold mb-12">
          <span className="text-[#2F07E5]">Feedback</span> from our Customers
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={2500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".feedback-pagination",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full bg-white border border-[#2F07E540] cursor-pointer rounded-[20px] p-8 flex flex-col justify-between transition-all duration-500  hover:shadow-xl hover:border-[#2F07E5]">
                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 ">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A0283] text-[16px]">
                      {item.author}
                    </h4>
                    <p className="text-gray-400 text-[12px]">
                      Due date: {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="feedback-pagination mt-10 flex justify-center gap-2"></div>
        </Swiper>
      </div>

      <style>{`
        .swiper-wrapper {
          transition-timing-function: ease-in-out !important;
        }
        
        .feedback-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #D1D5DB;
          opacity: 1;
          transition: all 0.4s ease;
          border-radius: 5px;
        }
        .feedback-pagination .swiper-pagination-bullet-active {
          width: 30px;
          background: #2F07E5;
        }
      `}</style>
    </section>
  );
};

export default FeedbackSwiper;
