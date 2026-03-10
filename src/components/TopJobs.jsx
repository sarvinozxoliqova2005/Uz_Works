import axios from "axios";
import { useEffect, useState } from "react";

const TopJobs = () => {
  const [job , setJob] = useState ([]);
  const [loading , setLoading] = useState (true);

  useEffect (() => {
    const fetchTopJobs = async() => {
      try {
        const res = await axios.post (`https://api.uzworks.uz/jobs`);
        const topjobs = res.data.filter((el) => el.isTop === true);
        setJob(topjobs);
        setLoading(false);
      } catch (error) {
       console.error("Xatolik yuz berdi:" , error);
       setLoading(false);
      };
    };
    fetchTopJobs();
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center h-[100vh] text-[48px] font-bold">Yuklanmoqda...</div>
  }

  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      <div className="max-w-[385px] w-full h-[193px]  bg-white rounded-[24px] p-6 shadow-lg shadow-[#415BF5CC] border-[2px] border-[#415BF5CC] transition-all hover:scale-105 cursor-pointer duration-800">
        <div className="flex items-center ">
          <div className="w-14 h-14  rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src="frame.png"
              alt="Logo"
              className="w-[40px] h-[40px] object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#130160]">Sotuvchi kerak</h1>
            <p className="text-gray-500 text-sm font-medium">
              {" "}
              Baliqchi, Andijon
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h2 className=" font-extrabold text-[#2F07E5]  leading-none">
            2 500 000 so'm{" "}
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

      <div className="max-w-[385px] w-full h-[193px]  bg-white rounded-[24px] p-6 shadow-lg shadow-[#415BF5CC] border-[2px] border-[#415BF5CC] transition-all hover:scale-105 cursor-pointer duration-800">
        <div className="flex items-center ">
          <div className="w-14 h-14 text-center  rounded-2xl overflow-hidden flex-shrink-0"></div>
          <div>
            <p className="text-gray-500 text-sm font-medium text-center">
              Baliqchi, Andijon
            </p>
          </div>
        </div>
        <div className="mb-6 text-center">
          <h2 className=" font-extrabold text-[#2F07E5] ">
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
      <div className="max-w-[385px] w-full h-[193px]  bg-white rounded-[24px] p-6 shadow-lg shadow-[#415BF5CC] border-[2px] border-[#415BF5CC] transition-all hover:scale-105 cursor-pointer duration-800">
        <div className="flex items-center ">
          <div className="w-14 h-14 text-center  rounded-2xl overflow-hidden flex-shrink-0"></div>
          <div>
            <p className="text-gray-500 text-sm font-medium text-center">
              Baliqchi, Andijon
            </p>
          </div>
        </div>
        <div className="mb-6 text-center">
          <h2 className=" font-extrabold text-[#2F07E5] ">
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

      <div className="max-w-[385px] w-full h-[193px]  bg-white rounded-[24px] p-6 shadow-lg shadow-[#415BF5CC] border-[2px] border-[#415BF5CC] transition-all hover:scale-105 cursor-pointer duration-800">
        <div className="flex items-center ">
          <div className="w-14 h-14 text-center  rounded-2xl overflow-hidden flex-shrink-0"></div>
          <div>
            <p className="text-gray-500 text-sm font-medium text-center">
              Baliqchi, Andijon
            </p>
          </div>
        </div>
        <div className="mb-6 text-center">
          <h2 className=" font-extrabold text-[#2F07E5] ">
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
  );
};

export default TopJobs;

