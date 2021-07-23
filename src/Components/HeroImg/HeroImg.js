import React from "react";
import golf from "./golf1.jpg";

function Hero() {
  return (
    <div class="flex items-center justify-center pt-8 overflow-hidden">
      <div class="flex items-center flex-col-2 justify-between text-white gap-20">
        <div class="flex flex-col pl-12 flex-shrink w-40 z-20">
          <span class="text-4xl text-blue-200 font-bold text-blue-100 md:text-9xl">
            The
          </span>
          <span class="text-4xl font-bold text-blue-300 md:text-9xl">new</span>
          <span class="text-4xl font-bold text-blue-600 md:text-9xl hover:text-blue-400 pb-5">
            e-Golf
          </span>
          <a href="#">
            <button className="text-sm lg:w-100 md:w-36 tracking-widest px-2 py-2 hover:bg-blue-800 z-60 text-center w-36 bg-blue-700 text-white rounded">
              {/* text-xs tracking-widest py-4 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded transition duration-300 
            text-gray-400 text-xs uppercase hover:text-blue-700 py-4 px-4 hover:bg-blue-800 rounded
            
            */}
              Take the tour
            </button>
          </a>

          {/**
           * <p className="text-gray-400 text-sm">Electric never felt so good.</p>
           */}
        </div>
        <img
          src={golf}
          alt="The new e-Golf"
          className="aspect-w-16 relative justify-right aspect-h-2 object-contain md:object-scale-down mx-auto rounded-lg"
        ></img>
      </div>
    </div>
  );
}

export default Hero;
