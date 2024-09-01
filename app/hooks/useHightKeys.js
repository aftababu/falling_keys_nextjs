"use client";
import React, { useState, useEffect } from "react";
import { lesson1 as keysSequence } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentKey,
  setErrorKey,
  setPressedKey,
} from "@/lib/features/keySlice";
import { useRouter } from "next/navigation";

export const useHighlightKeys = ({ containerRef, compare, setCompare }) => {
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const dispatch = useDispatch();
  const currentKey = useSelector((state) => state.key.currentKey);
const router = useRouter()
  useEffect(() => {
    const { key, location } = keysSequence[currentKeyIndex];
    dispatch(setCurrentKey({ key, location }));

    const handleKeyPress = (event) => {
      const { key: pressedKey, location: pressedLocation } = event;

      dispatch(setPressedKey({ key: pressedKey, location: pressedLocation }));

      const isCorrectKey = currentKey.key === pressedKey;

      if (isCorrectKey) {
        dispatch(setErrorKey(null));
        console.log(compare);

        setCompare([...compare, currentKey.key]);
        setCurrentKeyIndex((prevIndex) => {
          if (containerRef.current) {
            containerRef.current.scrollTop -= 62;
          }
          return prevIndex === keysSequence.length - 1 ? 0 : prevIndex + 1;
        });
      } else {
        dispatch(setErrorKey({ key: pressedKey, location: pressedLocation }));
      }
      
    };
    if (compare.length === keysSequence.length) {
      setCompare([]);
      router.push("/result")
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentKeyIndex, dispatch, currentKey.key]);

  return; // No need to return anything if not used
};
