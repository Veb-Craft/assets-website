import React, { useState } from "react";
import { basicNavbarData } from "../data";

const BasicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`sticky top-0 mx-2 my-2 flex items-center justify-between bg-gray-300 px-4 md:rounded-full ${
        isOpen ? "rounded-t-3xl" : "rounded-3xl"
      }`}
    >
      <a href="/">
        <img
          src={basicNavbarData.LOGO}
          alt="VebCraft Logo"
          className="my-2 size-16 md:size-20"
        />
      </a>

      <div>
        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="my-2 p-3 md:hidden">
          <svg
            className="size-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* NavBar */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 right-0 top-16 z-10 w-full bg-inherit max-md:rounded-b-3xl max-md:border-t-2 max-md:border-t-white md:static md:flex md:space-x-4`}
        >
          {basicNavbarData.LINKS.map((option) => (
            <a
              key={option.name}
              href={option.link}
              className="block px-4 py-2 text-xl font-semibold text-gray-700 ease-in hover:scale-105 hover:text-black"
            >
              {option.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BasicNavbar;
