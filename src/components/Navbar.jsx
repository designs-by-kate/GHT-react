import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";
import logo from "../assets/images/GHTlogo-white.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 bg-opacity-80 p-4 flex justify-between items-center fixed top-0 w-full z-50">
      <div className="container mx-auto">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <div className="text-white">GHTourtle</div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/GHTourtle/" className={`${
                location.pathname === "/GHTourtle/" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              HOME
            </Link>
            <Link to="/about" className={`${
                location.pathname === "/about" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              About
            </Link>
            <Link to="/gallery" className={`${
                location.pathname === "/gallery" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Gallery
            </Link>
            <Link to="/projects" className={`${
                location.pathname === "/projects" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Projects
            </Link>
            <Link to="/contact" className={`${
                location.pathname === "/contact" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <div className="p-4 flex justify-between items-center">
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <button className="text-white" onClick={toggleMenu}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <AlignJustify className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className={`flex flex-col p-4 space-y-4 ${isOpen ? "block" : "hidden"}`}>
            <Link to="/GHTourtle/" className={`${
                location.pathname === "/GHTourtle/" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Home
            </Link>
            <Link to="/about" className={`${
                location.pathname === "/about" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              About
            </Link>
            <Link to="/gallery" className={`${
                location.pathname === "/gallery" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Gallery
            </Link>
            <Link to="/projects" className={`${
                location.pathname === "/projects" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Projects
            </Link>
            <Link to="/contact" className={`${
                location.pathname === "/contact" ? "bg-gray-500" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
