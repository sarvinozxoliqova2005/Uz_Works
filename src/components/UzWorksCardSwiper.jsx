import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import { FaTelegramPlane, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa';
import { RiBaseStationLine } from 'react-icons/ri';
import 'swiper/css';

const SocialLinks = () => {
  const baseCards = [
    { id: 1, title: 'Telegram Kanal', desc: "Bizni Telegram kanalimizga obuna bo'ling!", bg: 'bg-gradient-to-r from-[#24A1DE] to-[#34B3E4]', icon: <FaTelegramPlane /> },
    { id: 2, title: 'Instagram Profil', desc: 'Instagram orqali bizni kuzatib boring!', bg: 'bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]', icon: <FaInstagram /> },
    { id: 3, title: 'iOS ilova', desc: 'App store orqali ilovamizni yuklab oling!', bg: 'bg-gradient-to-br from-[#1e40af] via-[#3b82f6] to-[#60a5fa]', icon: <FaApple /> },
    { id: 4, title: 'Android ilova', desc: 'Play market orqali ilovamizni yuklab oling!', bg: 'bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#3b82f6]', icon: <FaGooglePlay /> },
  ];
  const cards = [...baseCards, ...baseCards];

  return (
    <div className="w-full py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]} 
          spaceBetween={15}
          slidesPerView={2}
          loop={true}
          
          speed={3000} 
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
          
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className={`${card.bg} h-[150px] rounded-[20px] p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-lg`}>
                <div className="flex justify-between items-center z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 flex items-center justify-center border-2 border-white rounded-full">
                      <RiBaseStationLine className="text-[10px]" />
                    </div>
                    <span className="font-bold text-[18px]">UZ WORKS</span>
                  </div>
                  <div className="bg-white text-[#2E2B3D] px-8 py-2 rounded-full text-[14px] font-bold shadow-sm">
                    {card.title}
                  </div>
                </div>
                <div className="flex items-center gap-4 z-10">
                  <div className="min-w-[44px] h-[44px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl border border-white/30">
                    {card.icon}
                  </div>
                  <p className="text-[12px] font-medium leading-tight opacity-95">
                    {card.desc}
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* Slayderning surilishini yanada mayin qilish */
        .swiper-wrapper {
          transition-timing-function: ease-in-out !important;
        }
      `}</style>
    </div>
  );
};

export default SocialLinks;