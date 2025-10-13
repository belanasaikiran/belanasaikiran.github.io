import { AllSkills, Certificates } from "./SkillsConfig";
import { useTheme } from "../../context/ThemeContext";

function Skills() {
  const { theme } = useTheme();

  return (
    <div id="skills" className="flex ">
      <div className=" min-h-screen mt-16">
        {/* Section 2 - Technical Skills */}
        <div
          className={`text-sm 2xl:text-lg lg:px-16 text-uconn dark:bg-leaf dark:bg-blend-multiply bg-gray-50  text-center rounded-bl-full rounded-tr-full `}
        >
          <h1 className=" text-white my-8 text-xl 2xl:text-3xl">
            <span
              className={`font-[Quantico]   ${theme === "dark" ? "bg-darkAccent text-black border border-darkBrownBG shadow-md" : "bg-accent"} px-6 py-2   rounded-tl-full rounded-br-full `}
            >
              Technical Skills
            </span>
          </h1>

          <div className="  lg:mx-16 flex flex-column md:flex-row justify-center lg:justify-between ">
            <div className="flex flex-wrap justify-center dark:text-white text-gray-800 lg:pb-8 py-4 2xl:text-xl text-base gap-1  ">
              {theme !== "dark" ? (
                <a
                  className="w-full"
                  href="https://github.com/belanasaikiran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-full"
                    src={`https://ghchart.rshah.org/${theme === "dark" ? "735741" : "1D4D8E"}/belanasaikiran`}
                    alt="GitHub Contributions"
                  />
                </a>
              ) : (
                <></>
              )}

              {AllSkills.map((Skills, index) => (
                <div
                  className={`border-b-uconn grid grid-cols-1 justify-items-center  2xl:gap-4  md:p-4  place-content-center ${theme === "dark" ? "hover:bg-darkAccent" : "hover:bg-uconn"}   hover:text-white  xl:w-auto lg:w-1/7`}
                  key={index}
                >
                  <img
                    src={Skills.Icon}
                    alt={Skills.skillName}
                    className=" object-contain group-hover:hidden  transition duration-100 2xl:w-[100px] 2xl:h-[100px] w-[64px] h-[64px] "
                  />
                  <p className="text-xs group-hover:block  ease-linear group-hover:text-xl pt-[35%]">
                    {Skills.skillName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`dark:text-shadow-outline text-uconn text-center  dark:bg-leaf bg-gray-50  rounded-tl-full rounded-br-full`}
        >
          <h1 className=" text-white text-xl 2xl:text-3xl mb-8  ">
            <span
              className={`${theme === "dark" ? "bg-darkAccent text-black border border-darkBrownBG shadow-md" : "bg-accent"} px-6 py-2   rounded-tl-full rounded-br-full `}
            >
              Certifications
            </span>
          </h1>
          <div className="dark:text-white grid grid-cols-1 pb-16 lg:mx-64 xl:mx-80 md:place-content-center gap-1  mx-2">
            {Certificates.map((Certificate, index) => (
              <div
                key={index}
                className={`dark:text-white grid  grid-cols-12 text-left border-b-4  gap-4 ${theme === "dark" ? "text-uconn border-darkAccent" : "text-uconn"}  py-4 transition duration-500 ease-in-out `}
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
                      <button
                        className={`${theme === "dark" ? "bg-darkAccent text-black" : "bg-uconn "} text-white text-base p-1 px-4 py-2`}
                      >
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
