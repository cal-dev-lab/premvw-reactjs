import React from "react";
import {
  CheckIcon,
  ChatAlt2,
  GlobeAlt,
  PhoneOutgoing,
} from "@heroicons/react/solid";

function Card() {
  return (
    <div className="h-full flex justify-center items-center px-6 mb-6">
      <div className="bg-white border border-blue-700 border-opacity-10 rounded-md shadow-xl curser-pointer">
        {/* Card Header */}
        <div className="px-6 py-12 border-b-2 border-gray-200">
          <p className="text-3xl font-semibold text-center">Silver</p>
          <div className="flex justify-center items-center">
            <div className="flex items-start px-2">
              <p className="text-4xl font-medium">£</p>
              <p className="text-7xl font-bold">19</p>
            </div>
            <p className="text-2xl text-gray-400">/ month</p>
          </div>
        </div>
        {/* Card Body */}
        <div className="p-12 md:p-24 w-full bg-gray-100">
          <ul className="space-y-3">
            <li className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <p className="text-lg text-gray-700">Technical support</p>
            </li>
            <li className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <p className="text-lg text-gray-700">Oil service</p>
            </li>
            <li className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <p className="text-lg text-gray-700">Tyre repair</p>
            </li>
          </ul>
          {/* Call to action */}
          <button className="mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap bg-white text-blue-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-60 transition-all">
            Choose this plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
