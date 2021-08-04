import React from "react";
import gtd from "../../Images/gtd.jpg";

function HeroImg() {
  return (
    <div className="w-full relative">
      <div className="w-full h-full top-0 left-0 absolute"></div>
      <div className="w-full h-full flex flex-col-reverse absolute top-0 left-0 justify-center mx-auto md:pl-28 items-center md:items-start">
        <a href="/#">
          <button className="animate-bounce text-xs md:text-md py-2 px-3 rounded-md font-bold tracking-widest text-white uppercase mb-0 hover:text-blue-800 hover:bg-white transition duration-300">
            Take the tour
          </button>
        </a>
        <div className="text-7xl md:text-9xl font-thin text-white">e-Golf</div>
        <div className="text-xs md:text-md text-gray-300">2021</div>
      </div>
      <img src={gtd} alt="The new e-Golf" className="w-full h-full" />
    </div>
  );
}

export default HeroImg;
