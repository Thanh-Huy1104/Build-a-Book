import About from "./About";
import React from "react";
import { MainScreen } from "./MainScreen";

export const Home = (props) => {
  return (
    <div className="overflow-hidden">
      <MainScreen input={props.input} setInput={props.setInput} />
      <About />
    </div>
  );
};
