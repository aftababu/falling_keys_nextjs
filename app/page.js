"use client";
import React, { useRef, useState } from "react";
import Keyboard from "./components/keyboard";
import FallingKeys from "./components/fallingKeys";
import { useSelector } from "react-redux";
import HomePage from "./pages/Home";


const Home = () => {
  // const [compare, setCompare] = useState([]);
  // const { pressedKey, currentKey } = useSelector((state) => state.key);
  // const containerRef = useRef(null);
  return (
    <>
      {/* <div className="w-[800px] mx-auto  relative h-screen">
        <FallingKeys containerRef={containerRef} pressedKey={pressedKey} currentKey={currentKey} />
        <Keyboard containerRef={containerRef} compare={compare} setCompare={setCompare} />
      </div> */}
      <HomePage/>
    </>
  );
};

export default Home;
