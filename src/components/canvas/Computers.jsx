import { Suspense, useEffect, useState, renderer } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useContextProvider } from "../../useContext/UseContext";

const ComputerCanvas = ({ isMobile, setIsMobile, rotation, checkMobile }) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChanges = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChanges);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChanges);
    };
  }, []);

  return (
    <>
      <div className="absolute">
        <img
          src="https://t3.ftcdn.net/jpg/05/69/49/36/360_F_569493678_dbRCvKdlv2LTjYyPnRfGZWoJBqf98eDW.jpg"
          className={
            checkMobile && isMobile
              ? "w-[380px] mt-[400px] z-[1]"
              : ` w-[700px] mt-[450px] ml-[40px]
        md:w-[800px] md:mt-[400px] md:ml-[80px]
        lg:w-[1100px] lg:mt-[350px] lg:ml-[100px]
        xl:w-[1200px] xl:mt-[350px]
        2xl:w-[1300px] 2xl:mt-[350px] 2xl:ml-[700px]`
          }
        />
      </div>
    </>
  );
};

export default ComputerCanvas;
