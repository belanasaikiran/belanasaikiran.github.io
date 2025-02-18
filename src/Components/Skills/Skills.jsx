import React from "react";

import { AllSkills, Certificates } from "./SkillsConfig";
function Skills() {
  return (
    <div className="bg-white min-h-screen">
      {/* Section 2 - Technical Skills */}
      <div className=" bg-white text-uconn text-center pt-8 ">
        <h1 className="text-4xl ">Technical Skills</h1>

        <div className="bg-white lg:mx-16 ">
          <div className="flex flex-wrap justify-center text-gray-800 lg:pb-8 py-8 text-xl gap-4  ">
            {AllSkills.map((Skills, index) => (
              <div
                className="border-b-uconn   grid grid-cols-1 justify-items-center  md:gap-8  md:p-4  place-content-center hover:bg-uconn hover:text-white  xl:w-auto lg:w-1/7 "
                key={index}
              >
                <img
                  src={Skills.Icon}
                  alt={Skills.skillName}
                  className=" object-contain group-hover:hidden  transition duration-100 lg:w-[125px] lg:h-[125px] w-[64px] h-[64px] "
                />
                <p className="hidden group-hover:block  ease-linear group-hover:text-xl w-[125px] h-[125px] pt-[35%]">
                  {Skills.skillName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white text-uconn text-center  lg:mx-16 ">
        <h1 className="text-4xl py-8">Certifications</h1>
        <div className="grid grid-cols-1  md:place-content-center gap-1 lg:mx-0 mx-2">
          {Certificates.map((Certificate) => (
            <div className=" grid  grid-cols-12 text-left  gap-4 text-uconn p-4 transition duration-500 ease-in-out border-b-4 border-uconn">
              <div className="col-span-1">
                <img
                  src={Certificate.Image}
                  alt=""
                  className="lg:w-20 lg:h-20 h-16 w-16"
                />
              </div>
              <div className="text-left col-span-10">
                <div className="flex md:flex-row flex-col gap-4 min-w-full    justify-between">
                  <div className="flex flex-col content-center justify-around min-w-full ">
                    <h1 className="lg:text-2xl text-lg ">
                      {Certificate.Course}
                    </h1>
                    <p className="md:text-lg py-2 text-base ">
                      Issued: {Certificate.DateOfCompletion}
                    </p>
                    <p className="text-sm">
                      Credential ID {Certificate.CredentialID}
                    </p>
                  </div>
                  <a
                    href={Certificate.VerifyLink}
                    target="blank"
                    className="place-self-center"
                  >
                    <button className="bg-uconn text-white text-xl p-1 px-8 py-2">
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
  );
}

export default Skills;
