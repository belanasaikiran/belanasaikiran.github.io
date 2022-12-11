import React from "react";
import Hammer from "../../assets/Images/Hammer.svg";
import { ProjectList } from "./ProjectList";
import { AiOutlineArrowRight } from "react-icons/ai";

function Projects() {
  return (
    <div
      className="md:py-20 2xl:px-60 lg:px-40 
    bg-gradient-to-b from-brown via-brown to-skin"
    >
      <div className="flex flex-row h-48 text-skin md:justify-start justify-center  items-center ">
        <img src={Hammer} alt="build" className="md:h-[150px] h-[56px] " />
        <h1 className="2xl:text-8xl lg:text-7xl text-4xl md:ml-8 ml-6 gradient-text  ">
          Some Projects <br /> I've Built
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-stretch   gap-4 w-full  2xl:pt-24 pt-8 lg:px-30">
        {ProjectList.map((Project, index) => (
          <div
            key={index}
            className="grid content-around justify-center item bg-skin text-brown p-3 group xl:w-auto group  "
          >
            <div className=" overflow-hidden">
              <img
                src={Project.Image}
                alt="images"
                key={index}
                className="group-hover:scale-100 object-cover scale-110 h-[275px] w-[350px]   transition-all duration-700"
              />
            </div>

            <h3 className="text-3xl mt-4 font-semibold max-w-[350px] ">
              {Project.Name}
            </h3>
            <p className="font-normal mt-2 text-gray-900 max-w-[350px] ">
              {Project.Description}
            </p>

            <a href={Project.Link} target="blank">
              <button className="bg-red-900 mt-4 p-2 text-skin group inline-flex gap-2 hover:bg-brown transition-all duration-1000 ease-in-out ">
                {" "}
                {Project.type}{" "}
                <AiOutlineArrowRight className="mt-1 group-hover:ml-2  transition-all duration-300 ease-in-out  " />
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
