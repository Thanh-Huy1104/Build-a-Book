import About from "./About";
import React from "react";
import { MainScreen } from "./MainScreen";
import Footer from "./Footer";
import Demo from "./Demo";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <MainScreen />
      <Demo />
      <About />
      <Footer />
    </div>
  );
};
