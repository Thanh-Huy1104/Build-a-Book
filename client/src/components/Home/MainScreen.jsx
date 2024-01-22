import React, { useRef } from "react";
import { useState } from "react";
import bgImage from "../../assets/Main_Background.png";
import emptyBg from "../../assets/empty_background.png";
import kidImage from "../../assets/Main_Kids.png";
import "./MainScreen.css";
import { useNavigate } from "react-router-dom";
import { CoOlBaCkGrOuNd } from "./CoOlBaCkGrOuNd";
import { useEffect } from "react";
let timeoutId = null;

export const MainScreen = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [isAppearing, setIsAppearing] = useState(false);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleContainerClick = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsClicked(false);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setIsAppearing(false);
    handleDelayedAppearance();
  };

  const handleClickStory = () => {
    navigate(`/book/${input}`);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/book/${input}`);
    }
  };

  const handleDelayedAppearance = () => {
    clearTimeout(timeoutId);
    console.log("I have started");
    timeoutId = setTimeout(() => {
      console.log("I have finished");
      setIsAppearing(true);
    }, 2000);
  };

  return (
    <div className="main_screen">
      <img src={emptyBg} alt="Background Image" className="img_bg" />
      <CoOlBaCkGrOuNd />
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white"
        onClick={handleContainerClick}
      >
        <svg viewBox="-70 160 700 360">
          <path id="curve" fill="transparent" d="M 110 300 q 150 -200 340 0" />
          <text width="1500" className="curved-text">
            <textPath
              alignmentBaseline="top"
              xlinkHref="#curve"
              style={{
                fontSize: "50px",
                fontFamily: "Willkids",
                startOffset: "-100%",
              }}
            >
              Build-a-Book
              <animate
                attributeName="startOffset"
                from="-100%"
                to="0%"
                begin="0s"
                dur="0.65s"
              />
            </textPath>
          </text>
        </svg>
        <h1 className="MainScreen--title2">
          <span>Y</span>
          <span>o</span>
          <span>u</span>
          <span> </span>
          <span>D</span>
          <span>r</span>
          <span>e</span>
          <span>a</span>
          <span>m</span>
          <span> </span>
          <span>I</span>
          <span>t</span>
          <span>,</span>
          <span> </span>
          <span>W</span>
          <span>e</span>
          <span> </span>
          <span>W</span>
          <span>r</span>
          <span>i</span>
          <span>t</span>
          <span>e</span>
          <span> </span>
          <span>I</span>
          <span>t</span>
        </h1>
        <input
          ref={inputRef}
          onBlur={handleClick}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
          onMouseOver={(e) => {
            setIsAppearing(true);
            e.target.style.transform = "scale(1.05) translateY(-5px)";
          }}
          onMouseOut={(e) => {
            setIsAppearing(false);
            //e.target.style.transform = "scale(1) translateY(0px)";
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
          onMouseOver={(e) => {
            setIsAppearing(true);
            e.target.style.opacity = "1";
            e.target.style.transform = "scale(1)";
          }}
          onMouseOut={(e) => {
            setIsAppearing(false);
            e.target.style.opacity = "0";
            e.target.style.transform = "scale(0)";
          }}
          onClick={handleClickStory}
          style={{
            opacity: isAppearing ? 1 : 0,
            transform: `scale(${isAppearing ? 1 : 0})`,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
          }}
          className="MainScreen--gtbutton"
        >
          &gt;
        </button>

        <button
          onClick={handleClick}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05) translateY(-5px)";
          }}
          onMouseOut={(e) => {
            // e.target.style.transform = "scale(1)";
            isClicked ? 0 : (e.target.style.transform = "scale(1)");
          }}
          className="MainScreen--button"
          style={{
            transform: `scale(${isClicked ? 0 : 1})`,
            opacity: isClicked ? 0 : 1,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            pointerEvents: isClicked ? "none" : "auto",
          }}
          ref={buttonRef}
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
