import React from "react";
import SwiperCard from "../components/SwiperCard";
import UzWorksCardSwiper from "../components/UzWorksCardSwiper";
import CategoriesData from "../components/CategoriesData";
import FeedbackSwiper from "../components/FeedbackSwiper";
import { FiMinusCircle } from "react-icons/fi";
import FAQDesign from "../components/FaqdDesign";
import TopJobs from "../components/TopJobs";

const HomePages = () => {
  return (
    <>
      <section>
        <div className="container px-7 mx-auto pt-[30px] flex items-center justify-between">
          <div>
            <h1 className="text-[61px] font-bold leading-tight">
              Imkoniyatlarga mos keladigan
              <span className="text-[#2F07E5]"> "UzWorks" </span>
              platformasiga <br /> Xush kelibsiz
            </h1>{" "}
            <p className="text-[#2E2B3D] pt-5 ">
              Siz o'z tajribasini ko'tarmoqchi bo'lgan tajribali mutaxassismisiz
              . Bizning platformamiz sizni yuqori darajadagi <br /> kompaniyalar
              va qiziqarli ish o'rinlari bilan bog'laydi. Bizning qulay
              interfeysimiz va moslashtirilgan qidiruv <br /> filtrlarimiz bilan
              orzuingizdagi ishni topish hech qachon qiyin bo'lmagan. <br />
              Bugun bizga qo'shiling va muvaffaqiyatli karyera yo'lingizda
              keyingi qadamni tashlang.
            </p>
            <div className="flex items-center gap-3 mt-10">
              <button className="cursor-pointer w-[156px] h-[43px] rounded-[4px] bg-[#130160] text-white">
                Ish topish
              </button>
              <button className="border-[1px] rounded-[4px] border-[#2F07E5] text-[#2F07E5] cursor-pointer w-[156px] h-[43px]">
                Ishchi topish
              </button>
            </div>
          </div>
          <div className="max-w-[600px] w-full h-[552px]">
            <img src="hero.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div>
          <SwiperCard />
        </div>
      </section>

      <section>
        <div>
          <UzWorksCardSwiper />
        </div>
      </section>

      <section className=" py-15">
        <div className="container mx-auto px-4">
          <h1 className="text-[47px] text-[#2F07E5] text-center font-semibold">Top <span className="text-[#524B6B]">Jobs</span></h1>
         <TopJobs/>
        </div>
      </section>


      <section>
        <div className="container mx-auto px-4 pt-[30px]">
          <h1 className="text-[47px] text-[#2F07E5] text-center font-semibold">Top <span  className="text-[#524B6B]">Workers</span></h1>
          <div className="grid grid-cols-4 gap-5 mt-[20px]">
            <div className="max-w-[385px] w-full h-[193px]  bg-white rounded-[24px] py-6 px-6 shadow-lg shadow-[#415BF5CC] border-[2px] border-[#415BF5CC] transition-all hover:scale-105 cursor-pointer duration-800">
              <div className="flex items-center ">
                <div className="w-14 h-14  rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src="odamcha.png"
                    alt="Logo"
                    className="w-[40px] h-[50px] object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#130160]">
                    Sotuvchi kerak
                  </h1>
                  <p className="text-gray-500 text-sm font-medium">
                    {" "}
                    Baliqchi, Andijon
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h2 className=" font-extrabold text-[#2F07E5]  leading-none text-center">
                  <span className="text-lg font-bold text-[#FF9228]">/Oy</span>
                </h2>
              </div>

              <hr className="border-gray-100" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#EAF1FF] text-[#27146F] flex items-center justify-center cursor-pointer  w-[58px] h-[25px] rounded-full text-xs font-bold border border-blue-100">
                      Erkak
                    </span>
                    <span className="bg-[#EAF1FF] text-[#27146F] flex items-center  cursor-pointer justify-center w-[65px] h-[25px] rounded-full text-[12px] font-bold border border-orange-100">
                      Ish turi
                    </span>
                  </div>
                  <a
                    href="#"
                    className=" bg-[#1A0283] text-white text-center w-[79px] h-[26px] cursor-pointer rounded-[8px] font-bold text-[16px] shadow-lg shadow-blue-200 active:scale-95 transition-transform"
                  >
                    Ko'rish
                  </a>
                </div>
              </div>
            </div>

             <div className="max-w-[385px] w-full h-[193px]  bg-white rounded-[24px] py-6 px-6 shadow-lg shadow-[#415BF5CC] border-[2px] border-[#415BF5CC] transition-all hover:scale-105 cursor-pointer duration-800">
              <div className="flex items-center ">
                <div className="w-14 h-14  rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src="odamcha.png"
                    alt="Logo"
                    className="w-[40px] h-[50px] object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mt-5">
                    {" "}
                    Baliqchi, Andijon
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h2 className=" font-extrabold text-[#2F07E5]  leading-none text-center">
                  <span className="text-lg font-bold text-[#FF9228]">/Oy</span>
                </h2>
              </div>

              <hr className="border-gray-100" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#EAF1FF] text-[#27146F] flex items-center justify-center cursor-pointer  w-[58px] h-[25px] rounded-full text-xs font-bold border border-blue-100">
                      Erkak
                    </span>
                    <span className="bg-[#EAF1FF] text-[#27146F] flex items-center  cursor-pointer justify-center w-[65px] h-[25px] rounded-full text-[12px] font-bold border border-orange-100">
                      Ish turi
                    </span>
                  </div>
                  <a
                    href="#"
                    className=" bg-[#1A0283] text-white text-center w-[79px] h-[26px] cursor-pointer rounded-[8px] font-bold text-[16px] shadow-lg shadow-blue-200 active:scale-95 transition-transform"
                  >
                    Ko'rish
                  </a>
                </div>
              </div>
            </div>

             <div className="max-w-[385px] w-full h-[193px]  bg-white rounded-[24px] py-6 px-6 shadow-lg shadow-[#415BF5CC] border-[2px] border-[#415BF5CC] transition-all hover:scale-105 cursor-pointer duration-800">
              <div className="flex items-center ">
                <div className="w-14 h-14  rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src="odamcha.png"
                    alt="Logo"
                    className="w-[40px] h-[50px] object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mt-5">
                    {" "}
                    Baliqchi, Andijon
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h2 className=" font-extrabold text-[#2F07E5]  leading-none text-center">
                  <span className="text-lg font-bold text-[#FF9228]">/Oy</span>
                </h2>
              </div>

              <hr className="border-gray-100" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#EAF1FF] text-[#27146F] flex items-center justify-center cursor-pointer  w-[58px] h-[25px] rounded-full text-xs font-bold border border-blue-100">
                      Erkak
                    </span>
                    <span className="bg-[#EAF1FF] text-[#27146F] flex items-center  cursor-pointer justify-center w-[65px] h-[25px] rounded-full text-[12px] font-bold border border-orange-100">
                      Ish turi
                    </span>
                  </div>
                  <a
                    href="#"
                    className=" bg-[#1A0283] text-white text-center w-[79px] h-[26px] cursor-pointer rounded-[8px] font-bold text-[16px] shadow-lg shadow-blue-200 active:scale-95 transition-transform"
                  >
                    Ko'rish
                  </a>
                </div>
              </div>
            </div>

             <div className="max-w-[385px] w-full h-[193px]  bg-white rounded-[24px] py-6 px-6 shadow-lg shadow-[#415BF5CC] border-[2px] border-[#415BF5CC] transition-all hover:scale-105 cursor-pointer duration-800">
              <div className="flex items-center ">
                <div className="w-14 h-14  rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src="odamcha.png"
                    alt="Logo"
                    className="w-[40px] h-[50px] object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mt-5">
                    {" "}
                    Baliqchi, Andijon
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h2 className=" font-extrabold text-[#2F07E5]  leading-none text-center">
                  <span className="text-lg font-bold text-[#FF9228]">/Oy</span>
                </h2>
              </div>

              <hr className="border-gray-100" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#EAF1FF] text-[#27146F] flex items-center justify-center cursor-pointer  w-[58px] h-[25px] rounded-full text-xs font-bold border border-blue-100">
                      Erkak
                    </span>
                    <span className="bg-[#EAF1FF] text-[#27146F] flex items-center  cursor-pointer justify-center w-[65px] h-[25px] rounded-full text-[12px] font-bold border border-orange-100">
                      Ish turi
                    </span>
                  </div>
                  <a
                    href="#"
                    className=" bg-[#1A0283] text-white text-center w-[79px] h-[26px] cursor-pointer rounded-[8px] font-bold text-[16px] shadow-lg shadow-blue-200 active:scale-95 transition-transform"
                  >
                    Ko'rish
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <CategoriesData/>
      </section>

      <section>
        <FeedbackSwiper/>
      </section>

      <section>
        <FAQDesign/>
      </section>
     
    </>
  );
};

export default HomePages;
