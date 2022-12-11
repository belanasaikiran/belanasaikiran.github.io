import React from "react";
import SkyLine from "../../assets/Images/Hyderabad_Skyline.svg";
import Typewriting from "./Typewriting";
import { SocialMedia } from "../SocialIcons/Social";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div className="border-none">
      <header className="relative md:min-h-screen grid grid-cols-1  ">
        <div className=" 2xl:px-60 lg:px-40 px-8 2xl:mt-56 md:mt-40 mt-20 2xl:text-7xl md:text-6xl text-3xl font-[Roboto]  ">
          <h1>Hi There!</h1>
          <p className="py-4">
            I'm{" "}
            <span className="text-orange-800 font-[600] ">
              {" "}
              Saikiran Belana{" "}
            </span>
          </p>

          <Typewriting />

        </div>

        <img
          src={SkyLine}
          alt="Skyline"
          className="  w-screen  pt-8   scale-x-[-1] scale-110   overflow-hidden  place-self-end "
        />

        {/* icons */}
        <div className=" md:absolute bg-brown md:bg-transparent  z-20 text-white flex md:flex-row flex-col md:gap-0 gap-8  justify-between w-full px-20 text-2xl bottom-32 2xl:px-60 lg:px-40 ">
          <div className="grid grid-cols-3 md:gap-8 gap-4 text-3xl place-content-center justify-items-center">
            {SocialMedia.map((Social) => (
              <a href={Social.Link} target="blank">
                {Social.Icon}
              </a>
            ))}
          </div>

          <div className="group md:border-4 text-center">
            <a
              href="mailto:saikiransanju22@outlook.com?subject=We are Interested in your profile"
              target="blank"
            >
              <button className="bg-cyan-600 p-2  md:translate-x-[-7px] md:translate-y-[-7px]  transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0">
                {" "}
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </header>

      <Projects />
    </div>
  );
}

export default Home;
