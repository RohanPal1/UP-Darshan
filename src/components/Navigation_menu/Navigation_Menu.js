import React, { useState } from "react";
import { MdQrCodeScanner } from "react-icons/md";
import "../Navigation_menu/Navigation_Menu.css";
import QR_Scanner from "./QR_Scanner";
import { useLocation, useNavigate } from "react-router-dom";

function Navigation_Menu() {
  // QR Code Scanner Code
  const [showScanner, setShowScanner] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScannerClick = () => {
    setShowScanner(true);
  };

  const handleCloseScanner = () => {
    setShowScanner(false);
  };

  // QR Code Scanner Code

  const isActive = (path) => location.pathname === path;

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="container m-0">
      {/* Navigation Menu Bottom */}
      <div className="bottom-nav">
        <button
          className={`nav-btn-icon ${isActive("/homepage") ? "active" : ""}`}
          onClick={() => navigateTo("/homepage")}
        >
          <img src="https://img.icons8.com/ios-filled/24/home.png" alt="Home" />
        </button>

        <button
          className={`nav-btn-icon ${
            isActive("/map-full-view") ? "active" : ""
          }`}
          onClick={() => navigateTo("/map-full-view")}
        >
          <img src="https://img.icons8.com/ios/24/map.png" alt="Map" />
        </button>

        <button className="nav-scan-btn" onClick={handleScannerClick}>
          <MdQrCodeScanner />
        </button>

        <button
          className={`nav-btn-icon ${isActive("/settings") ? "active" : ""}`}
          onClick={() => navigateTo("/settings")}
        >
          <img
            src="https://img.icons8.com/ios/24/settings.png"
            alt="Settings"
          />
        </button>

        <button
          className={`nav-btn-icon ${isActive("/feedback") ? "active" : ""}`}
          onClick={() => navigateTo("/feedback")}
        >
          <img
            src="https://img.icons8.com/ios/24/facebook-like.png"
            alt="Like"
          />
        </button>
      </div>

      {/* QR Scanner Modal */}
      {showScanner && (
        <div className="modal-overlay">
          <QR_Scanner onClose={handleCloseScanner} />
        </div>
      )}
    </div>
  );
}

export default Navigation_Menu;
