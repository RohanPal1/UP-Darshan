import React from "react";
import "../Map_Full_View/Map_Full_View.css";
import { FaArrowLeft } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import Navigation_Menu from "../Navigation_menu/Navigation_Menu";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Map_Full_View() {
  const navigate = useNavigate();
  //  Language switch
  const { t } = useTranslation();
  //  Language switch
  return (
    <div className="map-layout-wrapper">
      <Header />
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.727090002112!2d78.0419380753342!3d27.175144349652817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397471d99b3c26b5%3A0x420ddcd9c6e6f86c!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1719735360000!5m2!1sen!2sin"
          title="Taj Mahal"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button onClick={() => navigate(-1)} className="nav-btn left-btn">
          <FaArrowLeft style={{ color: "white" }} />
        </button>
        <button className="nav-btn right-btn">
          <a href="/play-audio-page">
            <TiDocumentText style={{ color: "white" }} />
          </a>
        </button>
        <div className="map-caption poppins">{t("Taj Mahal")}</div>
      </div>
      {/* Navigation Menu at Bottom */}
      <div className="map-nav-wrapper">
        <Navigation_Menu />
      </div>
    </div>
  );
}

export default Map_Full_View;
