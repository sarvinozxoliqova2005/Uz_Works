import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Moon, Sun } from "lucide-react";

const translations = {
  Uzb: {
    title: "Hisobingizga kiring",
    desc: "Kirish sahifasi foydalanuvchilarning xavfsizligini ustuvor hisoblab, tizimning keng imkoniyatlariga tez va qulay kirishni ta'minlaydi.",
    phoneLabel: "Telefon raqam",
    phonePlaceholder: "Telefon raqamingizni kiriting",
    passLabel: "Parol",
    passPlaceholder: "Parolingizni kiriting",
    forgotPass: "Parol unutdingizmi ?",
    loginBtn: "Hisobga kirish",
    loading: "Kirilmoqda...",
    noAccount: "Hisobingiz yo'qmi ?",
    signUp: "Ro'yxatdan o'tish",
  },
  Rus: {
    title: "Войдите в аккаунт",
    desc: "Страница входа обеспечивает быстрый и удобный доступ к системе, уделяя приоритетное внимание безопасности.",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "Введите номер телефона",
    passLabel: "Пароль",
    passPlaceholder: "Введите пароль",
    forgotPass: "Забыли пароль?",
    loginBtn: "Войти",
    loading: "Вход...",
    noAccount: "Нет аккаунта?",
    signUp: "Регистрация",
  },
  Eng: {
    title: "Sign in to account",
    desc: "The login page provides fast and convenient access to the system, prioritizing user security.",
    phoneLabel: "Phone number",
    phonePlaceholder: "Enter your phone number",
    passLabel: "Password",
    passPlaceholder: "Enter your password",
    forgotPass: "Forgot password?",
    loginBtn: "Sign In",
    loading: "Loading...",
    noAccount: "Don't have an account?",
    signUp: "Sign Up",
  },
};

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Uzb");
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

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

  const t = translations[selectedLang];

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      return toast.error(
        selectedLang === "Uzb"
          ? "Ma'lumotlarni kiriting!"
          : "Please fill in fields!",
      );
    }
    setIsLoading(true);
    try {
      const cleanPhone = username.replace(/\D/g, "");
      const res = await axios.post(`https://api.uzworks.uz/api/auth/login`, {
        userName: cleanPhone,
        password: password,
      });
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("token", res.data?.token);
        toast.success("OK!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col lg:flex-row font-sans overflow-hidden ${
      darkMode ? 'dark bg-black' : 'bg-white'
    }`}>
      {/* Left side - Form (full width on mobile, 48% on desktop) */}
      <div className="w-full lg:w-[48%] flex flex-col p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Header with logo, language selector and theme toggle */}
        <div className="flex items-center justify-between w-full mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2100E0] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white rounded-sm flex items-center justify-center">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xl sm:text-2xl font-black text-[#3B82F6] uppercase">
              UZ <span className={`${darkMode ? 'text-white' : 'text-black'}`}>WORKS</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Language Selector */}
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className={`text-xs sm:text-sm font-medium cursor-pointer outline-none bg-transparent ${
                darkMode ? 'text-gray-300' : 'text-gray-500'
              }`}
            >
              <option value="Uzb">🇺🇿 Uzb</option>
              <option value="Rus">🇷🇺 Рус</option>
              <option value="Eng">🇬🇧 Eng</option>
            </select>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="outline-none p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <Moon size={18} className="sm:w-6 sm:h-6 text-white cursor-pointer" />
              ) : (
                <Sun size={18} className="sm:w-6 sm:h-6 text-orange-400 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* Form Container - centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className={`w-full max-w-[90%] sm:max-w-[500px] lg:max-w-[547px] border rounded-lg sm:rounded-xl lg:rounded-md p-6 sm:p-8 lg:p-12 ${
            darkMode 
              ? 'border-gray-500 bg-black' 
              : 'border-gray-300 bg-white'
          }`}>
            {/* Title and Description */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <h1 className={`text-2xl sm:text-3xl lg:text-3xl font-bold mb-2 sm:mb-3 ${
                darkMode ? 'text-white' : 'text-[#09041C]'
              }`}>
                {t.title}
              </h1>
              <p className={`text-xs sm:text-sm lg:text-[15px] leading-relaxed px-0 sm:px-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-400'
              }`}>
                {t.desc}
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Phone Number Field */}
              <div className="space-y-1 sm:space-y-2">
                <label className={`text-[10px] sm:text-xs lg:text-[12px] font-bold uppercase ml-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {t.phoneLabel}
                </label>
                <input
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className={`w-full h-10 sm:h-12 lg:h-14 rounded-lg cursor-pointer px-3 sm:px-4 lg:px-5 outline-none focus:border-[#2100E0] transition-all text-sm sm:text-base ${
                    darkMode 
                      ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                      : 'border border-gray-200'
                  }`}
                  type="tel"
                  placeholder={t.phonePlaceholder}
                />
              </div>

              {/* Password Field */}
              <div className="space-y-1 sm:space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className={`text-[10px] sm:text-xs lg:text-[12px] font-bold uppercase ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {t.passLabel}
                  </label>
                  <Link
                    to="/reset"
                    className="text-[10px] sm:text-xs lg:text-[11px] font-bold text-[#3B82F6] hover:underline"
                  >
                    {t.forgotPass}
                  </Link>
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-10 sm:h-12 lg:h-14 rounded-md cursor-pointer px-3 sm:px-4 lg:px-5 outline-none focus:border-[#2100E0] transition-all text-sm sm:text-base ${
                    darkMode 
                      ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                      : 'border border-gray-200'
                  }`}
                  type="password"
                  placeholder={t.passPlaceholder}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-10 sm:h-12 lg:h-14 bg-[#3B82F6] cursor-pointer text-white font-bold rounded-lg shadow-lg shadow-blue-100 dark:shadow-none hover:bg-[#1a00b3] transition-all text-sm sm:text-base"
              >
                {isLoading ? t.loading : t.loginBtn}
              </button>

              {/* Sign Up Link */}
              <div className="text-center mt-4 sm:mt-5 lg:mt-6">
                <p className={`text-xs sm:text-sm lg:text-[13px] ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>
                  {t.noAccount}{" "}
                  <Link
                    to="/signup"
                    className="text-[#3B82F6] font-bold hover:underline"
                  >
                    {t.signUp}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side - Illustration (hidden on mobile, shown on desktop) */}
      <div className={`hidden lg:flex flex-1 items-center justify-center ${
        darkMode ? 'bg-black' : 'bg-[#F9FBFF]'
      }`}>
        <img
          src="hero.png"
          alt="Illustration"
          className="w-[70%] md:w-[80%] drop-shadow-2xl"
          onError={(e) => {
            e.target.src = "https://placehold.co/600x400/f5f5f5/cccccc?text=Illustration";
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;