import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const SetNewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [retryPassword, setRetryPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // URL dan token va telefon raqamni olish
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get("token");
    const phoneFromUrl = params.get("phone");
    
    // 1. URL dan token olish (birinchi navbatda)
    if (tokenFromUrl) {
      localStorage.setItem("resetToken", tokenFromUrl);
      console.log("Token URL dan olindi:", tokenFromUrl);
    }
    
    // 2. URL dan telefon raqam olish
    if (phoneFromUrl) {
      localStorage.setItem("phoneNumber", phoneFromUrl);
      console.log("Telefon URL dan olindi:", phoneFromUrl);
    }
    
    // 3. LocalStorage dagi ma'lumotlarni tekshirish
    const storedToken = localStorage.getItem("resetToken");
    const storedPhone = localStorage.getItem("phoneNumber");
    
    console.log("LocalStorage:", {
      token: storedToken,
      phone: storedPhone
    });
    
    // 4. Agar token hali ham yo'q bo'lsa
    if (!storedToken) {
      toast.warning("Token topilmadi. Iltimos, SMS kodni qayta tekshiring!");
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword.trim()) {
      return toast.error("Yangi parolni kiriting!");
    }

    if (newPassword.length < 6) {
      return toast.error("Parol kamida 6 belgidan iborat bo'lishi kerak!");
    }

    if (newPassword !== retryPassword) {
      return toast.error("Parollar mos kelmadi!");
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("resetToken");
      const phoneNumber = localStorage.getItem("phoneNumber");
      
      console.log("Yuborishdan oldin:", { token, phoneNumber });

      if (!token) {
        toast.error("Token topilmadi. SMS kodni qayta tasdiqlang!");
        setLoading(false);
        return;
      }

      if (!phoneNumber) {
        toast.error("Telefon raqam topilmadi!");
        setLoading(false);
        return;
      }

      const data = {
        phoneNumber: phoneNumber,
        token: token,
        newPassword: newPassword,
        confirmPassword: retryPassword,
      };

      console.log("Yuborilayotgan ma'lumot:", data);

      const res = await axios.post(
        "/api/auth/set-password-for-forget-password",
        data
      );

      if (res.status === 200) {
        toast.success("Parol muvaffaqiyatli o'zgartirildi!");
        localStorage.removeItem("resetToken");
        localStorage.removeItem("phoneNumber");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      console.error("Xatolik:", error.response?.data);
      
      if (error.response?.status === 400) {
        toast.error(error.response?.data?.errorMessage || "Token yaroqsiz yoki muddati o'tgan!");
      } else {
        toast.error(error.response?.data?.errorMessage || "Xatolik yuz berdi!");
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
                Type in your new password
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-bold text-[#2F07E5]">
                  New password *
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full h-14 px-4 border-2 border-gray-300 rounded-md outline-none focus:border-[#2F07E5] transition-all"
                  placeholder="··········"
                  required
                  disabled={loading}
                />
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-4 bg-white px-2 text-xs font-bold text-[#2F07E5]">
                  Retry new password *
                </label>
                <input
                  type="password"
                  value={retryPassword}
                  onChange={(e) => setRetryPassword(e.target.value)}
                  className="w-full h-14 px-4 border-2 border-gray-300 rounded-md outline-none focus:border-[#2F07E5] transition-all"
                  placeholder="··········"
                  required
                  disabled={loading}
                />
              </div>

              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#130160] text-white rounded-md font-bold text-lg hover:bg-[#1d0a75] disabled:opacity-50 transition-all"
                >
                  {loading ? "SAVING..." : "SAVE"}
                </button>

                <Link to="/" className="block">
                  <button
                    type="button"
                    disabled={loading}
                    className="w-full h-12 border-2 border-[#130160] text-[#130160] hover:bg-[#130160] hover:text-white transition-all rounded-md font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <FaChevronLeft className="text-xs" /> BACK TO LOGIN
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
              e.target.src = "https://placehold.co/600x400/130160/white?text=Set+New+Password";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SetNewPassword;