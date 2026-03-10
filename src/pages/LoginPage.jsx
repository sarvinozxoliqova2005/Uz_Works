import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Moon, Sun } from "lucide-react";

const translations = {
  Uzb: {
    title: "Hisobingizga kiring",
    desc: "Kirish sahifasi foydalanuvchilarning xavfsizligini ustuvor hisoblab, tizimga tez va qulay kirishni ta'minlaydi.",
    phoneLabel: "Telefon raqam",
    phonePlaceholder: "Telefon raqamingizni kiriting",
    passLabel: "Parol",
    passPlaceholder: "Parolingizni kiriting",
    forgotPass: "Parol unutdingizmi?",
    loginBtn: "Hisobga kirish",
    loading: "Kirilmoqda...",
    noAccount: "Hisobingiz yo'qmi?",
    signUp: "Ro'yxatdan o'tish",
  },
  Rus: {
    title: "Войдите в аккаунт",
    desc: "Страница входа обеспечивает быстрый и удобный доступ к системе.",
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
    desc: "Login page provides fast and secure access to the system.",
    phoneLabel: "Phone number",
    phonePlaceholder: "Enter phone number",
    passLabel: "Password",
    passPlaceholder: "Enter password",
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
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

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

    if (!username || !password) {
      return toast.error("Ma'lumotlarni kiriting!");
    }

    setIsLoading(true);

    try {
      const cleanPhone = username.replace(/\D/g, "");

      const res = await axios.post(
        "https://api.uzworks.uz/api/auth/login",
        {
          userName: cleanPhone,
          password: password,
        }
      );

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);

        toast.success("Login successful");

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message || "Login error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex font-sans overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      {/* LEFT */}
      <div className="w-full lg:w-[48%] flex flex-col p-6 md:p-12">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#2100E0] rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>

            <span className="text-2xl font-black text-[#3B82F6] uppercase">
              UZ{" "}
              <span className={darkMode ? "text-white" : "text-black"}>
                WORKS
              </span>
            </span>
          </div>

          {/* LANGUAGE + DARK */}
          <div className="flex items-center gap-6">
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="text-sm bg-transparent outline-none"
            >
              <option value="Uzb">🇺🇿 Uzb</option>
              <option value="Rus">🇷🇺 Рус</option>
              <option value="Eng">🇬🇧 Eng</option>
            </select>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {darkMode ? (
                <Moon size={22} />
              ) : (
                <Sun size={22} className="text-orange-400" />
              )}
            </button>
          </div>
        </div>

        {/* LOGIN CARD */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className={`w-full max-w-[540px] border rounded-md p-10 ${
              darkMode
                ? "border-gray-600 bg-black"
                : "border-gray-300 bg-white"
            }`}
          >
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-3">{t.title}</h1>
              <p className="text-gray-400 text-[15px]">{t.desc}</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* PHONE */}
              <div>
                <label className="text-xs uppercase text-gray-400">
                  {t.phoneLabel}
                </label>

                <input
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  className={`w-full h-14 mt-2 px-5 rounded-lg outline-none ${
                    darkMode
                      ? "bg-gray-700 border border-gray-600"
                      : "border border-gray-200"
                  }`}
                />
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <label className="uppercase text-gray-400">
                    {t.passLabel}
                  </label>

                  <Link
                    to="/reset"
                    className="text-blue-500 font-bold"
                  >
                    {t.forgotPass}
                  </Link>
                </div>

                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder={t.passPlaceholder}
                  className={`w-full h-14 px-5 rounded-lg outline-none ${
                    darkMode
                      ? "bg-gray-700 border border-gray-600"
                      : "border border-gray-200"
                  }`}
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-[#3B82F6] text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                {isLoading ? t.loading : t.loginBtn}
              </button>

              {/* SIGNUP */}
              <div className="text-center text-sm text-gray-400">
                {t.noAccount}
                <Link
                  to="/signup"
                  className="text-blue-500 font-bold ml-2"
                >
                  {t.signUp}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div
        className={`hidden lg:flex flex-1 items-center justify-center ${
          darkMode ? "bg-black" : "bg-[#F9FBFF]"
        }`}
      >
        <img
          src="/hero.png"
          alt="Illustration"
          className="w-[80%] drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default LoginPage;