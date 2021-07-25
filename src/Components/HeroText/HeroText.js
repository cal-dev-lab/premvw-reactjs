import React from "react";

function HeroText() {
  return (
    <div className="flex items-center">
      <div className="flex-1 max-w-6xl mx-auto p-10 items-center">
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 px-2 md:gap-8">
          <li className="md:text-center items-center rounded-lg md:h-full h-full mb-6 px-10">
            {/* Prices */}
            <div className="pt-9 text-2xl  md:text-lg font-bold  mb-2">
              Affordable
            </div>
            <p className="text-justify items-center text-gray-700 text-sm mb-2">
              Depending on what spec e-Golf you decide to choose, rest assured
              our prices are the best on the market.{" "}
            </p>
            <p className="text-justify items-center font-bold text-gray-700 text-sm mb-2">
              Our prices range from:{" "}
            </p>
            <p className="text-justify items-center font-bold text-blue-700 text-md md:mb-0">
              £22,000 to £56,000{" "}
            </p>
          </li>
          {/* Practical */}
          <li className="md:text-center items-center rounded-lg md:h-full h-full mb-6 px-10">
            <div className="pt-9 text-2xl  md:text-lg font-bold  mb-2">
              Practical
            </div>
            <p className="text-justify items-center text-gray-700 text-sm mb-2">
              Saving the environment never felt so good. Now experience faster
              charge times around the world at our charging stations.{" "}
            </p>
            <p className="text-justify items-center font-bold text-gray-700 text-sm mb-2">
              Full charge time:{" "}
            </p>
            <p className="text-justify items-center font-bold text-blue-700 text-md md:mb-0">
              01h : 32m : 21s{" "}
            </p>
          </li>
          {/* Reliable */}
          <li className="md:text-center items-center rounded-lg md:h-full h-full mb-6 px-10">
            <div className="pt-9 text-2xl  md:text-lg font-bold  mb-2">
              Reliable
            </div>
            <p className="text-justify items-center text-gray-700 text-sm mb-2">
              All e-Golf's now come factory fitted with a DSG gearbox. Peace of
              mind, lifetime warranty on any e-Golf clutch and gearbox.{" "}
            </p>
            <p className="text-justify items-center font-bold text-gray-700 text-sm mb-2">
              Happy customers:{" "}
            </p>
            <p className="text-justify items-center font-bold text-blue-700 text-md md:mb-0">
              2,349,926{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroText;
