import React, { useState } from "react";
import SkyLine from "../../assets/Images/Hyderabad_Skyline.svg";
import Typewriting from "./Typewriting";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import Skills from "./Skills";

function Home() {
  return (
    <div className="">
      <header className="relative  ">
        <div className="ml-56 2xl:mt-56 mt-40 2xl:text-7xl text-5xl font-[roboto]  ">
          <h1 >Hi There!</h1>
          <p className="py-4">
            I'm{" "}
            <span className="text-orange-800 font-[600] ">
              {" "}
              Saikiran Belana{" "}
            </span>
          </p>

          <Typewriting />
          {/* <p>
            A Full Stack <span className="font-[600]"> Developer </span>
          </p> */}
        </div>

        <div>
          <img
            src={SkyLine}
            alt="Skyline"
            className="  w-screen  pt-8   scale-x-[-1] scale  "
          />

          {/* icons */}
          <div className="absolute z-30 text-white flex justify-between w-full px-20 text-2xl bottom-20  ">
            <div className="grid grid-cols-3 gap-8 text-3xl">
              <GoMarkGithub />
              <ImLinkedin />
              <GrInstagram />
            </div>

            <div className="   ">
              <div className="bg-cyan-600 p-2 shadow-sm shadow-slate-100">
                {" "}
                Hire Me
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* Section 2 - Technical Skills */}
      <Skills />
    </div>
  );
}

export default Home;
