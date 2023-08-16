import React from "react";

import { AllSkills, Certificates } from "./SkillsConfig";
function Skills() {
  return (
    <div>
      {/* Section 2 - Technical Skills */}
      <div className="bg-skin text-brown text-center pt-8 ">
        <h1 className="text-4xl ">Technical Skills</h1>

        <div className="light-bg lg:mx-20 xl:mx-40 2xl:mx-60  relative ">
          <div className="flex flex-wrap justify-center text-gray-800 lg:pb-8 py-8 text-xl gap-4  ">
            {AllSkills.map((Skills, index) => (
              <div
                className="grid grid-cols-1 justify-items-center gap-8 bg-amber-50 p-4  group place-content-center hover:bg-[#463F1A] hover:text-white  transition duration-1000 xl:w-auto lg:w-1/7 "
                key={index}
              >
                <img
                  src={Skills.Icon}
                  alt={Skills.skillName}
                  className=" object-cover group-hover:overflow-hidden  transition duration-1000 w-[110px] h-[110px]"
                />
                <p className="transition duration-500 ease-linear group-hover:text-xl w-[100px]">
                  {Skills.skillName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-skin text-brown text-center light-bg lg:mx-60 ">
        <h1 className="text-4xl py-8">Certifications</h1>

        <div className="flex flex-col gap-1 lg:mx-0 mx-2">
          {Certificates.map((Certificate) => (
            <div className=" text-left border-4 border-brown bg-brown group hover:bg-skin hover:text-brown text-skin p-4 transition duration-500 ease-in-out">
              <h1 className="lg:text-3xl text-xl ">{Certificate.Course}</h1>
              <p className="md:text-lg py-2 text-base ">
                Issued: {Certificate.DateOfCompletion}
              </p>

              <div className="flex md:flex-row flex-col gap-4    justify-between">
                <p className="text-sm">
                  Credential ID {Certificate.CredentialID}
                </p>
                <a href={Certificate.VerifyLink} target="blank">
                  <button className="bg-skin text-brown group-hover:bg-brown group-hover:text-skin p-1 px-4">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
