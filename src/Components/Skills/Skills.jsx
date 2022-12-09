import React from "react";

import { FullStackSkills, CloudDevOpsSkills } from "./SkillsConfig";
function Skills() {
  return (
    <div>
      {/* Section 2 - Technical Skills */}
      <div className="bg-[#463F1A] text-white text-center py-20 ">
        <h1 className="text-5xl py-16">Technical Skills</h1>

        <div className="  light-bg mx-60 relative ">
          <div className="bg-cyan-600 text-2xl absolute p-4  top-[-40px] right-20 ">
            Full Stack Development
          </div>

          <div className="grid grid-cols-3 text-gray-800 py-24 text-xl  ">
            {FullStackSkills.map((Skills, index) => (
              <div
                className="grid grid-cols-1 justify-items-center gap-8 bg-amber-50 p-4 m-4 group place-content-center hover:bg-[#463F1A] hover:text-white  transition duration-1000 2xl:min-h-[400px] "
                key={index}
              >
                <img
                  src={Skills.Icon}
                  alt={Skills.skillName}
                  className="w-48 group-hover:hidden transition duration-1000 "
                />
                <p className="transition duration-500 ease-linear group-hover:text-5xl ">
                  {Skills.skillName}
                </p>
              </div>
            ))}
          </div>
        </div>

        <br />

        <div className="light-bg mx-60 relative py-20 ">
          <div className="bg-cyan-600 text-2xl absolute p-4  top-[-40px] left-20 ">
            DevOps & Cloud Technologies
          </div>

          <div className="grid grid-cols-3 gap-4 text-gray-800 py-24 text-xl ">
            {CloudDevOpsSkills.map((Skills, index) => (
              <div
                className="grid grid-cols-1 justify-items-center gap-8 bg-amber-50 p-4 m-4 group place-content-center hover:bg-[#463F1A] hover:text-white  transition duration-1000 2xl:min-h-[400px] "
                key={index}
              >
                <img
                  src={Skills.Icon}
                  alt={Skills.skillName}
                  className="w-48 group-hover:hidden transition duration-1000 "
                />
                <p className="transition duration-500 ease-linear group-hover:text-5xl ">
                  {Skills.skillName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
