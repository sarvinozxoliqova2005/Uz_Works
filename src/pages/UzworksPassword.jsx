import axios from "axios";
import React, { useState } from "react";
import { FaArrowRight, FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      return toast.error("Telefon raqamni kiriting!");
    }

    if (phoneNumber.length !== 12) {
      return toast.error("Telefon raqam 12 xonali bo'lishi kerak! (998901234567)");
    }

    setLoading(true);

    try {
      const cleanNumber = phoneNumber.replace(/\D/g, '');
            const requestData = {
        phoneNumber: cleanNumber  
      };

      console.log("Yuborilayotgan ma'lumot:", requestData);
      const res = await axios.post(
        `/api/auth/forget-password`,  
        requestData,
        {
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          timeout: 10000
        }
      );

      console.log("Server javobi:", res);

      if (res.status >= 200 && res.status < 300) {
        localStorage.setItem("phoneNumber", cleanNumber);
        toast.success("SMS kod yuborildi!");
        setTimeout(() => navigate("/verify-code"), 1500); 
      }

    } catch (error) {
      console.error("Xatolik:", error.response?.data || error.message);
      
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        
        if (status === 400) {
          toast.error(data?.errorMessage || "Noto'g'ri so'rov!");
        } else if (status === 404) {
          toast.error("Bu telefon raqam tizimda topilmadi!");
        } else if (status === 429) {
          toast.error("Judayam ko'p so'rov. Birozdan so'ng urinib ko'ring!");
        } else if (status === 500) {
          toast.error("Server xatoligi!");
        } else {
          toast.error(`Xatolik yuz berdi (${status})`);
        }
      } else if (error.request) {
        toast.error("Serverdan javob kelmadi!");
      } else {
        toast.error("Xatolik: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-white font-sans">
      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-md w-full mx-auto lg:ml-auto">
          <div className="mb-12">
            <h1 className="text-[#2F07E5] text-4xl font-black uppercase tracking-tighter">
              Uz <span className="text-black">Works</span>
            </h1>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
                Reset your password
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                Type in your registered phone number to reset password
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-bold text-[#2F07E5]">
                  Phone Number
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="w-full h-16 px-4 border-2 border-gray-300 rounded-md outline-none focus:border-[#2F07E5] disabled:bg-gray-100"
                  placeholder="998901234567"
                  required
                  disabled={loading}
                  maxLength={12}
                />
              </div>

              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-[110px] h-[42px] bg-[#130160] text-white rounded-md font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#1d0a75] disabled:opacity-50"
                >
                  {loading ? "..." : "NEXT"}
                  {!loading && <FaArrowRight className="text-sm" />}
                </button>

                <Link to="/" className="block mt-5">
                  <button
                    type="button"
                    disabled={loading}
                    className="w-full h-14 border-2 border-[#130160] text-[#130160] hover:bg-[#130160] hover:text-white transition-all rounded-md font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <FaChevronLeft className="text-[10px]" /> BACK TO LOGIN
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src="/hero.png"
            alt="Illustration"
            className="w-full max-w-lg mx-auto"
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400/130160/white?text=Reset+Password";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;