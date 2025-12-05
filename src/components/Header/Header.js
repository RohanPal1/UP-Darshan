import React, { useEffect, useRef, useState } from "react";
import { IoIosContrast } from "react-icons/io";
import { FaLanguage } from "react-icons/fa6";
import logo2 from "../Header/Images/logo2.png";
import "../Header/Header.css";
import { useFontSize } from "../FontChangePage/FontSizeContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Header() {
  const { increaseFont, decreaseFont, resetFont } = useFontSize();
  const [showFontControls, setShowFontControls] = useState(false);

  // Color Inversion
  const [inverted, setInverted] = useState(false);

  const toggleInvert = () => {
    setInverted(!inverted);
  };
  // Color Inversion

  // This code is for Language Switching
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const languageRef = useRef(null);

  const toggleFontControls = () => {
    setShowFontControls((prev) => !prev);
  };

  const toggleLanguageOptions = () => {
    setShowLanguageOptions((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguageOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // This code is for Language Switching

  return (
    <div className="header-top">
      <div className="logo-area">
        <a href="/homepage">
          <img src={logo2} alt="UP Darshan Logo" className="logo" />
        </a>
      </div>

      <div className="action-buttons">
        <div className="font-controls-wrapper">
          <button className="circle-btn" onClick={toggleFontControls}>
            A
          </button>
          {showFontControls && (
            <div className="font-dropdown">
              <button className="circle-btn small" onClick={increaseFont}>
                A+
              </button>
              <button className="circle-btn small" onClick={decreaseFont}>
                A-
              </button>
              <button className="circle-btn small" onClick={resetFont}>
                ⟳
              </button>
            </div>
          )}
        </div>

        <button
          className={`circle-btn ${inverted ? "invert" : ""}`}
          onClick={toggleInvert}
        >
          <IoIosContrast style={{ color: "white" }} />
        </button>
        {/* Language Dropdown */}
        <div className="language-controls-wrapper" ref={languageRef}>
          <button className="circle-btn" onClick={toggleLanguageOptions}>
            <FaLanguage style={{ color: "white" }} />
          </button>
          {showLanguageOptions && (
            <div className="lang-dropdown">
              <button className="lang-btn" onClick={() => changeLanguage("en")}>
                English
              </button>
              <button className="lang-btn" onClick={() => changeLanguage("hi")}>
                Hindi
              </button>
              <button className="lang-btn" onClick={() => changeLanguage("es")}>
                Spanish
              </button>
              <button className="lang-btn" onClick={() => changeLanguage("de")}>
                German
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
