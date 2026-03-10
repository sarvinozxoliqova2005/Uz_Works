import React, { useState } from "react";

const Languages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    code: "Uzb",
    name: "O'zbekcha",
  });

  const languages = [
    { code: "UZb", name: "O'zbekcha" },
    { code: "Rus", name: "Русский" },
    { code: "Eng", name: "English" },
  ];

  return (
    <div className="relative inline-block text-left font-sans">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-900 transition-all p-1 select-none"
      >
        <span className="tracking-wide">{selectedLang.code}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="absolute right-0 mt-3 w-40 bg-white border border-gray-100 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-50 py-2 animate-in fade-in slide-in-from-top-2">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => {
                  setSelectedLang(lang);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-2.5 text-[13px] cursor-pointer transition-colors ${
                  selectedLang.code === lang.code
                    ? "bg-[#F4F7FE] text-[#2100E0] font-bold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {lang.name}
                {selectedLang.code === lang.code && (
                  <Check size={14} strokeWidth={3} />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Languages;
