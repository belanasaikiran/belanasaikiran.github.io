import React, { useState } from "react";
import ReactDOM from "react-dom";
import Typewriter from "typewriter-effect";
import Highlights from "./Highlights";
import Journey from "./Journey";
import { useTheme } from "../../context/ThemeContext";
import { FaCamera, FaLink } from "react-icons/fa";
const HomeBG =
  "https://images.unsplash.com/photo-1724365437529-ae10ac6573e8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const DARKBG =
  // "https://images.unsplash.com/photo-1724365437293-1a3cdd4b77de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070";
  "https://images.unsplash.com/photo-1730909063129-70581e603ea0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987";

const IntroImage =
  "https://raw.githubusercontent.com/belanasaikiran/belanasaikiran.github.io/refs/heads/oct2025/src/assets/Images/intro_image.jpeg";

const WHITEMOUNTAINS =
  "https://images.unsplash.com/photo-1743262629805-6ff1f640e680?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const profileImg =
  "https://raw.githubusercontent.com/belanasaikiran/belanasaikiran.github.io/refs/heads/oct2025/src/assets/Images/profile_s.jpg";

function Home() {
  const [showSecond, setShowSecond] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-tr-full rounded-bl-full dark:bg-leaf   dark:bg-blend-multiply`}
    >
      <h1 className="text-center text-xl 2xl:text-3xl mb-4 ">
        <span
          className={`font-[Quantico]  ${theme === "dark" ? "bg-darkAccent text-black border border-darkBrownBG shadow-md" : "bg-accent text-white"}  px-6 py-2 rounded-tl-full rounded-br-full heading-font`}
        >
          Introducing@Internet
        </span>
      </h1>

      <div className={`border-none grid lg:grid-cols-1 gap-3 mt-2 `}>
        <div className="lg:min-h-[40vh] 2xl:text-lg transition-all duration-500 ease-in-out col-span-3">
          <div
            className="2xl:text-4xl lg:text-xl md:text-xl lg:min-h-[40vh]  text-base flex justify-left items-start text-left font-[Quantico] rounded-2xl shadow-2xl drop-shadow-2xl bg-gray-800 bg-blend-multiply transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${theme === "dark" ? DARKBG : HomeBG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" px-4  text-white text-xl py-4 w-full h-full bg-white/10 backdrop-blur-[4px] lg:min-h-[40vh]  rounded-2xl">
              <div className="pb-4">
                <span
                  className={`${theme === "dark" ? "text-darkAccent" : "text-[#B2E7AE]"}`}
                >
                  [ ~ ]$ &nbsp;
                </span>
                <span className="inline-flex">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: false,
                      delay: 10,
                      cursor: "█",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(" cat > aboutMe.md")
                        .callFunction(() => {
                          const cursor = document.querySelector(
                            ".Typewriter__cursor",
                          );
                          if (cursor) cursor.style.display = "none";
                          // Delay to feel realistic, then trigger second typewriter
                          setTimeout(() => {
                            setShowSecond(true);
                          }, 500); // Adjust delay as needed
                        })
                        .start();
                    }}
                  />
                </span>

                {showSecond && (
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    <div
                      className=" lg:col-span-1 my-4 rounded-xl min-h-[330px] max-h-[400px] min-w-max"
                      style={{
                        // backgroundImage: `url(${theme === "dark" ? IntroImage : profileImg})`,
                        backgroundImage: `url(${IntroImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="md:col-span-2 lg:col-span-3 pt-4 flex flex-col gap-8">
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: false,
                          delay: 3,
                          cursor: "█",
                        }}
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(
                              "I'm <span class='text-white  font-semibold'>Saikiran Belana</span><br />",
                            )
                            .pauseFor(50)
                            .typeString("CS Graduate @UConn <br /> <br />")
                            .pauseFor(50)
                            .typeString(
                              "For my next chapter, I aim to bridge the hardware-software gap by building end-to-end cloud applications integrated with AI. <br /> <br />",
                            )
                            .pauseFor(100)
                            .typeString(
                              "Interests: Software Engineering in Hardware, Machine Learning, AI, and Cloud Computing",
                            )
                            .pauseFor(50)
                            .typeString(
                              "When I'm not coding, you can find me playing OverCooked 2<br />",
                            )
                            .pauseFor(50)
                            .typeString(
                              "In my free time, I do street photography.<br /><br />",
                            )

                            // My Social Media Profiles
                            // &nbsp; -> for space
                            .pauseFor(1000)
                            .typeString(
                              `Let's connect: <span id="lets-connect" class="text-white mb-2"> </span> <br />

                              <a href='https://linkedin.com/in/belanasaikiran' target='_blank' class='bg-blue-400 underline px-2 mt-2 rounded-md'>LinkedIn ↗</a> |
                              <a href='https://github.com/belanasaikiran' target='_blank' class='bg-gray-900 underline px-2 rounded-md' >GitHub ↗</a> |
                              <a href='https://instagram.com/copycharming' target='_blank' class='from-orange-400 to-pink-600 bg-gradient-to-tr underline px-2 rounded-md'>Instagram ↗</a> |
                              <a class='underline bg-white text-black rounded-md px-2' href='https://unsplash.com/@belanasaikiran ' target='_blank'>Unsplash ↗</a>
                              `,
                            )
                            .callFunction(() => {
                              const placeholder =
                                document.getElementById("lets-connect");
                              if (placeholder) {
                                const iconWrapper =
                                  document.createElement("span");
                                iconWrapper.style.display = "inline-block";
                                iconWrapper.style.verticalAlign = "middle";
                                const root = ReactDOM.createRoot(iconWrapper);
                                root.render(<FaLink />);
                                placeholder.parentNode.replaceChild(
                                  iconWrapper,
                                  placeholder,
                                );
                              }
                            })

                            // Add more info from github profile

                            .callFunction(() => {
                              // Remove second cursor at the end if you want
                              const cursor = document.querySelector(
                                ".Typewriter__cursor",
                              );
                              if (cursor) cursor.style.display = "none";
                            })
                            .start();
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Highlights />*/}
      <Journey />
    </div>
  );
}

export default Home;
