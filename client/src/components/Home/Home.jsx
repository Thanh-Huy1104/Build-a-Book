import About from "./About";
import React from "react";
import { MainScreen } from "./MainScreen";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <MainScreen />
      <About />
      <Footer />
    </div>
  );
};
