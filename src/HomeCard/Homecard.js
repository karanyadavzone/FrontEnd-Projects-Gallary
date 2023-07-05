import React from "react";
import "./Homecard.css";
import Project1 from "../Project - 1/Project-1";
import Project2 from "../Project - 2/Project-2";

const Homecard = () => {
  const form = document.querySelector("form");
  const sliders = document.querySelectorAll('input[type="range"]');

  const rangeToPercent = (slider) => {
    const max = slider.getAttribute("max") || 10;
    const percent = (slider.value / max) * 100;

    return `${parseInt(percent)}%`;
  };

  sliders.forEach((slider) => {
    slider.style.setProperty("--track-fill", rangeToPercent(slider));

    slider.addEventListener("input", (e) => {
      e.target.style.setProperty("--track-fill", rangeToPercent(e.target));
    });
  });

  form?.addEventListener("input", (e) => {
    const formData = Object.fromEntries(new FormData(form));
    console.table(formData);
  });

  return (
    <>
      <div className=" text-purple-700 text-4xl p-[4rem] 2xl:max-w-[none] bg-[black] h-screen">
        Section 1
        <div className="flex gap-[2rem] items-center justify-center">
          <Project1 />
          <Project2 />
        </div>
      </div>
    </>
  );
};

export default Homecard;
 