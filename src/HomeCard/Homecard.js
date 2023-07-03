import React from "react";
import Project1 from "../Project - 1/Project-1";
import Project2 from "../Project - 2/Project-2";

const Homecard = () => {
  return (
    <>
      <div className=" text-purple-700 text-4xl p-[4rem]">Section 1</div>
      <div className="flex gap-[2rem] items-center justify-center">
        <Project1 />
        <Project2 />
      </div>
    </>
  );
};
 
export default Homecard;
