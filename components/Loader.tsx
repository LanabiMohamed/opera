"use client";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Loader() {
  return (
    <div className="absolute top-0 left-0 w-full h-svh -z-10 flex justify-center items-center">
      <ClimbingBoxLoader size={30} />
    </div>
  );
}

export default Loader;
