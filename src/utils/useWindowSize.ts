import React from "react";
import { useEffect, useState } from "react";
import { IWindowSize } from "../models/windowSize.model";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: isSSR ? 1670 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function (event) {
      // Your code to run since DOM is loaded and ready
      window.addEventListener("resize", changeWindowSize);
    });

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}
