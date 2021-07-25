import React from "react";
import Images from "../../Images/index.js";

function ImgGrid() {
  return (
    <div className="flex items-center min-h-screen">
      <div className="flex-1 max-w-6xl mx-auto p-10 items-center">
        {/* Text */}
        <div className="md:text-center px-2 mb-6 items-center font-bold text-gray-900 text-4xl py-4 md:py-8 md:text-6xl">
          <div>Take a look</div>
        </div>
        {/* Images */}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-2">
          <li className="md:text-center items-center rounded-lg md:h-full h-full">
            <img src={Images.gtd2} alt="gtd2" className="image" />
          </li>
          <li className="md:text-center items-center rounded-lg md:h-full h-full">
            <img src={Images.gtd3} alt="gtd3" />
          </li>
          <li className="md:text-center items-center rounded-lg md:h-full h-full">
            <img src={Images.gtd4} alt="gtd4" />
          </li>
          <li className="md:text-center items-center rounded-lg md:h-full h-full">
            <img src={Images.gtd5} alt="gtd5" />
          </li>
          <li className="md:text-center items-center rounded-lg md:h-full h-full">
            <img src={Images.gtd6} alt="gtd6" />
          </li>
          <li className="md:text-center items-center rounded-lg md:h-full h-full">
            <img src={Images.gtd7} alt="gtd7" />
          </li>
          <li className="md:text-center items-center rounded-lg md:h-full h-full">
            <img src={Images.gtd8} alt="gtd8" />
          </li>
          <li className="md:text-center items-center rounded-lg md:h-full h-full">
            <img src={Images.gtd9} alt="gtd9" />
          </li>
          <li className="md:text-center items-center rounded-lg md:h-full h-full">
            <img src={Images.gtd10} alt="gtd10" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ImgGrid;
