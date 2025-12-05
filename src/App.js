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
import { useState } from "react";
import Product_Page from "./components/ProductPage/Product_Page";
import Settings from "./components/Settings/Settings";
import FeedbackForm from "./components/Feedback/FeedbackForm";
import {
  FontSizeProvider,
  useFontSize,
} from "./components/FontChangePage/FontSizeContext";
import AppContent from "./AppContent";

function App() {
  // const [fontSize, setFontSize] = useState(14); // Default font size in px

  // const increaseFontSize = () => {
  //   setFontSize((prev) => Math.min(prev + 2, 24)); // Cap at 24px
  // };

  return (
    <FontSizeProvider>
      <AppContent />
    </FontSizeProvider>
  );
}

export default App;
