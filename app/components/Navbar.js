"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu

  return (
    <div className="w-full flex justify-between items-center py-5 md:w-full">
      <button 
        className="md:hidden block focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Hamburger Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      <div className={`md:flex md:items-center w-full md:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700">
            <li><a className="md:p-4 py-3 px-0 block" href="/">Home</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="#skills">Skills</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="#projects">Projects</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="/resume">Resume</a></li>
            <li><a className="md:p-4 py-3 px-0 block" href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
