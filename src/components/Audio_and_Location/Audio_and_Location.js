import React, { useState, useRef, useEffect } from "react";
import "../Audio_and_Location/Audio_and_Location.css";
import { FaArrowLeft } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";
import Navigation_Menu from "../Navigation_menu/Navigation_Menu";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

const Audio_and_Location = () => {
  const navigate = useNavigate();
  //  Language switch
  const { t } = useTranslation();
  //  Language switch
  return (
    <div className="app-container">
      <Header />
      <div className="container map-main-content-audio-location mt-3 heritage-card">
        {/* Header Image */}
        <div className="map-header-image mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.727090002112!2d78.0419380753342!3d27.175144349652817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397471d99b3c26b5%3A0x420ddcd9c6e6f86c!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1719735360000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <button onClick={() => navigate(-1)} className="nav-btn left-btn">
            <FaArrowLeft style={{ color: "white" }} />
          </button>
          <button className="nav-btn right-btn">
            <a href="/map-full-view">
              <BsFullscreen style={{ color: "white" }} />
            </a>
          </button>
          <div className="title-overlay text-start poppins">
            {t("Welcome to Taj Mahal")}
          </div>
        </div>

        <div className="bottom-section-audio-and-location">
          {/* Audio Player */}
          <AudioPlayer />
          {/* Navigation Menu Bottom  */}
          <Navigation_Menu />
        </div>
      </div>
    </div>
  );
};

export default Audio_and_Location;
