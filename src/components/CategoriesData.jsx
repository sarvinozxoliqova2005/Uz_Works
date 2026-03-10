import React from "react";

const CategoriesData = () => {
  const categoryData = [
    { name: "News", services: "2,358 services" },
    { name: "Blogs", services: "2,358 services" },
    { name: "Technology", services: "2,358 services", active: true },
    { name: "Economics", services: "2,358 services" },
    { name: "Business", services: "2,358 services" },
    { name: "Travel", services: "2,358 services" },
    { name: "Marketing", services: "2,358 services" },
    { name: "Psychology", services: "2,358 services" },
    { name: "Design", services: "2,358 services" },
    { name: "Politics", services: "2,358 services" },
    { name: "Art", services: "2,358 services" },
    { name: "Education", services: "2,358 services" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[32px] md:text-[44px] font-bold text-[#1A0283] mb-12">
          Get work done in over 72 different{" "}
          <span className="text-[#2F07E5]">Categories</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryData.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center justify-center 
                h-[70px] rounded-[12px] border-[2px] transition-all duration-500 cursor-pointer
                ${
                  item.active
                    ? "bg-[#1A0283] border-[#1A0283] text-white shadow-lg"
                    : "bg-white border-[#E5E7EB] text-[#1A0283] hover:border-[#415BF5] hover:shadow-md"
                }
              `}
            >
              <span className="font-bold text-[16px] leading-tight">
                {item.name}
              </span>
              <span
                className={`text-[12px] mt-1 ${item.active ? "text-white/70" : "text-gray-400"}`}
              >
                {item.services}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesData;
