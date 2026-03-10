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
    <div className={`min-h-screen w-full flex font-sans overflow-hidden ${
      darkMode ? 'dark bg-black duration-500' : 'bg-white duration-500'
    }`}>
      <div className="w-full lg:w-[48%] flex flex-col p-6 md:p-12">
        <div className="flex items-center justify-between w-full mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#2100E0] rounded-full flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-black text-[#3B82F6] uppercase ">
              UZ <span className={`${darkMode ? 'text-white ' : 'text-black '}`}>WORKS</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className={`text-sm font-medium cursor-pointer outline-none bg-transparent ${
                darkMode ? 'text-gray-300' : 'text-gray-500'
              }`}
            >
              <option value="Uzb">🇺🇿 Uzb</option>
              <option value="Rus">🇷🇺 Рус</option>
              <option value="Eng">🇬🇧 Eng</option>
            </select>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="outline-none p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <Moon size={24} className="text-white cursor-pointer" />
              ) : (
                <Sun size={24} className="text-orange-400 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className={`w-full max-w-[547px] max-[600px]:w-full max-[600px]:h-[500px]  border-2  rounded-md p-8 md:p-12 ${
            darkMode 
              ? 'border-gray-500 bg-black' 
              : 'border-gray-300 bg-white'
          }`}>
            <div className="text-center mb-10">
              <h1 className={`text-3xl max-[600px]:text-2xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-[#09041C]'
              }`}>
                {t.title}
              </h1>
              <p className={`text-[15px] max-[600px]:text-[12px] leading-relaxed px-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-400'
              }`}>
                {t.desc}
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className={`text-[12px] max-[600px]:text-[10px] font-bold uppercase ml-1 ${
                  darkMode ? 'text-gray-400 duration-500' : 'text-gray-500 duration-500'
                }`}>
                  {t.phoneLabel}
                </label>
                <input
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className={`w-full max-[600px]:h-12 h-14 rounded-lg cursor-pointer px-5 outline-none focus:border-[#2100E0] transition-all ${
                    darkMode 
                      ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 duration-500' 
                      : 'border border-gray-200 duration-500'
                  }`}
                  type="tel"
                  placeholder={t.phonePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className={`text-[12px] max-[600px]:text-[10px] font-bold uppercase ${
                    darkMode ? 'text-gray-400 duration-500' : 'text-gray-500 duration-500'
                  }`}>
                    {t.passLabel}
                  </label>
                  <Link
                    to="/reset"
                    className="text-[11px] font-bold text-[#3B82F6] hover:underline"
                  >
                    {t.forgotPass}
                  </Link>
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-14 max-[600px]:h-12 rounded-md cursor-pointer px-5 outline-none focus:border-[#2100E0] transition-all ${
                    darkMode 
                      ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                      : 'border border-gray-200'
                  }`}
                  type="password"
                  placeholder={t.passPlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full h-14 max-[600px]:h-12 bg-[#3B82F6] mt-2 cursor-pointer text-white font-bold rounded-lg shadow-lg shadow-blue-100 dark:shadow-none hover:bg-[#1a00b3] transition-all"
              >
                {isLoading ? t.loading : t.loginBtn}
              </button>
              <div className="text-center mt-6">
                <p className={`text-[13px] ${darkMode ? 'text-gray-400 duration-500' : 'text-gray-400 duration-500'}`}>
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
      <div className={`hidden lg:flex flex-1 items-center justify-center ${
        darkMode ? 'bg-black duration-500' : 'bg-[#F9FBFF] duration-500'
      }`}>
        <img
          src="hero.png"
          alt="Illustration"
          className="w-[80%] drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default LoginPage;