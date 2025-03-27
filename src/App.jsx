import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/pagesNavbar/Home";
import AboutUs from "./components/Navbar/pagesNavbar/Aboutus";
import Features from "./components/Navbar/pagesNavbar/Features";
import Security from "./components/Navbar/pagesNavbar/Security";
import SignUp from "./components/Navbar/Modals/Signup";
import Login from "./components/Navbar/Modals/Login";
import Admin from "./components/Navbar/Modals/Admin";
import AdminDashboard from "./components/adminDashboard/Admin/AdminDashboard";

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ["/admin-dashboard","user-dashboard"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/security" element={<Security />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
