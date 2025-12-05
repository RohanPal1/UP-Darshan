import React from "react";
import "./App.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { WelcomePage } from "../src/components/WelcomePage/WelcomePage";
import { Landing_Page } from "./components/LandingPage/Landing_Page";
import { Routes, Route } from "react-router-dom";
import PlayAudioPage from "./components/PlayAudioPages/PlayAudioPage";
import Audio_and_Location from "./components/Audio_and_Location/Audio_and_Location";
import Map_Full_View from "./components/Map_Full_View/Map_Full_View";
import Homepage from "../src/components/Homepage/Homepage";
import Product_Page from "./components/ProductPage/Product_Page";
import Settings from "./components/Settings/Settings";
import FeedbackForm from "./components/Feedback/FeedbackForm";
import { useFontSize } from "./components/FontChangePage/FontSizeContext";

function AppContent() {
  // Font Sizer
  const { fontSize } = useFontSize();

  return (
    <div
      className="App app-wrapper"
      style={{ fontSize: `${fontSize}px`, paddingBottom: "30px" }}
    >
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/landing-page" element={<Landing_Page />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/product-page" element={<Product_Page />} />
        <Route path="/play-audio-page" element={<PlayAudioPage />} />
        <Route path="/audio-and-location" element={<Audio_and_Location />} />
        <Route path="/map-full-view" element={<Map_Full_View />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
}

export default AppContent;
