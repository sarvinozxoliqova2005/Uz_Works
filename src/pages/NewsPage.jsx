import { FaRegCalendarAlt, FaRegEye } from "react-icons/fa";
import NewsSwiperCard from "../components/NewsSwiperCard";

const NewsPage = () => {
  return (
    <>
      <section className="py-10 bg-[#F8F9FD] font-sans">
        <div className="container mx-auto px-5">
          <h2 className="text-[36px] font-bold mb-10">
            <span className="text-[#2F07E5]">Last</span>{" "}
            <span className="text-[#1A0283]">News</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-7/12 relative rounded-xl overflow-hidden group shadow-lg h-[530px]">
              <img
                src="amaki.png"
                alt="Main"
                className="w-[950px] h-[550px] object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <div className="flex items-center gap-2 text-white/80 text-[14px] mb-3">
                  <FaRegCalendarAlt /> 19.12.2023-y
                </div>
                <h3 className="text-white text-[26px] font-bold leading-tight">
                  Xi Jinping to go after ‘ants and flies’ as he intensifies his
                  crackdown on firms
                </h3>
              </div>
            </div>

            <div className="lg:w-5/12 flex flex-col gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 p-3 rounded-md border cursor-pointer border-[#E5E7EB] bg-white hover:shadow-md duration-500 hover:shadow-[#2F07E5] transition-all"
                >
                  <div className="w-32 h-24 flex-shrink-0 rounded-md overflow-hidden">
                    <img
                      src="komputer.jpg"
                      className="w-[120px] h-[88px] object-cover"
                      alt="news"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <div className="flex justify-between items-center">
                      <span className=" text-[12px] font-medium flex items-center gap-1">
                        <FaRegCalendarAlt className="text-gray-400 text-[18px]" />{" "}
                        19.12.2023-y
                      </span>
                      <span className="text-gray-400 text-[12px] flex items-center gap-1">
                        <FaRegEye className="text-[24px]" /> 193
                      </span>
                    </div>
                    <h4 className=" font-bold text-[15px] leading-snug line-clamp-2">
                      Xi Jinping to go after ‘ants and flies’ as he intensifies
                      his crackdown on firms
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FD]">
        <div className="container mx-auto px-5 pt-[60px]">
          <h2 className="text-[32px] font-bold mb-8 text-[#1A0283]">
            <span className="text-[#415BF5]">Top</span> News
          </h2>
          <div className="lg:w-12/12 flex flex-col gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex gap-4 p-3 rounded-md border cursor-pointer border-[#E5E7EB] bg-white hover:shadow-md duration-500 hover:shadow-[#2F07E5] transition-all"
              >
                <div className="w-32 h-24 flex-shrink-0 rounded-md overflow-hidden">
                  <img
                    src="gazeta.jpg"
                    className="w-[120px] h-[100px] object-cover"
                    alt="news"
                  />
                </div>
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div className="flex justify-between items-center">
                    <span className=" text-[12px] font-medium flex items-center gap-1">
                      <FaRegCalendarAlt className="text-gray-400 text-[18px]" />{" "}
                      19.12.2023-y
                    </span>
                    <span className="text-gray-400 text-[12px] flex items-center gap-1">
                      <FaRegEye className="text-[24px]" /> 193
                    </span>
                  </div>
                  <h4 className=" font-bold text-[15px] leading-snug line-clamp-2">
                    Xi Jinping to go after ‘ants and flies’ as he intensifies
                    his crackdown on firms
                  </h4>

                  <h1 className="font-bold text-[15px] leading-snug mt-2">
                    China will tackle “hidden risks” and increase the punishment
                    for people who offer bribes, Xi was quoted as saying at a
                    Monday meeting of the Communist Party’s Central Commission
                    for Discipline Inspection (CCDI), its top anti-graft body,
                    state media reported.
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[60px] bg-[#F8F9FD]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-full h-[235px] mb-4 overflow-hidden rounded-[12px]">
                <img
                  className="w-full h-full object-cover "
                  src="gazeta.jpg"
                  alt="Xi Jinping"
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[12px] font-medium text-gray-400">
                  <FaRegCalendarAlt className="text-[#415BF5] text-[16px]" />
                  <span>19.12.2023-y</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-gray-400 font-medium">
                  <FaRegEye />
                  <span>193</span>
                </div>
              </div>
              <h1 className="text-[18px] leading-[1.3] mb-3 uppercase">
                Xi Jinping to go after ‘ants and flies’ as he intensifies his
                crackdown on firms
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed line-clamp-4">
                China will tackle “hidden risks” and increase the punishment for
                people who offer bribes, Xi was quoted as saying at a Monday
                meeting of the Communist Party’s Central Commission for
                Discipline Inspection (CCDI), its top anti-graft body, state
                media reported.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-full h-[235px] mb-4 overflow-hidden rounded-[12px]">
                <img
                  className="w-full h-full object-cover "
                  src="gazeta.jpg"
                  alt="Xi Jinping"
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[12px] font-medium text-gray-400">
                  <FaRegCalendarAlt className="text-[#415BF5] text-[16px]" />
                  <span>19.12.2023-y</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-gray-400 font-medium">
                  <FaRegEye />
                  <span>193</span>
                </div>
              </div>
              <h1 className="text-[18px] leading-[1.3] mb-3 uppercase">
                Xi Jinping to go after ‘ants and flies’ as he intensifies his
                crackdown on firms
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed line-clamp-4">
                China will tackle “hidden risks” and increase the punishment for
                people who offer bribes, Xi was quoted as saying at a Monday
                meeting of the Communist Party’s Central Commission for
                Discipline Inspection (CCDI), its top anti-graft body, state
                media reported.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-full h-[235px] mb-4 overflow-hidden rounded-[12px]">
                <img
                  className="w-full h-full object-cover "
                  src="gazeta.jpg"
                  alt="Xi Jinping"
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[12px] font-medium text-gray-400">
                  <FaRegCalendarAlt className="text-[#415BF5] text-[16px]" />
                  <span>19.12.2023-y</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-gray-400 font-medium">
                  <FaRegEye />
                  <span>193</span>
                </div>
              </div>
              <h1 className="text-[18px] leading-[1.3] mb-3 uppercase">
                Xi Jinping to go after ‘ants and flies’ as he intensifies his
                crackdown on firms
              </h1>
              <p className="text-[14px] text-gray-500 leading-relaxed line-clamp-4">
                China will tackle “hidden risks” and increase the punishment for
                people who offer bribes, Xi was quoted as saying at a Monday
                meeting of the Communist Party’s Central Commission for
                Discipline Inspection (CCDI), its top anti-graft body, state
                media reported.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
            <NewsSwiperCard/>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
