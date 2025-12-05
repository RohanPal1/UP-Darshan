import React, { useEffect } from "react";
import "../WelcomePage/WelcomePage.css";
import Group17549 from "./images/Group17549.png";
import Logo from "./images/Logo.png";
import { useNavigate } from "react-router-dom";

export function WelcomePage() {
  // Welcome page to rendered for only few seconds

  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing-page");
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  // Welcome page to rendered for only few seconds

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="internal-container-landing">
            <img
              className="background-image w-100 h-100"
              src={Group17549}
              alt=""
            />
            <img className="Logo-image" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
