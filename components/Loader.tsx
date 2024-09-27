"use client";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Loader() {
  return (
    <div className="w-full py-52 flex justify-center items-center">
      <ClimbingBoxLoader size={25} />
    </div>
  );
}

export default Loader;
