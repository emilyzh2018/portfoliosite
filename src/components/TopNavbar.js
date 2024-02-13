import React from 'react';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
   
    <nav className="fixed top-0 left-0 w-full z-10 bg-white bg-opacity-0 backdrop-blur-lg ">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-1">
        {/* Logo with a text gradient (you need to add custom styles for this) */}
        <Link to="/" className="text-white text-xl font-bold transition duration-300 ease-in-out hover:text-blue-700">Home</Link>

        {/* Navigation links with spacing */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/ProjectsPage" className="text-white py-2 px-4 transition duration-300 ease-in-out hover:text-blue-700 rounded-md">Resume</Link>
          <Link to="/#about-me" className="text-white py-2 px-4 transition duration-300 ease-in-out hover:text-blue-700 rounded-md" >About Me</Link>

          
          <Link to="/BlogPage" className="text-white py-2 px-4 transition duration-300 ease-in-out hover:text-blue-700 rounded-md">My Projects</Link>
          <Link to="/ContactUsPage" className="text-white py-2 px-4 transition duration-300 ease-in-out hover:text-blue-700 rounded-md">My Socials</Link>
          <Link to="/GetInvolvedPage" className="text-white py-2 px-4 transition duration-300 ease-in-out hover:text-blue-700 rounded-md">Contact Me</Link>
        </div>

        {/* Hamburger icon for the mobile menu (hidden on larger screens) */}
        <div className="md:hidden">
          {/* Mobile menu icon */}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
