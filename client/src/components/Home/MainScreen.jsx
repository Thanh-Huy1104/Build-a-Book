import React from 'react';
import {useState} from 'react';
import bgImage from "../../assets/Main_Background.png";
import kidImage from "../../assets/Main_Kids.png"
import "./MainScreen.css"

export const MainScreen = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  }
  const handleInputBlur = () => {
    setIsEditing(false);
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img src={bgImage} alt="Background Image" className="object-cover w-full h-full" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">    
        <svg viewBox="-70 160 700 360">
          <path 
            id="curve" 
            fill="transparent" 
            d="M 110 300 q 150 -200 340 0"/>
            <text width="1500" className="curved-text">
              <textPath alignmentBaseline="top" startOffset="0%"xlinkHref="#curve" style={{fontSize: '50px', fontFamily: 'Willkids'}}>
                Build-a-Book
              </textPath>
            </text>
        </svg>
        <h1 className="MainScreen--title2">You Dream It, We Write It</h1>


        <div className="Button--div">
        {isEditing ? (
          <input className="MainScreen--input" type="text" onBlur={handleInputBlur}/>
          ) : (
          <button className="MainScreen--button" onClick={handleClick}>Create your Story</button>
          )} 
        </div>


      </div>
      <div className="absolute mb-4 text-white transform -translate-x-1/2 bottom-2 left-1/2">
        <img src={kidImage} alt="kid image" className="h-[300px] w-[445px] object-cover" />
      </div>
    </div>
  );
};
