import React from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Predict from "./pages/Predict";
import Footer from "./components/Footer";
import AOS from "aos";
import Login from "./components/auth/login/login";
import Signup from "./components/auth/siginup/signup";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import { AuthProvider } from "./context/authContext";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/info" element={<Hero />} />

          <Route path="/predict" element={<Predict />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}
