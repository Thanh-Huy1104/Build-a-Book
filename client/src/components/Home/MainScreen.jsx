import React from "react";
import { useState } from "react";
import bgImage from "../../assets/Main_Background.png";
import emptyBg from "../../assets/empty_background.png";
import kidImage from "../../assets/Main_Kids.png";
import "./MainScreen.css";
import { useNavigate } from "react-router-dom";
import { CoOlBaCkGrOuNd } from "./CoOlBaCkGrOuNd";

export const MainScreen = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/book/${input}`);
    }
  };

  return (
    <div className="main_screen">
      <img src={emptyBg} alt="Background Image" className="img_bg" />
      <CoOlBaCkGrOuNd />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <svg viewBox="-70 160 700 360">
          <path id="curve" fill="transparent" d="M 110 300 q 150 -200 340 0" />
          <text width="1500" className="curved-text">
            <textPath
              alignmentBaseline="top"
              startOffset="0%"
              xlinkHref="#curve"
              style={{ fontSize: "50px", fontFamily: "Willkids" }}
            >
              Build-a-Book
            </textPath>
          </text>
        </svg>
        <h1 className="MainScreen--title2">You Dream It, We Write It</h1>

        <input
          onBlur={handleClick}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05) translateY(-5px)";
          }}
          onMouseOut={(e) => {
            isClicked ? (e.target.style.transform = "scale(1)") : 0;
          }}
          className="MainScreen--input"
          type="text"
          style={{
            transform: `scale(${isClicked ? 1 : 0})`,
            opacity: isClicked ? 1 : 0,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            pointerEvents: isClicked ? "auto" : "none",
          }}
        />
        <button
          onClick={handleClick}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05) translateY(-5px)";
          }}
          onMouseOut={(e) => {
            isClicked ? 0 : (e.target.style.transform = "scale(1)");
          }}
          className="MainScreen--button"
          style={{
            transform: `scale(${isClicked ? 0 : 1})`,
            opacity: isClicked ? 0 : 1,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          Create your Story
        </button>
      </div>
      <div className="absolute mb-4 text-white transform -translate-x-1/2 bottom-2 left-1/2">
        <img
          src={kidImage}
          alt="kid image"
          className="h-[300px] w-[445px] object-cover"
        />
      </div>
    </div>
  );
};
