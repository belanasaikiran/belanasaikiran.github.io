import React, {useState} from "react";
import SkyLine from "../../assets/Images/Hyderabad_Skyline.svg";
import Typewriting from "./Typewriting";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

import Resume from "../Resume/Resume";

function Home() {


  return (
    <div className="">
      <header className="    relative  ">
        <div className="ml-56 2xl:mt-56 mt-40 2xl:text-7xl text-5xl font-[roboto] ">
          <h1>Hi There!</h1>
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

            {/* <div className="   ">
              <div className="bg-cyan-600 p-2 shadow-md shadow-slate-100">
                {" "}
                Hire Me
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className=" h-40 bg-[#463F1A]"></div> */}

        {/* <div className="bg-[#463F1A] w-40  absolute text-white rotate-[-90deg] text-center ">GitHub</div> */}
      </header>

      {/* Section 2 - Technical Skills */}
      <div className="bg-[#463F1A] text-white text-center py-16 ">
        <h1 className="text-5xl py-16">Technical Skills</h1>

        <div className="h-[1000px]  light-bg mx-60 relative ">
          <div className="bg-cyan-600 text-4xl absolute p-4  top-[-40px] right-20 ">
            Full Stack Development
          </div>
        </div>

        <br />

        <div className="h-48 light-bg mx-60 relative ">
          <div className="bg-cyan-600 text-4xl absolute p-4  top-[-40px] left-20 ">
            DevOps & Cloud Technologies
          </div>
        </div>

          {/* <Resume /> */}
      </div>



   
    </div>
  );
}

export default Home;
