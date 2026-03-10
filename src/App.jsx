import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import UzworksPassword from "./pages/UzworksPassword"; 
import SmsCodePage from "./pages/SmsCodePage";
import SetNewPassword from "./pages/SetNewPassword";
import Layout from "./components/Layout";
import HomePages from "./pages/HomePages";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password" element={<UzworksPassword />} />
        <Route path="/sms-code" element={<SmsCodePage />} />
        <Route path="/set-password" element={<SetNewPassword />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePages />} />
          <Route path="/news" element={<NewsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#130160] mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Sahifa topilmadi</p>
        <a href="/" className="text-[#130160] hover:underline">
          Bosh sahifaga qaytish
        </a>
      </div>
    </div>
  );
};

export default App;
