import axios from "axios";
import React, { useState } from "react";
import { FaArrowRight, FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SmsCodePage = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!code.trim() || code.length < 4) {
      return toast.error("Iltimos, tasdiqlash kodini to'liq kiriting!");
    }

    setLoading(true);

    try {
      const phoneNumber = localStorage.getItem("phoneNumber");
      const confirmData = {
        phone: phoneNumber,
        code: code.trim(), 
      };

      const res = await axios.post(
        `https://api.uzworks.uz/Auth/confirm-phone`,
        confirmData,
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      if (res.status === 200 || res.status === 201 || res.status === 204) {
        toast.success("Muvaffaqiyatli tasdiqlandi!");
        
        if (res.data?.token) {
          localStorage.setItem("token", res.data.token);
        }
        
        setTimeout(() => navigate("/set-password"), 1500);
      }
    } catch (error) {
      console.error("Xatolik detallari:", error.response?.data);
      toast.error(error.response?.data?.message || "Kod xato kiritildi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-white font-sans selection:bg-[#2F07E5]/10">
      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-md w-full mx-auto lg:ml-auto">
          <div className="mb-12">
            <h1 className="text-[#2F07E5] text-4xl font-black uppercase tracking-tighter flex items-center gap-2 text-center lg:text-left">
              Uz <span className="text-black">Works</span>
            </h1>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3  ">
                Sms Code
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed ">
                Please check your sms code for next steps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-bold text-[#2F07E5] z-10 transition-all">
                  SMS Code
                </label>
                <input
                  type="text" 
                  maxLength={6} 
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} 
                  className="w-full h-16 px-4 border-2 border-gray-300 rounded-md outline-none focus:border-[#2F07E5] focus:ring-4 focus:ring-[#2F07E5]/5 transition-all text-center text-3xl tracking-[10px] font-bold"
                  placeholder=""
                  required
                  disabled={loading}
                />
              </div>

              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-[120px] lg:w-[150px] h-[50px] bg-[#130160] text-white cursor-pointer rounded-md font-bold text-lg flex items-center justify-center gap-3 transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
                >
                  {loading ? "..." : "Next"}
                  {!loading && <FaArrowRight className="text-sm" />}
                </button>

                <Link to="/" className="block">
                  <button
                    type="button"
                    disabled={loading}
                    className="w-full h-14 border-2 border-[#130160] text-[#130160] hover:bg-[#130160] hover:text-white transition-all rounded-md font-bold text-md flex items-center justify-center gap-2"
                  >
                    <FaChevronLeft className="text-[10px]" /> Back to Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center h-[92vh] rounded-[60px] relative overflow-hidden bg-gray-50">
          <img src="/hero.png" alt="Hero" className="max-w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default SmsCodePage;