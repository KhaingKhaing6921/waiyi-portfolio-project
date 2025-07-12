import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 border-b border-gray-300 px-6 md:px-20 py-3 z-50">
      <div className="flex justify-end items-center">
        {/* Logo or Brand */}
        {/* <div className="text-xl font-bold text-gray-800">MyPortfolio</div> */}

        {/* Navigation Links */}
        <div className="space-x-10 md:space-x-10 text-gray-800 font-semibold text-sm md:text-base">
          <a href="#home" className="md:hover:text-pink-500 hover:text-pink-500 transition">Home</a>
          <a href="#about" className="md:hover:text-pink-500 hover:text-pink-500 transition">About</a>
          <a href="#portfolio" className="md:hover:text-pink-500 hover:text-pink-500 transition">Portfolios</a>
          <a href="#contact" className="md:hover:text-pink-500 hover:text-pink-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
