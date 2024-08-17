import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-14 fixed top-0 left-0 z-50">
      <div className="bg-tertiary flex justify-between items-center px-14 py-3">
        <img className="h-14 mx-auto sm:mx-0" src="./osis.png" alt="logo" />
        <div className="sm:flex gap-5 text-quaternary hidden"></div>
        <Link
          to="/login"
          className="border border-quaternary text-quaternary rounded-xl sm:w-32 text-xs sm:text-base p-2 hidden sm:block px-10"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
