import React from "react";
import Card1 from "../Card/Card1";
import Card2 from "../Card/Card2";
import Card3 from "../Card/Card3";

export default function CardGallery() {
  return (
    <div>
      <div className="w-full h-full p-10">
        {/* Heading */}
        <div className="text-3xl md:text-4xl lg:text-6xl font-thin text-gray-700 text-center items-center justify-center mb-6">
          Premium Volkswagen Care+ Plans
        </div>
        <div className="text-md text-gray-500 text-center font-semibold items-center justify-center px-12">
          If your purchase total is over £35,000 our Gold plan is added for free
          for 1 year.
        </div>
      </div>
      {/* Three cards */}
      <div className="grid grid-cols-1 xl:grid-cols-3 w-full mt-6">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}
