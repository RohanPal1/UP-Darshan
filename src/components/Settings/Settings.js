import React, { useState } from "react";
import "./Settings.css";
import { FaArrowLeft, FaCog } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import setting_bg from "../Settings/Images/setting-bg.png";
import Navigation_Menu from "../Navigation_menu/Navigation_Menu";
import { useTranslation } from "react-i18next";

const settingsItems = [
  "About Us",
  "FAQs",
  "Privacy Policy",
  "Language Preference",
  "Privacy & Permissions",
  "Rate Us Now",
  "App Info",
];

function Settings() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  //  Language switch
  const { t } = useTranslation();
  //  Language switch
  return (
    <div className="settings-page">
      <div className="settings-header">
        <button onClick={() => navigate(-1)} className="back-button left-btn">
          <FaArrowLeft style={{ color: "white" }} />
        </button>
        <h2 className="poppins">
          <FaCog className="gear-icon" /> {t("Settings")}
        </h2>
        <img className="img-fluid bg-image" src={setting_bg} alt="" />
      </div>

      <ul className="settings-list ">
        {settingsItems.map((item, index) => (
          <li
            key={index}
            className={`settings-item ${
              index === activeIndex ? "selected" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <span>{t(item)}</span>
            <span className="right-arrow">{">"}</span>
          </li>
        ))}
      </ul>
      <div className="navigation-menu-wrapper">
        <Navigation_Menu />
      </div>
    </div>
  );
}

export default Settings;
