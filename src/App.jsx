import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./css/style.scss";
import 'react-toastify/dist/ReactToastify.css';

import AOS from "aos";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Feed from "./pages/Feed";
import Timeline from "./pages/Timeline";
import Header from "./components/Header";
import Overview from './pages/Overview';
import { ToastContainer } from 'react-toastify';

import { ContributionProvider } from "./context/ContributionContext";

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, []); // triggered on route change

  return (
    <ContributionProvider>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path='/overview' element={<Overview />} />
        </Routes>
        <ToastContainer />
      </div>
    </ContributionProvider>
  );
}

export default App;
