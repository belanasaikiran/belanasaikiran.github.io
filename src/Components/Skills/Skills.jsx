import React from "react";

import { AllSkills, Certificates } from "./SkillsConfig";

function Skills() {
  return (
    <div id="skills" className="flex">
      <div className=" min-h-screen mt-16">
        {/* Section 2 - Technical Skills */}
        <div className="text-sm 2xl:text-lg lg:px-16 bg-white text-uconn text-center rounded-bl-full rounded-tr-full">
          <h1 className=" text-white my-8 text-xl 2xl:text-3xl">
            <span className="bg-accent px-6 py-2   rounded-tl-full rounded-br-full ">
              Technical Skills
            </span>
          </h1>

          <div className="lg:mx-16 flex flex-column md:flex-row justify-center lg:justify-between">
            <div className="flex flex-wrap justify-center text-gray-800 lg:pb-8 py-4 2xl:text-xl text-base gap-1  ">
              <a
                className="w-full"
                href="https://github.com/belanasaikiran"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full"
                  src="https://ghchart.rshah.org/1D4D8E/belanasaikiran"
                  alt="GitHub Contributions"
                />
              </a>
              {AllSkills.map((Skills, index) => (
                <div
                  className="border-b-uconn grid grid-cols-1 justify-items-center  2xl:gap-4  md:p-4  place-content-center hover:bg-uconn hover:text-white  xl:w-auto lg:w-1/7 "
                  key={index}
                >
                  <img
                    src={Skills.Icon}
                    alt={Skills.skillName}
                    className=" object-contain group-hover:hidden  transition duration-100 2xl:w-[100px] 2xl:h-[100px] w-[64px] h-[64px] "
                  />
                  <p className="hidden group-hover:block  ease-linear group-hover:text-xl w-[125px] h-[125px] pt-[35%]">
                    {Skills.skillName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white text-uconn text-center   rounded-tl-full rounded-br-full">
          <h1 className=" text-white text-xl 2xl:text-3xl mb-8  ">
            <span className="bg-accent px-6 py-2   rounded-tl-full rounded-br-full ">
              Certifications
            </span>
          </h1>
          <div className="grid grid-cols-1 pb-16 lg:mx-64 xl:mx-80 md:place-content-center gap-1  mx-2">
            {Certificates.map((Certificate, index) => (
              <div
                key={index}
                className=" grid  grid-cols-12 text-left  gap-4 text-uconn py-4 transition duration-500 ease-in-out border-b-4 border-uconn"
              >
                <div className="col-span-1">
                  <img
                    src={Certificate.Image}
                    alt=""
                    className="xl:min-w-20 xl:min-h-20 min-h-16 min-w-16"
                  />
                </div>
                <div className="text-left col-span-10">
                  <div className="flex md:flex-row flex-col gap-4 min-w-full    justify-between">
                    <div className="flex flex-col content-center justify-around min-w-full ">
                      <h1 className="2xl:text-2xl text-lg ">
                        {Certificate.Course}
                      </h1>
                      <p className="2xl:text-lg text-sm py-2  ">
                        Issued:{" "}
                        <span className="">{Certificate.DateOfCompletion}</span>
                      </p>
                      <p className="text-sm">
                        Credential ID: {Certificate.CredentialID}
                      </p>
                    </div>
                    <a
                      href={Certificate.VerifyLink}
                      target="blank"
                      className="place-self-center"
                    >
                      <button className="bg-uconn text-white text-base p-1 px-4 py-2">
                        Verify
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
