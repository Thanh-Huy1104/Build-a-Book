import React from 'react';
import bgImage from "../../assets/Main_Background.png";

export const MainScreen = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-screen h-screen">
        <img src={bgImage} alt="Background Image" className="object-cover w-full h-full" />
      </div>
      <div className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="mb-4 text-4xl font-bold">Build a book</h1>
        <button className="px-4 py-2 text-white bg-blue-500 rounded">Your Button</button>
        <p>You dream it, we write it</p>
      </div>
    </div>
  );
};