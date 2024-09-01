"use client";

import React, { useState, useEffect, useRef } from "react";
import { lesson1 } from "../data";
import { useHandleScroll } from "../hooks/useHandleScroll";

export default function FallingKeys({ pressedKey, currentKey ,containerRef}) {
  const [rows, setRows] = useState(lesson1); // Initial list of keys from lesson1

  useHandleScroll({ containerRef });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] overflow-scroll scroll-smooth"
      style={{ scrollBehavior: "smooth" }} // Ensure smooth scrolling behavior
    >
      <div className="space-y-3 w-full">
        {rows
          .slice(0) // Copy the array to avoid modifying the original state
          .reverse() // Reverse the array to show the latest at the bottom
          .map(({ key, keyCode }, rowIndex) => (
            <div key={rowIndex} className="flex flex-col">
              <div className="text-center bg-gray-300 rounded-md">
                <p
                  className={`flex justify-center items-center ${
                    keyCode === currentKey.keyCode
                      ? "bg-blue-500"
                      : "bg-white text-black"
                  } w-12 h-12 text-2xl rounded-md shadow`}
                >
                  {key}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
