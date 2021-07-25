import React from "react";

function Footer() {
  return (
    // Body of footer
    <div className="flex items-center border-t-2 border-blue-700 bg-gray-100">
      <div className="flex-1 max-w-6xl mx-auto p-10 items-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 px-2 md:gap-8">
          {/* Socials list */}
          <li className="items-center rounded-lg md:h-full h-full px-10">
            <div className="pt-9 text-2xl font-bold  mb-2">Socials</div>
            <a href="/#">
              <p className="text-justify hover:text-blue-700 items-center text-gray-700 text-sm mb-2">
                Facebook{" "}
              </p>
            </a>
            <a href="/#">
              <p className="text-justify hover:text-blue-700 items-center text-gray-700 text-sm mb-2">
                Twitter{" "}
              </p>
            </a>
            <a href="/#">
              <p className="text-justify hover:text-blue-700 items-center text-gray-700 text-sm mb-2">
                Instagram{" "}
              </p>
            </a>
          </li>
          {/* FAQ List */}
          <li className="items-center rounded-lg md:h-full h-full px-10">
            <div className="pt-9 text-2xl font-bold  mb-2">FAQ</div>
            <a href="/#">
              <p className="text-justify hover:text-blue-700 items-center text-gray-700 text-sm mb-2">
                Frequently asked questions{" "}
              </p>
            </a>
            <a href="/#">
              <p className="text-justify hover:text-blue-700 items-center text-gray-700 text-sm mb-2">
                Where is my car?{" "}
              </p>
            </a>
            <a href="/#">
              <p className="text-justify hover:text-blue-700 items-center text-gray-700 text-sm mb-2">
                Can I return a car after driving it?{" "}
              </p>
            </a>
          </li>
          {/* Find us list */}
          <li className="items-center rounded-lg md:h-full h-full px-10">
            <div className="pt-9 text-2xl font-bold  mb-2">Find us</div>
            <p className="text-justify hover:text-blue-700 items-center text-gray-700 text-sm mb-2">
              Lawley Middleway, Birmingham B4 7XT
            </p>
            <p className="text-justify items-center text-gray-500 font-bold text-sm mb-2">
              0121 678 782{" "}
            </p>
            <p className="text-justify items-center font-bold text-gray-500 text-sm mb-2">
              sales@premiumvw.com{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
