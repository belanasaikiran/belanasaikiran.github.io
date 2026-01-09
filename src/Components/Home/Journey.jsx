import { ArcherContainer, ArcherElement } from "react-archer";
import { useTheme } from "../../context/ThemeContext";

export default function Journey() {
  const { theme } = useTheme();

  return (
    <div className="mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop version with arrows and dotted lines */}
        <div className="hidden md:block">
          <ArcherContainer
            strokeColor={theme === "dark" ? "#735741" : "#1D4D8E"}
          >
            <div className="flex flex-row items-center justify-between gap-8">
              {/* Dotted line before first box */}
              <div className="flex items-center">
                <div
                  className={`w-16 h-0.5 border-t-2 border-dotted ${theme === "dark" ? "border-darkAccent" : "border-gray-400"}`}
                ></div>
              </div>

              <ArcherElement
                id="box1"
                relations={[
                  {
                    targetId: "box2",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                  },
                ]}
              >
                <div>
                  <div
                    className={`w-64 p-4 ${theme === "dark" ? "bg-darkBrownBG text-white border-darkAccent" : "bg-white"} border rounded-xl shadow text-center transition-all duration-500`}
                  >
                    <img
                      src="https://raw.githubusercontent.com/belanasaikiran/belanasaikiran.github.io/refs/heads/jan2026/src/assets/Images/lsp.png"
                      alt="Lightspeed Photonics"
                      className="h-16 mx-auto mb-4 bg-white"
                    />
                    <p
                      className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-600"} mt-2`}
                    >
                      Software Engineer <br /> (C++, OpenCL, MERN)
                    </p>
                  </div>
                  <p
                    className={`text-center text-sm ${theme === "dark" ? "text-white" : "text-gray-600"} mt-2`}
                  >
                    2021 - 2023
                  </p>
                </div>
              </ArcherElement>

              <ArcherElement
                id="box2"
                relations={[
                  {
                    targetId: "box3",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                  },
                ]}
              >
                <div>
                  <div
                    className={`w-64 p-4 ${theme === "dark" ? "bg-darkBrownBG text-white border-darkAccent" : "bg-white"} border rounded-xl shadow text-center transition-all duration-500`}
                  >
                    <img
                      src="https://raw.githubusercontent.com/belanasaikiran/belanasaikiran.github.io/refs/heads/jan2026/src/assets/Images/uconn.png"
                      alt="UConn"
                      className="h-16 scale-125  mx-auto mb-4 bg-white"
                    />
                    <p
                      className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-600"} mt-2`}
                    >
                      Masters in Computer Science
                    </p>
                    <p
                      className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-600"} mt-2`}
                    >
                      Research Assistant
                    </p>
                    <p
                      className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-600"} mt-2`}
                    >
                      Student Assistant at IT
                    </p>
                  </div>
                  <p
                    className={`text-center text-sm ${theme === "dark" ? "text-white" : "text-gray-600"} mt-2`}
                  >
                    2024 - 2025
                  </p>
                </div>
              </ArcherElement>

              <ArcherElement id="box3">
                <div>
                  <div
                    className={`w-58 p-4 ${theme === "dark" ? "bg-darkAccent text-black" : "bg-uconn"} border rounded-xl shadow text-center transition-all duration-500`}
                  >
                    <h3
                      className={`font-semibold scale-125 ${theme === "dark" ? "text-black" : "text-white"}`}
                    >
                      Next Role
                    </h3>
                    <p
                      className={`text-sm ${theme === "dark" ? "text-gray-800" : "text-gray-200"} mt-2 text-left`}
                    >
                      Open to Work as Software Engineer <br /> (Backend,
                      Embedded and Full Stack)
                    </p>
                  </div>
                  <p
                    className={`text-center text-sm ${theme === "dark" ? "text-white" : "text-gray-600"} mt-2`}
                  >
                    2026
                  </p>
                </div>
              </ArcherElement>

              {/* Dotted line after last box */}
              <div className="flex items-center">
                <div
                  className={`w-16 h-0.5 border-t-2 border-dotted ${theme === "dark" ? "border-darkAccent" : "border-gray-400"}`}
                ></div>
              </div>
            </div>
          </ArcherContainer>
        </div>

        {/* Mobile version - vertical timeline with dotted lines */}
        <div className="block md:hidden">
          <div className="text-center mb-8">
            <h1 className="text-white text-xl 2xl:text-3xl">
              <span
                className={`font-[Quantico] ${theme === "dark" ? "bg-darkAccent text-black border border-darkBrownBG shadow-md" : "bg-accent"} px-6 py-2 rounded-tl-full rounded-br-full`}
              >
                My Journey
              </span>
            </h1>
          </div>

          <div className="relative">
            {/* Main timeline line */}
            <div
              className={`absolute left-6 top-8 bottom-8 w-0.5 ${theme === "dark" ? "bg-darkAccent" : "bg-gray-300"}`}
            ></div>

            {/* Dotted line before timeline */}
            <div
              className={`absolute left-6 top-0 w-0.5 h-8 border-l-2 border-dotted ${theme === "dark" ? "border-darkAccent" : "border-gray-400"}`}
            ></div>

            <div className="relative pl-12 pb-8 pt-8">
              <div
                className={`absolute left-4 w-4 h-4 ${theme === "dark" ? "bg-darkAccent" : "bg-blue-500"} rounded-full border-2 border-white`}
              ></div>
              <div
                className={`text-left ${theme === "dark" ? "bg-darkBrownBG text-white border-darkAccent" : "bg-white"} border rounded-xl shadow p-4 transition-all duration-500`}
              >
                <img
                  src="https://raw.githubusercontent.com/belanasaikiran/belanasaikiran.github.io/refs/heads/jan2026/src/assets/Images/lsp.png"
                  alt="Lightspeed Photonics"
                  className="h-12 mb-2 bg-white"
                />
                <p
                  className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-600"}`}
                >
                  Software Engineer <br /> (C++, OpenCL, MERN)
                </p>
                <p
                  className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-500"} mt-2`}
                >
                  2021 - 2023
                </p>
              </div>
            </div>

            <div className="relative pl-12 pb-8">
              <div
                className={`absolute left-4 w-4 h-4 ${theme === "dark" ? "bg-darkAccent" : "bg-blue-500"} rounded-full border-2 border-white`}
              ></div>
              <div
                className={`${theme === "dark" ? "bg-darkBrownBG text-white border-darkAccent" : "bg-white"} border rounded-xl shadow p-4 text-left transition-all duration-500`}
              >
                <img
                  src="https://raw.githubusercontent.com/belanasaikiran/belanasaikiran.github.io/refs/heads/jan2026/src/assets/Images/uconn.png"
                  alt="UConn"
                  className="h-12 mb-2 bg-white"
                />
                <p
                  className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-600"}`}
                >
                  Masters in Computer Science
                </p>
                <p
                  className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-600"}`}
                >
                  Research Assistant
                </p>
                <p
                  className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-600"}`}
                >
                  Student Assistant at IT
                </p>
                <p
                  className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-500"} mt-2`}
                >
                  2024 - 2025
                </p>
              </div>
            </div>

            <div className="relative pl-12 pb-8">
              <div className="absolute left-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              <div
                className={`${theme === "dark" ? "bg-darkAccent text-black" : "bg-uconn"} border rounded-xl shadow p-4 text-left transition-all duration-500`}
              >
                <h3
                  className={`font-semibold ${theme === "dark" ? "text-black" : "text-white"}`}
                >
                  Next Role
                </h3>
                <p
                  className={`text-sm ${theme === "dark" ? "text-gray-800" : "text-gray-200"} mt-1`}
                >
                  Open to Work as Software Engineer <br /> (Backend, Embedded
                  and Full Stack)
                </p>
                <p
                  className={`text-xs ${theme === "dark" ? "text-gray-700" : "text-gray-300"} mt-2`}
                >
                  2026
                </p>
              </div>
            </div>

            {/* Dotted line after timeline */}
            <div
              className={`absolute left-6 bottom-0 w-0.5 h-8 border-l-2 border-dotted ${theme === "dark" ? "border-darkAccent" : "border-gray-400"}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
