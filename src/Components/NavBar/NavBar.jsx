import React, { useState, useEffect } from "react";
// import Image from "../../assets/Images/sloth_profile.jpeg";
import menu from "../../assets/Images/menu.svg";
import close from "../../assets/Images/close.svg";
import UCONN_Logo from "../../assets/Images/uconn_logo.png";

const Image =
  "https://avatars.githubusercontent.com/u/88756154?s=400&u=f35449ed30519431779c4e179fa22c04060ad8c9&v=4";

const style = {
  fontFamily: "KPDutyJNL, sans-serif",
};

const navLinks = [
  // Example for UCONN section:
  // { name: "UCONN", link: "#uconn" },
  {
    name: "Download CV",
    link: "https://raw.githubusercontent.com/belanasaikiran/belanasaikiran/main/Resume-Saikiran-Belana.pdf",
  },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const rightNavLinks = [];
const roundedNavCSS = "rounded-full bg-accent";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [opacityNav, setOpacityNav] = useState("backdrop-opacity-90");
  const [bgColor, setBgColor] = useState("uconn");
  const [color, setColor] = useState("#000");
  const [mainColor, setMainColor] = useState("#9A3412");

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
      className={`text-sm 2xl:text-lg backdrop-opacity-10 bg-white/0 backdrop-blur-md transition-all duration-700 ease-in-out   lg:px-48 px-4 sm:gap-4 sticky top-0 z-30 bg-white md:bg-[${bgColor}] md:text-[${color}]
      ${nav ? "h-48" : "h-20"} ${window.scrollY > 80 ? "drop-shadow-md h-14 my-0 mx-[10%] xl:mx-[20%] 2xl:mx-[25%]" : "h-16 text-xl mt-4"}
      ${opacityNav}
      `}
    >
      <div
        className={`${window.scrollY > 80 ? "bg-accent rounded-bl-full rounded-br-full " : ""}`}
      >
        <nav className="flex justify-between">
          <a
            href="#home"
            className={` ${window.scrollY > 80 ? "" : roundedNavCSS} text-gray-100  font-medium `}
            // style={{ color: mainColor }}
            onClick={(e) => {
              e.preventDefault();
              ScrollToTop();
              scrollToSection("#home");
            }}
          >
            <div className="flex justify-items-center items-center">
              <img
                src={Image}
                alt="nav head"
                className={`w-[42px] rounded-full  transition-all duration-700 grayscale ${window.scrollY > 80 ? "rounded-tl-none" : ""}`}
              />
              <span className="hidden px-2 pr-3 sm:block">
                Saikiran Belana{" "}
              </span>
            </div>
          </a>

          <div
            className={`${window.scrollY > 80 ? "rounded-none" : roundedNavCSS} text-white lg:flex hidden justify-self-center content-between justify-center items-center`}
          >
            {navLinks.map((navLink, index) =>
              navLink.link === "Download CV" ? (
                <a
                  className={`px-4 hover:text-white py-2`}
                  href={navLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(navLink.link);
                  }}
                >
                  {navLink.name}
                </a>
              ) : (
                <a
                  className={`px-4 hover:bg-[#0C2443b9] hover:text-white py-2  ${window.scrollY > 80 && navLink.name === "Contact" ? " hover:bg-[#0C2443b9] hover:rounded-br-full" : ""}
                    ${window.scrollY > 80 ? "" : "rounded-full"}
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

          <img
            src={nav ? close : menu}
            alt="menu"
            className="bg-uconn p-2 w-[42px] h-[42px] lg:hidden hover:pointer "
            onClick={handleNav}
          />
        </nav>
      </div>

      {nav && (
        <div className="flex lg:hidden flex-col py-4  delay-300 ">
          {navLinks.map((navLink, index) => (
            <a
              className="px-4 py-2"
              href={navLink.link}
              key={index}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(navLink.link);
              }}
            >
              {navLink.name}
            </a>
          ))}
          {rightNavLinks.map((navLink, index) => (
            <a
              className="px-4 hover:bg-[#0C2443b9] hover:text-white py-2"
              href={navLink.link}
              key={index}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(navLink.link);
              }}
            >
              {navLink.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
