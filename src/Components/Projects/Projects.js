import React from "react";
import Hammer from "../../assets/Images/Hammer.svg";
import { ProjectList, OtherProjectList } from "./ProjectList";
import { AiOutlineArrowRight } from "react-icons/ai";
import UCONN_Logo from "../../assets/Images/uconn_logo.png";

export default function Projects() {
  return (
    <div id="projects" className="md:flex ">
      <div className="md:py-0 text-sm 2xl:text-lg lg:px-16 px-4 mt-20 bg-white  rounded-tl-full rounded-br-full  ">
        <div className="w-full mt-16 pb-20">
          <div className="text-center  text-xl 2xl:text-3xl my-8">
            <h1 className=" text-white  ">
              <span className="bg-accent px-6 py-2 rounded-tl-full rounded-br-full heading-font">
                Projects
              </span>
            </h1>
          </div>

          <div className=" min-w-full">
            <div className="flex flex-col md:flex-row md:flex-wrap  gap-4 justify-center pt-4 text-left md:text-center">
              {ProjectList.map((Project, index) => (
                <div
                  key={index}
                  className="w-full text-sm 2xl:text-lg 2xl:max-w-[300px]  md:max-w-[250px] bg-gray-200 rounded-xl  group  text-uconn group xl:w-auto  "
                >
                  <div className="flex h-[100px] md:h-auto justify-items-start items-center md:flex-col md:relative md:overflow-hidden rounded-xl ">
                    <div className="max-w-[100px] md:max-w-[300px] md:flex justify-center ">
                      <img
                        src={Project.Image}
                        alt="images"
                        key={index}
                        className="w-[140px] h-[100px] md:w-[300px] md:h-[180px] object-cover shadow-gray-300 "
                      />
                    </div>

                    <div className="py-2 pl-2">
                      <h3 className="text-[13px]">{Project.Name}</h3>
                      <p className="text-[12px] italic text-blue-900">
                        {Project.techStack}
                      </p>
                      <p>
                        <a
                          href={Project.Link}
                          target="blank"
                          className="text-[12px] md:absolute md:h-full md:w-full md:bg-uconn/80 md:flex md:items-center md:justify-center md:-bottom-10 md:group-hover:bottom-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                        >
                          <button className="bg-accent font-semibold inline-flex  md:p-4 p-[2px] rounded-2xl text-white md:group  md:group-hover:bg-white md:group-hover:text-uconn transition-all duration-300 ease-in-out  ">
                            <span>{Project.type}</span>
                            <AiOutlineArrowRight className="md:group-hover:ml-1 mt-[2px]  transition-all duration-300 ease-in-out -right-2  " />
                          </button>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
