import React from "react";

export default function Specifications() {
  return (
    <div>
      <div className="flex items-center text-center justify-center mt-10 mb-6">
        <h2 className="flex text-lg uppercase tracking-widest font-bold">
          Specifications
        </h2>
      </div>

      <div className="h-fullflex items-center text-center justify-center px-12 ">
        {/* Specs */}
        <div className="flex flex-items grid md:grid-cols-3 w-full">
          <div className="block py-4">
            <div className="text-2xl font-light mb-2">0-60 mph (0-100 kmh)</div>
            <p className="font-bold text-4xl text-gray-700">4.3 seconds</p>
          </div>
          <div className="block py-4">
            <div className="text-2xl font-light mb-2">Full charge</div>
            <p className="font-bold text-4xl text-gray-700">1298.6 miles</p>
          </div>
          <div className="block py-4">
            <div className="text-2xl font-light mb-2">Engine</div>
            <p className="font-bold text-4xl text-gray-700">Electric motor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
