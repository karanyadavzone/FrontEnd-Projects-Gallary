import React from "react";
import "./Homecard.css";
import Project1 from "../Project - 1/Project-1";
import Project2 from "../Project - 2/Project-2";

const Homecard = () => {
  return (
    <div className=" text-purple-700 p-[4rem] bg-gradient-to-r  from-teal-950  to-zinc-900 h-full w-full">
      <div className="text-[#f4c622] text-2xl">All Projects</div>
      <div className="flex w-full h-full flex-col justify-center">
        <div className="flex items-start mb-[2rem] text-3xl text-[#f4c660]">
          Small Projects
        </div>
        <div className="">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Project1 />
          </div>
        </div>
      </div>
      <div>Hello</div>
    </div>
  );
};

export default Homecard;
