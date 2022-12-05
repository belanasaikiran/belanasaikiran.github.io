import React from "react";
import Image from "../../assets/Images/sloth_profile.jpeg";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className=" flex justify-between  mt-8 text-md px-16">
      <Link to="/" className="text-orange-800 font-medium ">
        <div className="flex justify-items-center items-center">
          <img
            src={Image}
            alt="nav head"
            className="w-[42px] rounded-full mr-4"
          />
          <span>Saikiran Belana</span>
        </div>
      </Link>

      <div className="flex justify-self-center content-between justify-around  ">
        <Link
          className="px-4 hover:bg-[#463F1A] hover:text-white    hover:pt-2  transition-all duration-500 ease-in-out "
          to="/Resume"
        >
          Resume
        </Link>
        <Link
          className="px-4 hover:bg-[#463F1A] hover:text-white    hover:pt-2  transition-all duration-500 ease-in-out"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="px-4 hover:bg-[#463F1A] hover:text-white    hover:pt-2  transition-all duration-500 ease-in-out"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
