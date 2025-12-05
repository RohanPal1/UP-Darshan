import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import "./SliderButton.css";

const SliderButton = () => {
  const sliderRef = useRef(null);
  const buttonRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);
  const [buttonLeft, setButtonLeft] = useState(0);
  const [completed, setCompleted] = useState(false);

  const navigate = useNavigate();

  const handleStart = () => {
    if (completed) return;
    setIsSliding(true);
  };

  const handleMove = (e) => {
    if (!isSliding || completed) return;

    const slider = sliderRef.current;
    const button = buttonRef.current;
    const sliderRect = slider.getBoundingClientRect();
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;

    let newLeft = clientX - sliderRect.left - button.offsetWidth / 2;
    newLeft = Math.max(
      0,
      Math.min(newLeft, sliderRect.width - button.offsetWidth)
    );
    setButtonLeft(newLeft);

    // When arrow reaches near right end
    if (newLeft >= sliderRect.width - button.offsetWidth - 120) {
      setCompleted(true);
      setIsSliding(false);
      setTimeout(() => {
        navigate("/homepage"); // Change to your route
      }, 300); // slight delay for animation
    }
  };

  const handleEnd = () => {
    if (!completed) {
      setIsSliding(false);
      setButtonLeft(0); // Reset
    }
  };

  return (
    <div
      ref={sliderRef}
      className="slider-container mb-2"
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <div className="track">
        <div className="arrow-track">
          <MdDoubleArrow />
          <MdDoubleArrow />
          <MdDoubleArrow />
        </div>
        <div className={`get-started-text ${completed ? "active" : ""}`}>
          {completed ? "✔ Get Started" : "Get Started"}
        </div>
        <div
          ref={buttonRef}
          className={`slider-button ${completed ? "completed" : ""}`}
          style={{ left: `${buttonLeft}px` }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default SliderButton;
