import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const SwiperCard = () => {
  const partners = [
    { id: 1, name: "iddea", logo: "iddea.png" },
    { id: 2, name: "yandex", logo: "yandex.png" },
    { id: 3, name: "akfa", logo: "akfa.png" },
    { id: 4, name: "Korzinka", logo: "korzinka.png" },
    { id: 5, name: "uzum", logo: "uzum.png" },
    { id: 6, name: "artel", logo: "artel.png" },
    { id: 7, name: "idu", logo: "idu.png" },
    { id: 8, name: "cu", logo: "cu.png" },
  ];

  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4">

        <div className=" bg-gray-100 rounded-lg p-6">
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
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="flex items-center  justify-center h-15 grayscale grayscale-0 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwiperCard;
