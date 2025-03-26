import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/Aboutus";
import Features from "./components/pages/Features";
import Security from "./components/pages/Security";
import SignUp from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import Employee from './components/pages/Employee'
import AdminDashboard from "./components/adminDashboard/AdminDashboard";

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ["/admin-dashboard","employee-dashboard"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/security" element={<Security />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<Employee />} />
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
