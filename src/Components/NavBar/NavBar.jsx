import React, { useState, useEffect } from "react";
// import Image from "../../assets/Images/sloth_profile.jpeg";
import menu from "../../assets/Images/menu.svg";
import close from "../../assets/Images/close.svg";
import Modal from "./Modal";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

const Image =
  "https://avatars.githubusercontent.com/u/88756154?s=400&u=f35449ed30519431779c4e179fa22c04060ad8c9&v=4";

const navLinks = [
  // Example for UCONN section:
  // { name: "UCONN", link: "#uconn" },
  {
    name: "Get CV",
    link: "https://raw.githubusercontent.com/belanasaikiran/belanasaikiran/main/Resume-Saikiran-Belana.pdf",
  },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const roundedNavCSS = "rounded-full";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [opacityNav, setOpacityNav] = useState("backdrop-opacity-90");
  const [bgColor, setBgColor] = useState("uconn");
  const [color, setColor] = useState("#000");
  const [mainColor, setMainColor] = useState("#9A3412");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const command = `curl -o Resume-Saikiran-Belana.pdf https://raw.githubusercontent.com/belanasaikiran/belanasaikiran.github.io/2025/src/Components/Resume/Resume-Saikiran-Belana.pdf`;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleNav = () => setNav(!nav);

  const changeNavColorScroll = () => {
    if (window.scrollY > 80) {
      setBgColor("#FFF");
      setColor("#000");
      setMainColor("#9A3412");
    } else {
      setBgColor("#eeebe0");
    }
  };

  // Properly add/remove scroll listener
  useEffect(() => {
    window.addEventListener("scroll", changeNavColorScroll);
    return () => window.removeEventListener("scroll", changeNavColorScroll);
  }, []);

  const ScrollToTop = () => {
    setBgColor("#eeebe0");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Helper for smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        alignToTop: true,
      });
      console.log("Position:", el.getBoundingClientRect().top);
      // set position to position - 100px
      el.scrollTo({
        top: el.getBoundingClientRect().top - 100,
        behavior: "smooth",
      });
    }

    setNav(false);
  };

  return (
    <div
      className={`font-[Quantico] text-sm 2xl:text-lg backdrop-opacity-0 backdrop-blur-md transition-all duration-700 ease-in-out md:px-8 lg:px-24 xl:px-48 px-4 sm:gap-4 sticky top-0 z-50 ${theme === "dark" ? " text-black" : `text-white bg-white/0 lg:bg-[${bgColor}] md:text-[${color}]`}
      ${nav ? "h-48" : "h-20"} ${window.scrollY > 80 ? "drop-shadow-md h-14 my-0 mx-[10%]  lg:mx-[20%] xl:mx-[22%] 2xl:mx-[25%]" : "h-16 text-xl mt-4"}
      ${nav && window.scrollY > 80 ? "" : ""}
      ${opacityNav}
      `}
    >
      <div className={`${window.scrollY > 80 ? "  drop-shadow-lg   " : ""}`}>
        <nav
          className={`flex justify-between items-center ${window.scrollY > 80 ? `${theme === "dark" ? "bg-darkAccent text-black" : "bg-accent"} rounded-br-[25px] rounded-bl-[25px] ` : ""} `}
        >
          <a
            href="#home"
            className={` ${window.scrollY > 80 ? "rounded-bl-full" : roundedNavCSS}  font-medium ${theme === "dark" ? "bg-darkAccent" : "bg-accent"}`}
            // style={{ color: mainColor }}
            onClick={(e) => {
              e.preventDefault();
              ScrollToTop();
              scrollToSection("#home");
            }}
          >
            <div className="flex justify-items-center items-center text-lg  ">
              <img
                src={Image}
                alt="nav head"
                className={`w-[42px]  rounded-full   transition-all duration-700 grayscale ${window.scrollY > 80 ? "rounded-tl-none " : ""} ${nav ? "text-sm" : "text-lg"}`}
              />
              <span className=" px-2 pr-3 sm:block">Saikiran Belana </span>
            </div>
          </a>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className={`mr-2 flex items-center justify-center ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-[#0C2443b9]"} hover:text-white p-2 rounded-full lg:hidden`}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <MdOutlineLightMode size={20} className="text-black" />
              ) : (
                <MdOutlineDarkMode size={20} className="text-white" />
              )}
            </button>
            <img
              src={nav ? close : menu}
              alt="menu"
              className={`block lg:hidden ${theme === "dark" ? "bg-black" : "bg-accent"} p-2 w-[36px] h-[36px] hover:pointer ${window.scrollY > 80 ? "rounded-br-full mr-2 w-[42px] h-[42px] " : " rounded-full"}`}
              onClick={handleNav}
            />
          </div>

          {/* Right Menu */}

          <div
            className={`${window.scrollY > 80 ? "" : roundedNavCSS} text-white ${theme === "dark" ? "bg-darkAccent text-black" : "bg-accent"}
              lg:flex  lg:flex-row justify-self-center
              content-between justify-center items-center transition-all ease-in-out duration-300
              ${nav ? "flex flex-col absolute z-100 right-4 top-12 py-4 rounded-3xl" : "hidden"}
              ${window.scrollY > 80 ? `${theme === "dark" ? "bg-darkAccent" : "bg-accent"} rounded-br-[25px] text-lg ` : ""}
              `}
          >
            {/* Toggle Light and Dark Modes */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center ${theme === "dark" ? "hover:bg-darkAccent" : "hover:bg-[#0C2443b9]"} hover:text-white p-2 rounded-full ${window.scrollY > 80 ? "hidden" : ""}`}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <MdOutlineDarkMode size={20} />
              )}
            </button>

            {navLinks.map((navLink, index) =>
              navLink.name === "Get CV" ? (
                <button
                  className={` px-4 ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-[#0C2443b9]"} hover:text-white py-2
                    ${window.scrollY > 80 ? "" : "rounded-full"}
                    ${nav ? "border-b-2 px-8" : ""}
                    `}
                  key={index}
                  onClick={() => {
                    setIsOpen(true);
                    console.log("Get CV");
                  }}
                >
                  {navLink.name}
                </button>
              ) : (
                <a
                  className={`px-4 ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-[#0C2443b9]"} hover:text-white py-2   ${window.scrollY > 80 && navLink.name === "Contact" ? ` ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-[#0C2443b9]"} hover:rounded-br-[25px]` : ""}
                    ${window.scrollY > 80 ? "" : "rounded-full"}
                    ${nav ? "border-b-2 w-full px-8 " : ""}
                    `}
                  href={navLink.link}
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(navLink.link);
                  }}
                >
                  {navLink.name}
                </a>
              ),
            )}
          </div>
          {/* <div></div> */}
        </nav>
      </div>

      <Modal
        classes="text-md lg:text-xl"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p className="my-2"> You can Get using the following command:</p>

        <div
          className={`mb-2 ${theme === "dark" ? "bg-black" : "bg-uconn"} text-white rounded-lg`}
        >
          <div className="flex justify-between bg-gray-900">
            <p
              className={`${theme === "dark" ? "bg-black" : "bg-gray-800"} rounded-md p-[3px]`}
            >
              Bash
            </p>
            <button
              onClick={handleCopy}
              className={`${theme === "dark" ? "bg-black" : "bg-gray-800"} rounded-md px-2 py-[3px] ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-700"} transition`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="p-2 text-lg font-[Quantico] break-words whitespace-pre-wrap">
            {command}
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p>Nah... I'm Lazy, I'll just open it. </p>
          <a
            href="https://github.com/belanasaikiran/belanasaikiran.github.io/blob/2025/src/Components/Resume/Resume-Saikiran-Belana.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`px-4 py-2 ${theme === "dark" ? "bg-black" : "bg-uconn"} text-white rounded ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-red-600"}`}
            >
              View Resume
            </button>
          </a>
        </div>
      </Modal>
    </div>
  );
}

export default NavBar;
