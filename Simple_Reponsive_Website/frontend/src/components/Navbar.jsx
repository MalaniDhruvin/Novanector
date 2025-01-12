import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-100 h-18 flex justify-between bg-white border-b-[0px] items-center overflow-hidden pl-4 py-2 fixed top-0 left-0 right-0 z-10">
      {/* Logo Section */}
      <div className="text-black">
        <NavLink to="/" className="text-black decoration-transparent">
          <img className="w-24 max-md:w-16" src="logo.png" alt="Logo" />
        </NavLink>
      </div>

      {/* Navigation Section */}
      <div className="w-2/5 max-lg:w-1/2 h-max">
        {/* Desktop Navigation */}
        <ul
          className={`flex items-center justify-evenly max-md:${
            menuOpen ? "flex" : "hidden"
          } max-md:flex-col md:flex md:justify-evenly  md:bg-transparent md:flex-row md:static absolute top-0 left-0 w-full md:w-auto max-md:fixed max-md:h-screen max-md:bg-[#bc3839] max-md:transition-transform max-md:duration-300 ${
            menuOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"
          }`}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "black" : "grey",
              textDecoration: "none",
              borderBottom: isActive ? "1px solid white" : "none",
            })}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            <li className="py-4 md:py-0 max-md:text-blue-200">Home</li>
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "black" : "grey",
              textDecoration: "none",
              borderBottom: isActive ? "1px solid white" : "none",
            })}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            <li className="py-4 md:py-0 max-md:text-blue-200">About</li>
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "black" : "grey",
              textDecoration: "none",
              borderBottom: isActive ? "1px solid white" : "none",
            })}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            <li className="py-4 md:py-0 max-md:text-blue-200">Contact</li>
          </NavLink>
          <li className="border-none px-3 py-2 text-white bg-[#bc3839] tracking-tighter md:py-0">
            1200 345 123
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <p className="md:hidden float-right">
          <IoMenu
            className="text-4xl mr-6 cursor-pointer"
            onClick={toggleMenu}
          />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
