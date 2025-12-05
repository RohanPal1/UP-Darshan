import React from "react";
import "../LandingPage/Landing_Page.css";
import Group17550 from "./images/Group17550.png";
import { FaArrowRight } from "react-icons/fa";
import SliderButton from "./SliderButton";

export function Landing_Page() {
  return (
    <div className="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div className="homepage-internal-container">
          <img
            className="home-background-image w-100 h-100"
            src={Group17550}
            alt=""
          />
          <div className="text-area text-center" style={{ padding: "20px" }}>
            <h2
              className="text-center text-white poppins mb-4"
              style={{ fontSize: "31px" }}
            >
              Explore Uttar Pradesh Like Never Before
            </h2>
            <p
              className="text-center text-white poppins mb-4"
              style={{ fontSize: "16px" }}
            >
              Scan QR Codes, Hear Untold Tales, And Travel In Your Language.
            </p>
            {/* <div className="button-group p-2">
              <div className="arrow-button">
                <FaArrowRight />
              </div>
              <p className="text-white poppins p-3 get-started-text mb-0">
                Get Started
              </p>
              <div className="get-started-button"></div>
            </div> */}
            <SliderButton />
          </div>
        </div>
      </div>
    </div>
  );
}
