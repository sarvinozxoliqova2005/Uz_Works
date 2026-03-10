import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const FAQDesign = () => {
  return (
    <div className="max-w-[850px] mx-auto p-10 bg-white font-sans">
      <h2 className="text-center text-[54px] font-bold mb-16 text-[#1A0283]">
        <span className="text-[#2F07E5]">F.A.Q.</span> Session
      </h2>

      <div className="flex flex-col">
        <div className="border-b border-[#2F07E540] pb-8 mb-2">
          <div className="flex items-center gap-4 py-5">
            <FiMinusCircle className="text-[#2F07E5] text-[28px] flex-shrink-0" />
            <h3 className="text-[#2F07E5] text-[20px] font-bold">
              How to develop best portfolios in design with figma?
            </h3>
          </div>

          <div className="flex gap-6 ml-[13px]">
            <div className="w-[2px] bg-[#2F07E5] rounded-full self-stretch"></div>
            <p className="text-[#524B6B] text-[17px] leading-[1.6] max-w-[650px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
        {[
          "How to develop best portfolios in design with figma?",
          "Various versions have evolved over the years, sometimes by accident?",
          "Various versions have evolved over the years?",
          "How to develop best portfolios in design with figma?",
          "Various versions have evolved over the years, sometimes by accident?",
          "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters?",
          "How to develop best portfolios in design with figma?",
          "Various versions have evolved over the years?",
        ].map((question, index) => (
          <div
            key={index}
            className="border-b border-[#2F07E540] flex items-center gap-4 py-6 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <FiPlusCircle className="text-[#2F07E5] text-[28px] flex-shrink-0" />
            <h3 className="text-[#524B6B] text-[19px] font-bold">{question}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQDesign;
