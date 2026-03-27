import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Moon, Sun } from "lucide-react";

const translations = {
  Uzb: {
    title: "Hisob yaratish",
    subtitle: "Xush kelibsiz! Iltimos, ma’lumotlaringizni kiriting.",
    nameLabel: "Ismingiz",
    namePlaceholder: "Ismingizni kiriting",
    phoneLabel: "Telefon raqam",
    phonePlaceholder: "Telefon raqamingizni kiriting",
    passLabel: "Parol",
    passPlaceholder: "Parolingizni kiriting",
    confirmPassLabel: "Parolni tasdiqlang",
    confirmPassPlaceholder: "Parolingizni qayta kiriting",
    workerRole: "Ishchi",
    employerRole: "Ish beruvchi",
    submitBtn: "Hisob yaratish",
    loading: "Yuklanmoqda...",
    hasAccount: "Hisobingiz bormi ?",
    loginLink: "Hisobga kirish"
  },
  Rus: {
    title: "Создать аккаунт",
    subtitle: "Добро пожаловать! Пожалуйста, введите ваши данные.",
    nameLabel: "Ваше имя",
    namePlaceholder: "Введите ваше имя",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "Введите номер телефона",
    passLabel: "Пароль",
    passPlaceholder: "Введите пароль",
    confirmPassLabel: "Подтвердите пароль",
    confirmPassPlaceholder: "Введите пароль еще раз",
    workerRole: "Работник",
    employerRole: "Работодатель",
    submitBtn: "Создать аккаунт",
    loading: "Загрузка...",
    hasAccount: "Уже есть аккаунт ?",
    loginLink: "Войти"
  },
  Eng: {
    title: "Create Account",
    subtitle: "Welcome! Please enter your details.",
    nameLabel: "First Name",
    namePlaceholder: "Enter your first name",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Enter your phone number",
    passLabel: "Password",
    passPlaceholder: "Enter your password",
    confirmPassLabel: "Confirm Password",
    confirmPassPlaceholder: "Re-enter your password",
    workerRole: "Worker",
    employerRole: "Employer",
    submitBtn: "Create Account",
    loading: "Loading...",
    hasAccount: "Have an account ?",
    loginLink: "Sign In"
  }
};

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("worker");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState(localStorage.getItem("lang") || "Uzb");
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  const navigate = useNavigate();
  const t = translations[selectedLang];

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLangChange = (e) => {
    setSelectedLang(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error(selectedLang === "Uzb" ? "Parollar mos kelmadi!" : "Passwords do not match!");
    }

    setIsLoading(true);
    try {
      const cleanNumber = number.replace(/\D/g, "");
      const username = firstName.toLowerCase().replace(/\s+/g, "") + Math.floor(Math.random() * 1000);

      const registerData = {
        firstName,
        lastName: "User",
        phoneNumber: cleanNumber,
        username,
        password,
        confirmPassword,
        role: role === "worker" ? "Employee" : "Employer",
      };

      const res = await axios.post(`https://api.uzworks.uz/api/auth/register`, registerData);

      if (res.status === 200 || res.status === 201) {
        toast.success(selectedLang === "Uzb" ? "Muvaffaqiyatli!" : "Success!");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.errorMessage || "Error!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col lg:flex-row font-sans transition-colors duration-500 ${darkMode ? "dark bg-black" : "bg-white"}`}>
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Header */}
        <div className="flex items-center justify-between w-full mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2100E0] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white rounded-sm flex items-center justify-center">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xl sm:text-2xl font-black text-[#3B82F6] uppercase">
              UZ <span className={darkMode ? 'text-white' : 'text-black'}>WORKS</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <select
              value={selectedLang}
              onChange={handleLangChange}
              className={`text-xs sm:text-sm font-medium cursor-pointer outline-none bg-transparent ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}
            >
              <option value="Uzb">🇺🇿 Uzb</option>
              <option value="Rus">🇷🇺 Рус</option>
              <option value="Eng">🇬🇧 Eng</option>
            </select>
            <button onClick={() => setDarkMode(!darkMode)} className="outline-none p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {darkMode ? <Moon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" /> : <Sun size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-400" />}
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center py-4 sm:py-6 md:py-8">
          <div className={`w-full max-w-md lg:max-w-[500px] border rounded-xl p-5 sm:p-6 md:p-8 lg:p-10 transition-all duration-500 ${
            darkMode ? 'border-gray-800 bg-[#0A0A0A]' : 'border-gray-100 bg-white shadow-sm'
          }`}>
            {/* Title */}
            <div className="text-center mb-5 sm:mb-6 md:mb-8">
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 ${darkMode ? 'text-white' : 'text-[#09041C]'}`}>
                {t.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 px-2">{t.subtitle}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSignUp} className="space-y-3 sm:space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase ml-1">{t.nameLabel}</label>
                <input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className={`w-full h-10 sm:h-11 md:h-12 rounded-lg border px-3 sm:px-4 outline-none focus:border-[#2100E0] transition-all text-sm sm:text-base ${
                    darkMode ? "bg-[#141414] border-gray-800 text-white" : "border-gray-200"
                  }`}
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase ml-1">{t.phoneLabel}</label>
                <input
                  required
                  type="tel"
                  value={number}
                  onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
                  placeholder={t.phonePlaceholder}
                  maxLength={12}
                  className={`w-full h-10 sm:h-11 md:h-12 rounded-lg border px-3 sm:px-4 outline-none focus:border-[#2100E0] transition-all text-sm sm:text-base ${
                    darkMode ? "bg-[#141414] border-gray-800 text-white" : "border-gray-200"
                  }`}
                />
              </div>

              {/* Password fields - grid on tablet and up */}
              <div className=" gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase ml-1">{t.passLabel}</label>
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t.passPlaceholder}
                    className={`w-full h-10 sm:h-11 md:h-12 rounded-lg border px-3 sm:px-4 outline-none focus:border-[#2100E0] transition-all text-sm sm:text-base ${
                      darkMode ? "bg-[#141414] border-gray-800 text-white" : "border-gray-200"
                    }`}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase ml-1">{t.confirmPassLabel}</label>
                  <input
                    required
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={t.confirmPassPlaceholder}
                    className={`w-full h-10 sm:h-11 md:h-12 rounded-lg border px-3 sm:px-4 outline-none focus:border-[#2100E0] transition-all text-sm sm:text-base ${
                      darkMode ? "bg-[#141414] border-gray-800 text-white" : "border-gray-200"
                    }`}
                  />
                </div>
              </div>

              {/* Role Buttons */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <button
                  type="button"
                  onClick={() => setRole("worker")}
                  className={`h-10 sm:h-11 md:h-12 rounded-lg font-bold transition-all cursor-pointer text-sm sm:text-base ${
                    role === "worker" 
                      ? "bg-[#2100E0] text-white shadow-md shadow-blue-500/20" 
                      : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  {t.workerRole}
                </button>
                <button
                  type="button"
                  onClick={() => setRole("employer")}
                  className={`h-10 sm:h-11 md:h-12 rounded-lg cursor-pointer font-bold transition-all text-sm sm:text-base ${
                    role === "employer" 
                      ? "bg-[#2100E0] text-white shadow-md shadow-blue-500/20" 
                      : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  {t.employerRole}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 sm:h-12 md:h-14 text-white font-bold rounded-lg shadow-lg cursor-pointer bg-[#2100E0] transition-all mt-2 active:scale-95 text-sm sm:text-base"
              >
                {isLoading ? t.loading : t.submitBtn}
              </button>

              {/* Login Link */}
              <div className="text-center mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-400">
                  {t.hasAccount}{" "}
                  <Link to="/login" className="text-[#3B82F6] font-bold hover:underline">
                    {t.loginLink}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className={`hidden lg:flex flex-1 items-center justify-center transition-colors duration-500 ${darkMode ? "bg-black" : "bg-[#F9FBFF]"}`}>
        <img 
          src="/hero.png" 
          alt="Hero" 
          className="w-[70%] md:w-[80%] drop-shadow-2xl"
          onError={(e) => {
            e.target.src = "https://placehold.co/600x400/130160/white?text=Sign+Up";
          }}
        />
      </div>
    </div>
  );
};

export default SignUp;