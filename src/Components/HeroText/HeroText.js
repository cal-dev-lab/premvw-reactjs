import React from "react";

function HeroText() {
  return (
    <div>
      <div className="min-h-screen flex flex-col absolute justify-center items-center">
        {/*Heading*/}
        <div className="text-4xl font-bold text-black md:text-6xl sm:text-4xl">
          e-Golf
        </div>
        {/*Text*/}
        <div className="text-lg sm:text-md text-black tracking-widest">
          ELECTRIC MOTOR
        </div>
      </div>
    </div>
  );
}

export default HeroText;
