'use client'

import { useCallback, useEffect, useState } from "react";

const useScreenWidth = (breakPoint = 768) => {
  const [screenWidth, setIsSmallScreen] = useState({
    isSmallScreen: window.innerWidth < breakPoint,
    screenWidth: window.innerWidth,
  });

  const handleResize = useCallback(() => {
    setIsSmallScreen({
      isSmallScreen: window.innerWidth < breakPoint,
      screenWidth: window.innerWidth,
    });
  }, [breakPoint]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize;

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export default useScreenWidth;
