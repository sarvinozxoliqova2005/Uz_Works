import axios from "axios";
import React, { useState } from "react";
import { FaArrowRight, FaChevronLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("worker");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!firstName.trim()) {
      return toast.error("Ismni kiriting!");
    }
    if (!number.trim() || number.length < 9) {
      return toast.error("Telefon raqamni to'g'ri kiriting!");
    }
    if (!password.trim()) {
      return toast.error("Parolni kiriting!");
    }
    if (password !== confirmPassword) {
      return toast.error("Parollar mos kelmadi!");
    }

    setIsLoading(true);

    try {
      const cleanNumber = number.replace(/\D/g, "");
      const username =
        firstName.toLowerCase().replace(/\s+/g, "") +
        Math.floor(Math.random() * 1000);
      const roleValue = role === "worker" ? "Employee" : "Employer";
      const registerData = {
        firstName: firstName,
        lastName: "User",
        phoneNumber: cleanNumber,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        role: roleValue,
      };

      console.log("Yuborilayotgan ma'lumot:", registerData);

      const res = await axios.post(`/api/auth/register`, registerData, {
        timeout: 10000,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      console.log("Server javobi:", res);

      if (res.status === 200 || res.status === 201) {
        toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");

        if (res.data?.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data));
        } else {
          setTimeout(() => navigate("/password"), 2000);
        }
      }
    } catch (error) {
      console.error("Xatolik:", error.response?.data);

      if (error.response?.data?.errorMessage) {
        toast.error(error.response.data.errorMessage);
      } else {
        toast.error("Xatolik yuz berdi!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-[#F4F7FE] py-10">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chap qism - Forma */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {/* Logo */}
            <div className="mb-8">
              <h1 className="text-[#2F07E5] text-3xl font-black uppercase tracking-tighter">
                Uz <span className="text-black">Works</span>
              </h1>
              <p className="mt-4 text-gray-500 font-medium uppercase text-sm">
                Create new account
              </p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-5">
              <div className="space-y-4">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="w-full h-14 rounded-lg border border-gray-200 bg-white px-5 outline-none focus:border-[#2F07E5]"
                  type="text"
                  placeholder="First Name *"
                  required
                  disabled={isLoading}
                />

                <input
                  onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
                  value={number}
                  className="w-full h-14 rounded-lg border border-gray-200 bg-white px-5 outline-none focus:border-[#2F07E5]"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  disabled={isLoading}
                  maxLength={12}
                />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full h-14 rounded-lg border border-gray-200 bg-white px-5 outline-none focus:border-[#2F07E5]"
                  type="password"
                  placeholder="Password *"
                  required
                  disabled={isLoading}
                />

                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className="w-full h-14 rounded-lg border border-gray-200 bg-white px-5 outline-none focus:border-[#2F07E5]"
                  type="password"
                  placeholder="Confirm Password *"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setRole("worker")}
                  disabled={isLoading}
                  className={`h-[55px] rounded-lg cursor-pointer font-bold flex items-center justify-center gap-2 transition-all ${
                    role === "worker"
                      ? "bg-[#130160] text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                >
                  Ishchi <FaArrowRight className="text-xs" />
                </button>
                <button
                  type="button"
                  onClick={() => setRole("employer")}
                  disabled={isLoading}
                  className={`h-[55px] rounded-lg cursor-pointer font-bold transition-all ${
                    role === "employer"
                      ? "bg-[#130160] text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                >
                  Ish beruvchi
                </button>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 rounded-lg bg-[#130160] text-white cursor-pointer font-bold uppercase hover:bg-[#1d0a75] disabled:opacity-50"
                >
                  {isLoading ? "Ro'yxatdan o'tkazilmoqda..." : "Create Account"}
                </button>

                <Link to="/" className="block">
                  <button
                    type="button"
                    disabled={isLoading}
                    className="w-full h-12 rounded-lg flex items-center justify-center gap-2 border-2 border-[#130160] cursor-pointer text-[#130160] font-bold uppercase hover:bg-[#130160] hover:text-white transition-all disabled:opacity-50"
                  >
                    <FaChevronLeft className="text-[10px]" /> Back to Login
                  </button>
                </Link>
              </div>
            </form>
          </div>

          <div className="hidden lg:block relative">
            <img
              className="relative w-full max-w-lg mx-auto"
              src="/uzworks.svg"
              alt="UzWorks Illustration"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/600x400/130160/white?text=Sign+Up";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
