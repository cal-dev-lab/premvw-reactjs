import React from "react";
import "../../index.css";

function Navbar() {
  function mobileClick() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }

  return (
    <nav className="bg-white border-b-2 border-blue-700 sticky top-0 z-30">
      <div className="selection:bg-pink-500 max-w-6xl px-8 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div className="">
              <a
                href="/#"
                className="flex items-center py-5 px-2 text-gray-700"
              >
                <span className="font-bold text-blue-700 text-lg hover:text-blue-800 md:text-2xl">
                  Premium Volkswagen
                </span>
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/#"
                className="text-xs tracking-widest py-5 px-3 text-blue-700 hover:text-blue-800 transition duration-500"
              >
                The new e-Golf
              </a>
              <a
                href="/#"
                className="text-xs tracking-widest py-5 px-3 text-blue-700 hover:text-blue-800 transition duration-500"
              >
                Specifications
              </a>
              <a
                href="/#"
                className="text-xs tracking-widest py-5 px-3 text-blue-700 hover:text-blue-800 transition duration-500"
              >
                Images
              </a>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/#"
              className="text-xs tracking-widest py-4 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded transition duration-300"
            >
              CONTACT
            </a>
          </div>
          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={mobileClick} className="mobile-menu-button">
              <svg
                class="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="mobile-menu hidden md:hidden">
        <a
          href="/#"
          className="block py-6 px-24 text-sm tracking-widest bg-blue-700 text-white hover:bg-white hover:text-black transition duration-500"
        >
          The new e-Golf
        </a>
        <a
          href="/#"
          className="block py-6 px-24 text-sm tracking-widest bg-blue-700 text-white hover:bg-white hover:text-black transition duration-500"
        >
          Specifications
        </a>
        <a
          href="/#"
          className="block py-6 px-24 text-sm tracking-widest bg-blue-700 text-white hover:bg-white hover:text-black transition duration-500"
        >
          Images
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
