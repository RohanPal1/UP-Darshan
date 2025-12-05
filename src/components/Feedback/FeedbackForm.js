import React, { useState } from "react";
import "./FeedbackForm.css";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import feedback_bg from "../Feedback/Images/feedback_bg.png";
import Navigation_Menu from "../Navigation_menu/Navigation_Menu";
import { useTranslation } from "react-i18next";

function FeedbackForm() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(null);

  //  Language switch
  const { t } = useTranslation();
  //  Language switch

  return (
    <div className="feedback-page">
      <div className="feedback-header">
        <img
          className="img-fluid feedback-header-bg"
          src={feedback_bg}
          alt=""
        />
        <button onClick={() => navigate(-1)} className="back-button left-btn">
          <FaArrowLeft style={{ color: "white" }} />
        </button>
        <h2>
          {" "}
          <FaEdit style={{ color: "white" }} /> {t("Feedback & Rating")}
        </h2>
      </div>

      <div className="feedback-card">
        <h4>{t("Write your feedback")}</h4>

        <form className="feedback-form">
          <div className="floating-label">
            <input type="text" required />
            <label>{t("Enter Your Name")}</label>
          </div>

          <div className="floating-label">
            <input type="email" required />
            <label>{t("E-mail id*")}</label>
          </div>

          <div className="floating-label">
            <input type="text" required />
            <label>{t("Place of Origin*")}</label>
          </div>

          <div className="floating-label">
            <textarea rows="2" required></textarea>
            <label>{t("Next destination that you’d be visiting India")}</label>
          </div>

          <div className="floating-label suggestion">
            <textarea rows="2" required></textarea>
            <label>{t("We’d love to hear your suggestions.")}</label>
          </div>

          <div className="star-rating">
            {[...Array(5)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="star"
                    color={
                      currentRating <= (hover || rating) ? "#FFA500" : "#ccc"
                    }
                    size={24}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>

          <button type="submit" className="submit-btn">
            <IoMdCheckmarkCircleOutline /> {t("SUBMIT")}
          </button>
        </form>
      </div>
      <div className="navigation-menu-wrapper">
        <Navigation_Menu />
      </div>
    </div>
  );
}

export default FeedbackForm;
