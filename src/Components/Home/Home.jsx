import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const HomeBG =
  "https://images.unsplash.com/photo-1724365437529-ae10ac6573e8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const WHITEMOUNTAINS =
  "https://images.unsplash.com/photo-1743262629805-6ff1f640e680?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Home() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className="border-none 2xl:text-lg transition-all duration-500 ease-in-out ">
      <div
        className="2xl:text-4xl lg:text-xl md:text-xl  text-base flex justify-left items-start text-left lg:py-8 font-[Quantico]  lg:min-h-[90vh] rounded-2xl shadow-2xl drop-shadow-2xl bg-gray-700 bg-blend-multiply transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${HomeBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:pl-10 pl-4 pt-4 text-white">
          <div className="pb-4">
            <span className="text-[#B2E7AE]">
              [ Introducing@Internet ~ ]$ &nbsp;
            </span>
            <span className="inline-flex">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 30,
                  cursor: "|",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(" cat > About_Me.md")
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
              <div className=" pt-4 flex flex-col gap-8">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    cursor: "|",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "I'm <span class='text-white font-semibold'>Saikiran Belana</span><br />",
                      )
                      .pauseFor(500)
                      .typeString("- Grad Student at UCONN<br />")
                      .pauseFor(500)
                      .typeString("- Student Developer at UCONN<br />")
                      .pauseFor(700)
                      .typeString(
                        "- My passions include OS & Embedded Systems<br /> <br />",
                      )
                      .pauseFor(500)
                      .typeString(
                        "> When I'm not coding, you can find me playing OverCooked 2<br />",
                      )
                      .pauseFor(500)
                      .typeString(
                        "> In my free time, I do street photography.<br /><br />",
                      )
                      .typeString(
                        `&nbsp;📸 Check out my photos on
                        <a class='underline text-[#B2E7AE]' href='https://unsplash.com/@belanasaikiran' target='_blank'>Unsplash ↗</a><br /><br />`,
                      )
                      .typeString(
                        `&nbsp;🔗 Let's connect:<br />
                      `,
                      )

                      .typeString(
                        `
                      <a href='https://linkedin.com/in/belanasaikiran' target='_blank' class='text-blue-400 underline'>  LinkedIn</a> |
                      <a href='https://github.com/belanasaikiran' target='_blank' class='text-gray-300 underline'>GitHub</a>
                      `,
                      )

                      // My Social Media Profiles

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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
