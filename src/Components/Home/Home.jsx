import React from "react";
import SkyLine from "../../assets/Images/Hyderabad_Skyline.svg";
import Typewriting from "./Typewriting";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
// import Skills from "./Skills";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div className="">
      <header className="relative  ">
        <div className=" 2xl:px-60 lg:px-40 2xl:mt-56 mt-40 2xl:text-7xl text-5xl font-[roboto]  ">
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
          <div className="absolute z-20 text-white flex justify-between w-full px-20 text-2xl bottom-24 2xl:px-60 lg:px-40 ">
            <div className="grid grid-cols-3 gap-8 text-3xl">
              <a href="https://github.com/belanasaikiran" target="blank">
                <GoMarkGithub />
              </a>
              <a href="https://www.linkedin.com/in/saikiran-belana-81004613a/" target="blank">
                <ImLinkedin />
              </a>
              <a href="https://www.instagram.com/copycharming/" target="blank">
                <GrInstagram />
              </a>
            </div>

            <div className="group border-2 ">
              <a
                href="mailto:saikiransanju22@outlook.com?subject=We are Interested in your profile"
                target="blank"
              >
                <button className="bg-cyan-600 p-2  translate-x-[-7px] translate-y-[-7px]  transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0">
                  {" "}
                  Hire Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Section 2 - Technical Skills */}
      {/* <Skills /> */}
      <Projects />
    </div>
  );
}

export default Home;
