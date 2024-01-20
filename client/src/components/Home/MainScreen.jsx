import React from 'react';
import bgImage from "../../assets/Main_Background.png";
import kidImage from "../../assets/Main_Kids.png"
import "./MainScreen.css"

export const MainScreen = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img src={bgImage} alt="Background Image" className="object-cover w-full h-full" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">    
        <svg viewBox="0 0 500 500">
          <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500" className="curved-text">
              <textPath alignmentBaseline="top" xlinkHref="#curve" style={{fontSize: '73px', fontFamily: 'Paytone One'}}>
                Build a Book
              </textPath>
            </text>
        </svg>
        <h1 className="mb-4 text-4xl font-bold">Build a book</h1>
        <button className="px-4 py-2 text-white bg-blue-500 rounded">Your Button</button>
        <p>You dream it, we write it</p>
      </div>
      <div className="absolute mb-4 text-white transform -translate-x-1/2 bottom-2 left-1/2">
        <img src={kidImage} alt="kid image" className="h-[230px] w-[340px] object-cover" />
      </div>
    </div>
  );
};
