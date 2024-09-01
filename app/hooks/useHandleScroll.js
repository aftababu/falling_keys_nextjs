"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useHandleScroll = ({ containerRef }) => {
  useEffect(() => {

    if (containerRef.current) {
      console.log("Scrolling to the bottom initially");
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [containerRef]);

  return null; // No need to return anything from this hook
};
