import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const NewsSwiperCard = () => {
  const partners = [
    { name: "SAMSUNG", logo: "samsung.png" },
    { name: "amazon", logo: "amazon.png" },
    { name: "zoom", logo: "zoom.png" },
    { name: "akfaa", logo: "akfaa.png" },
    { name: "SAMSUNG", logo: "samsung.png" },
    { name: "amazon", logo: "amazon.png" },
    { name: "zoom", logo: "zoom.png" },
    { name: "akfa", logo: "akfaa.png" },
  ];

  return (
    <section className="py-8 bg-[#F8F9FD]">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[20px] py-10 shadow-sm border border-gray-100 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="mySwiper transition-timing-linear"
          >
            {partners.map((partner, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center px-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 md:h-9 w-auto h-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default NewsSwiperCard;
