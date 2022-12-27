import React, { useState } from "react";
import Image from "../../assets/Images/sloth_profile.jpeg";
// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import menu from "../../assets/Images/menu.svg";
import close from "../../assets/Images/close.svg";

const navLinks = [
  {
    name: "Resume",
    link: "/resume",
  },
  {
    name: "Skills",
    link: "/skills",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [bgColor, setBgColor] = useState("#eeebe0");
  const [color, setColor] = useState("#000");
  const [mainColor, setMainColor] = useState("#9A3412");

  const changeNavColorScroll = () => {
    if (window.scrollY > 80) {
      setBgColor("#FFF");
      setColor("#000");
      setMainColor("#9A3412");
    } else {
      setBgColor("#eeebe0");
    }
  };

  // scroll to Top
  window.addEventListener("scroll", changeNavColorScroll);
  const ScrollToTop = () => {
    setBgColor("#eeebe0");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`backdrop-opacity-80 transition-all duration-700 ease-in-out  py-4 text-md lg:px-16 px-4 sm:gap-4 sticky top-0  z-30 backdrop-blur-sm bg-white lg:bg-skin md:bg-[${bgColor}] md:text-[${color}]
      ${nav ? "h-64" : "h-20"} ${window.scrollY > 80 ? 'drop-shadow-md    ': ''}
      `}
    >
      <nav className="flex justify-between ">
        <Link
          to="/"
          className="text-orange-800 font-medium "
          style={{ color: mainColor }}
          onClick={() => {
            setBgColor("#eeebe0");
            setColor("#000");
            setMainColor("#9A3412");
            ScrollToTop();
            setNav(false);
          }}
        >
          <div className="flex justify-items-center items-center">
            <img
              src={Image}
              alt="nav head"
              className="w-[42px] rounded-full mr-4 transition-all duration-700 "
            />
            <span className="hidden sm:block">Saikiran Belana</span>
          </div>
        </Link>

        <div className="lg:flex hidden justify-self-center content-between justify-center items-center  ">
          {navLinks.map((navLink, index) => (
            <Link
              className="px-4 hover:bg-[#463F1A] hover:text-white py-2  "
              to={navLink.link}
              key={index}
              onClick={() => {
                ScrollToTop();
                setNav(false);
              }}
            >
              {navLink.name}
            </Link>
          ))}
        </div>

        <img
          src={nav ? close : menu}
          alt="menu"
          className="bg-brown p-2 w-[42px] h-[42px] lg:hidden hover:pointer "
          onClick={handleNav}
        />
      </nav>

      {nav ? (
        <div className="flex  flex-col py-8 text-xl delay-300 ">
          {navLinks.map((navLink, index) => (
            <Link
              className="px-4 py-2  "
              to={navLink.link}
              key={index}

              onClick={() => {
                ScrollToTop();
                setNav(false);
              }}
            >
              {navLink.name}
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}


    </div>
  );
}

export default NavBar;
