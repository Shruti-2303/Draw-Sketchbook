import React from "react";
import { IoBrushOutline } from "react-icons/io5";

const LoadingScreen = () => {
  return (
    <div className="font-extrabold font-serif italic text-blue-500 animate-pulse text-5xl flex justify-center items-center h-[100vh] gap-x-2">
      SketchSync{" "}
      <span>
        <IoBrushOutline />
      </span>
    </div>
  );
};

export default LoadingScreen;
