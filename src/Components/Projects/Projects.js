import React from "react";
import Hammer from "../../assets/Images/Hammer.svg";
import { ProjectList } from "./ProjectList";
import {AiOutlineArrowRight} from "react-icons/ai"


function Projects() {
  return (
    <div className="my-20 px-60 container mx-auto">
      <div className="flex h-48 justify-between  text-brown">
        <h1 className="text-8xl ">
          Some Projects <br /> I've Built
        </h1>
        <img src={Hammer} alt="build" />
      </div>

      <div className="grid grid-cols-2 gap-8 pt-32">
        {ProjectList.map((Project, index) => (
          <div key={index} className="grid content-around">
            <div
              style={{
                backgroundImage: `url(${Project.Image})`,
              }}
              className=" h-[400px] bg-cover bg-center"
            ></div>
              <h3 className="text-3xl mt-4 font-semibold text-brown">
                {Project.Name}
              </h3>
              <p className="font-light mt-2">{Project.Description}</p>

              <a href={Project.Link} target="blank">
                <button className="bg-red-900 mt-4 p-2 text-skin group inline-flex gap-2 hover:bg-brown transition-all duration-1000 ease-in-out ">
                  {" "}
                  {Project.type}  <AiOutlineArrowRight className="mt-1 group-hover:ml-2  transition-all duration-300 ease-in-out  "  />
                </button>
              </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
