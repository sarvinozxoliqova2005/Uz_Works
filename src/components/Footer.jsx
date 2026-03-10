import React from "react";
import { FaFacebookF, FaWhatsapp, FaHeadphonesAlt } from "react-icons/fa";

const Footer = () => {
  const footerData = [
    {
      title: "OUR PRODUCTS",
      links: ["THE SUPPORT SUIT", "THE SALE SUIT", "SUPPORT", "GUIDE"],
    },
    {
      title: "TOP FEATURES",
      links: [
        "TICKTING SYSTEM",
        "KNOWLADGE BASE",
        "COMMUNITY BASE",
        "HELP DISK SOFTWEAR",
      ],
    },
    {
      title: "RESOURCES",
      links: ["PRODUCT SUPPORT", "REQUEST DEMO", "LIBARY", "PEOPLE POWER BLOG"],
    },
    {
      title: "COMPANY",
      links: ["ABOUT US", "PRESS", "INVESTORS", "EVENTS"],
    },
    {
      title: "OUR FAVOURATE TH",
      links: [
        "FOR ENTERPRISE",
        "FOR STARTUP",
        "FOR BANCHMARK",
        "FOR SMALL BUSINESS",
      ],
    },
  ];

  return (
    <footer className="bg-[#0A005C] text-white pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-[40px] font-black tracking-wider flex items-center">
            <span className="text-[#415BF5]">UZ</span>WORKS
          </div>

          <div className="flex gap-4">
            {[
              <FaFacebookF />,
              <FaWhatsapp />,
              <FaHeadphonesAlt />,
              <FaFacebookF />,
              <FaWhatsapp />,
            ].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0A005C] hover:bg-[#415BF5] hover:text-white transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {footerData.map((section, index) => (
            <div key={index}>
              <h4 className="text-[14px] font-bold mb-8 tracking-widest text-gray-100 opacity-90">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[12px] font-semibold text-gray-300 hover:text-[#415BF5] transition-colors uppercase"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
