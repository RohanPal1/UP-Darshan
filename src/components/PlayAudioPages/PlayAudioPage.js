import React, { useState, useRef, useEffect } from "react";
import "../PlayAudioPages/PlayAudioPage.css";
import { FaArrowLeft } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import TajMahal1 from "../PlayAudioPages/Images/TajMahal1.jpg";
import Navigation_Menu from "../Navigation_menu/Navigation_Menu";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

const PlayAudioPage = () => {
  const navigate = useNavigate();

  //  Language switch
  const { t } = useTranslation();
  //  Language switch
  return (
    <div className="app-container">
      <Header />
      <div className="container main-content-container mt-3 heritage-card">
        {/* Header Image */}
        <div className="header-image">
          <img src={TajMahal1} alt="Taj Mahal" />
          <button onClick={() => navigate(-1)} className="nav-btn left-btn">
            <FaArrowLeft style={{ color: "white" }} />
          </button>
          <button className="nav-btn right-btn">
            <a href="/audio-and-location">
              <IoLocationOutline style={{ color: "white" }} />
            </a>
          </button>
          <div className="title-overlay text-start poppins">
            {t("Welcome to Taj Mahal")}
          </div>
        </div>

        {/* Description */}
        <div className="description">
          <p
            className="poppins text-start mb-0"
            style={{ color: "#334151", fontWeight: "400" }}
          >
            {t("tajMahaldescription")}
          </p>
        </div>
        <div className="bottom-section-play-audio-page">
          {/* Audio Player */}
          <AudioPlayer />
          {/* Navigation Menu Bottom  */}
          <Navigation_Menu />
        </div>
      </div>
    </div>
  );
};

export default PlayAudioPage;
