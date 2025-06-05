import React from "react";
import { ProjectList } from "./ProjectList";
import { useTheme } from "../../context/ThemeContext";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <div id="projects" className="md:flex ">
      <div
        className={`md:py-0 text-sm 2xl:text-lg lg:px-16 px-4 mt-20  ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}  rounded-tl-full rounded-br-full  `}
      >
        <div className="w-full mt-16 pb-20">
          <div className="text-center  text-xl 2xl:text-3xl my-8">
            <h1 className=" text-white  ">
              <span
                className={`font-[Quantico]  ${theme === "dark" ? "bg-darkAccent text-black" : "bg-accent"}  bg-accent px-6 py-2 rounded-tl-full rounded-br-full heading-font`}
              >
                Projects
              </span>
            </h1>
          </div>

          <div className=" min-w-full">
            <div className="flex flex-col md:flex-row md:flex-wrap  gap-4 justify-center pt-4 text-left md:text-center">
              {ProjectList.map((Project, index) => (
                <div
                  key={index}
                  className={`w-full text-sm 2xl:text-lg 2xl:max-w-[300px]  md:max-w-[250px] ${theme === "dark" ? "bg-gray-700 text-white" : " bg-gray-200 text-uconn"} rounded-xl  group   group xl:w-auto  `}
                >
                  <div className="flex h-[100px] md:h-auto justify-items-start items-center md:flex-col md:relative md:overflow-hidden rounded-xl ">
                    <div className="max-w-[150px] md:max-w-[300px] md:flex justify-center ">
                      <img
                        src={Project.Image}
                        alt="images"
                        key={index}
                        className="min-w-[150px] h-[100px] md:w-[300px] md:h-[180px] object-cover shadow-gray-300 "
                      />
                    </div>

                    <div className="py-2 pl-2">
                      <h3 className="text-[13px]">{Project.Name}</h3>
                      <p
                        className={`text-[12px] italic ${theme === "dark" ? "text-darkAccent" : "text-blue-900"} `}
                      >
                        {Project.techStack}
                      </p>
                      <a
                        href={Project.Link}
                        target="blank"
                        className="text-[12px] md:hidden pt-2 md:bg-uconn/80 flex md:items-center md:justify-center md:-bottom-10 md:group-hover:bottom-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                      >
                        <button className="bg-accent font-semibold inline-flex  p-[4px] px-[5px] rounded-lg text-white md:group  md:group-hover:bg-white md:group-hover:text-uconn transition-all duration-300 ease-in-out  ">
                          <span>{Project.type} ↗</span>
                        </button>
                      </a>
                    </div>
                    <a
                      href={Project.Link}
                      target="blank"
                      className="text-[12px] hidden  md:absolute md:h-full md:w-full md:bg-uconn/80 md:flex md:items-center md:justify-center md:-bottom-10 md:group-hover:bottom-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                    >
                      <button className="bg-accent font-semibold inline-flex  md:p-4 p-[2px] rounded-2xl text-white md:group  md:group-hover:bg-white md:group-hover:text-uconn transition-all duration-300 ease-in-out  ">
                        <span>{Project.type} ↗</span>
                      </button>
                    </a>
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
