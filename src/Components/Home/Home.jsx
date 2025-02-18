import React from "react";
import SkyLine from "../../assets/Images/Hyderabad_Skyline.svg";
import Typewriting from "./Typewriting";
import { SocialMedia } from "../SocialIcons/Social";
import Projects from "../Projects/Projects";
import {
  ParallaxProvider,
  ParallaxBannerLayer,
  ParallaxBanner,
} from "react-scroll-parallax";

import Birds from "../../assets/Images/Scape/birds4.svg";
import City from "../../assets/Images/Scape/CitySkyLine.svg";
const UCONNBG =
  "https://images.unsplash.com/photo-1733840161253-f934dbd464ec?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Home() {
  return (
    <div className="border-none">
      {/*  large screens - for parallax effects */}
      <div className="hidden lg:flex lg:flex-row">
        {/* <ParallaxProvider>
            <ParallaxBanner style={{ aspectRatio: "1.6 / 1" }}>
              <ParallaxBannerLayer
                image={Birds}
                speed={-30}
                className="fade-in"
              /> */}
        {/* <ParallaxBannerLayer image={City} speed={-4} /> */}
        <div className=" lg:mx-16 p-2  2xl:mt-56 md:mt-32 mt-20 2xl:text-6xl xl:text-4xl md:text-3xl text-2xl font-[Roboto]">
          <div className="bg-white/50 backdrop-blur-sm py-4 pl-2 pr-4 ">
            <h1>Hi there!</h1>
            <p className="py-4 p">
              I'm{" "}
              <span className="text-orange-800 font-[600] ">
                {" "}
                Saikiran Belana{" "}
              </span>
            </p>
            <Typewriting />
          </div>
        </div>
        {/* <ParallaxBannerLayer speed={-8}> */}
        <div className=" md:absolute bg-brown md:bg-transparent  z-30 text-white flex md:flex-row flex-col md:gap-0  justify-between w-full px-16 text-xl lg:bottom-4 md:px-16 ">
          <div className="flex items-center gap-8">
            <div className="grid grid-cols-3 md:gap-8 gap-4 text-3xl place-content-center justify-items-center">
              {SocialMedia.map((Social, index) => (
                <a href={Social.Link} target="blank" key={index}>
                  {Social.Icon}
                </a>
              ))}
            </div>
          </div>

          <p className="  text-center m-4 text-uconn">
            {" "}
            &#169; 2025 Saikiran Belana{" "}
          </p>
          <div className="group md:border-4 text-center lg:bg-brown">
            <a
              href="mailto:saikiransanju22@outlook.com?subject=Interested in Hiring/Collaboration"
              target="blank"
            >
              <button className="bg-uconn font-semibold p-3  md:translate-x-[-7px] md:translate-y-[-7px]  transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0">
                {" "}
                Hire Me
              </button>
            </a>
          </div>
        </div>

        {/* </ParallaxBannerLayer>
            </ParallaxBanner>
          </ParallaxProvider> */}
      </div>

      {/* Small Screens */}

      <div className="lg:hidden">
        <div className=" text-xl font-[Roboto] ml-4 ">
          <h1>Hi there!</h1>
          <p className="py-2">
            I'm <span className="text-orange-800"> Saikiran Belana </span>
          </p>

          <Typewriting />
        </div>

        {/* icons */}
        <div className=" absolute bg-transparent  z-20 text-white flex flex-row w-full px-4 justify-between gap-2  justify-left  text-lg font-semibold bottom-0 py-4 ">
          <div className="grid grid-cols-3 gap-2 text-2xl place-content-center justify-items-center">
            {SocialMedia.map((Social, index) => (
              <a href={Social.Link} target="blank" key={index}>
                {Social.Icon}
              </a>
            ))}
          </div>

          <div className="group md:border-4 text-center">
            <a
              href="mailto:saikiransanju22@outlook.com?subject=Interested in Hiring/Collaboration"
              target="blank"
            >
              <button className="bg-uconn p-2  md:translate-x-[-7px] md:translate-y-[-7px]  transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0">
                {" "}
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <Projects /> */}
    </div>
  );
}

export default Home;
