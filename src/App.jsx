import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Navbar/pagesNavbar/Home";
import AboutUs from "./components/Navbar/pagesNavbar/Aboutus";
import Features from "./components/Navbar/pagesNavbar/Features";
import Security from "./components/Navbar/pagesNavbar/Security";
import SignUp from "./components/Navbar/Modals/Signup";
import Login from "./components/Navbar/Modals/Login";
import Admin from "./components/Navbar/Modals/Admin";
import AdminDashboard from "./components/adminDashboard/Admin/AdminDashboard";
import UserDashboard from './components/userDashboard/User/UserDashboard'
import ResetPassword from "./components/Navbar/Modals/ResetPassword";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ["/admin-dashboard","/user-dashboard"];
  const isNotFoundRoute = ![
    "/",
    "/features",
    "/about",
    "/security",
    "/admin",
    "/login",
    "/signup",
    "/user-dashboard",
    "/admin-dashboard"
  ].includes(location.pathname);

  return (
    <>
      <ToastContainer />
      {!hideNavbarRoutes.includes(location.pathname) && !isNotFoundRoute && <Navbar />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/security" element={<Security />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
