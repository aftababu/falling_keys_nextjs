"use client";
import React from "react";
import { useHighlightKeys } from "../hooks/useHightKeys";
import { rows } from "../data";
import { useDispatch, useSelector } from "react-redux";

const Keyboard = ({ containerRef,compare ,setCompare}) => {
  const dispatch = useDispatch();
  useHighlightKeys({ containerRef,compare,setCompare});
  const { currentKey, errorKey } = useSelector((state) => state.key);

  const isCapsLockOn = currentKey.key === currentKey.key?.toUpperCase();
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#DAD3C7]">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-2 p-4 bg-[#DAD3C7] rounded-lg shadow-md">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center space-x-1">
              {row.map(({ key, size, location }, keyIndex) => {
                const keyLower = key.toLowerCase();
                const currentKeyLower = currentKey?.key?.toLowerCase();

                const isHighlighted = isCapsLockOn
                  ? currentKeyLower === keyLower ||
                    currentKey?.location === location
                  : currentKeyLower === keyLower;

                const isErrorKey =
                  errorKey?.key?.toLowerCase() === key 
                return (
                  <div
                    key={keyIndex}
                    className={`border px-2 py-1 rounded-lg text-center text-xs ${
                      size || "w-12"
                    } h-10 flex items-center justify-center shadow-sm ${
                      isErrorKey
                        ? "bg-red-500 text-white"
                        : isHighlighted
                        ? "bg-blue-500 text-white"
                        : "bg-white"
                    }`}
                  >
                    {isCapsLockOn && key.length === 1
                      ? key.toUpperCase()
                      : key}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
