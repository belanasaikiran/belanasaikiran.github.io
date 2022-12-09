import React from "react";
import Hammer from "../../assets/Images/Hammer.svg";
import { ProjectList } from "./ProjectList";
import { AiOutlineArrowRight } from "react-icons/ai";

function Projects() {
  return (
    <div className="py-20 2xl:px-60 lg:px-40  bg-brown text-skin">
      <div className="flex h-48 justify-between  text-skin">
        <h1 className="2xl:text-8xl lg:text-7xl ">
          Some Projects <br /> I've Built
        </h1>
        <img src={Hammer} alt="build" />
      </div>

      <div className="flex flex-wrap justify-center items-stretch  gap-4 w-full  pt-32">
        {ProjectList.map((Project, index) => (
          <div
            key={index}
            className="grid content-around item bg-skin text-brown p-2 group lg:w-1/4 md:w-1/3 w-1/2"
          >
            <div className="relative overflow-hidden">
              <img
                src={Project.Image}
                alt="images"
                key={index}
                className="hover:scale-100 scale-110 2xl:h-[400px] xl:h-[285px] lg:h-[250px] h-[200px] w-full  transition-all duration-700"
              />
            </div>

            <h3 className="text-3xl mt-4 font-semibold ">{Project.Name}</h3>
            <p className="font-normal mt-2 text-gray-900">
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
