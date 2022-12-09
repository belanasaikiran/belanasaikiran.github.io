import React, {  useState } from "react";
import Image from "../../assets/Images/sloth_profile.jpeg";
// import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

function NavBar() {
  const [bgColor, setBgColor] = useState("#eeebe0");
  const [color, setColor] = useState("#000");
  const [mainColor, setMainColor] = useState("#9A3412");

  // const location = useLocation();
  // // Scroll to top if path changes
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  const changeNavColorScroll = () => {
    if (window.scrollY > 80) {
      setBgColor("#FFF");
      setColor("#000");
      setMainColor("#9A3412");
    } else {
      setBgColor("");
    }
  };

  window.addEventListener("scroll", changeNavColorScroll);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className=" flex justify-between  py-4 text-md px-16 sticky top-0 z-[1] backdrop-blur-sm backdrop-opacity-80 transition-all duration-500    "
      style={{ background: bgColor, color: color }}
    >
      <Link
        to="/"
        className="text-orange-800 font-medium "
        style={{ color: mainColor }}
        onClick={() => {
          setBgColor("#eeebe0");
          setColor("#000");
          setMainColor("#9A3412");
          ScrollToTop();
        }}
      >
        <div className="flex justify-items-center items-center">
          <img
            src={Image}
            alt="nav head"
            className="w-[42px] rounded-full mr-4"
          />
          <span>Saikiran Belana</span>
        </div>
      </Link>

      <div className="flex justify-self-center content-between justify-center items-center  ">
        <Link
          className="px-4 hover:bg-[#463F1A] hover:text-white py-2 transition duration-700 ease-in-out "
          to="/Resume"
          onClick={() => {
            setBgColor("#eeebe0");
            setColor("#000");
            setMainColor("#9A3412");
            ScrollToTop();
          }}
        >
          Resume
        </Link>
        <Link
          className="px-4 hover:bg-[#463F1A] hover:text-white py-2 transition-all duration-500 ease-in-out"
          to="/skills"
          onClick={() => {
            setBgColor("#eeebe0");
            setColor("#000");
            setMainColor("#9A3412");
            ScrollToTop();
          }}
        >
          Skills
        </Link>
        <Link
          className="px-4 hover:bg-[#463F1A] hover:text-white py-2 transition-all duration-500 ease-in-out"
          to="/contact"
          onClick={() => {
            setBgColor("#463F1A");
            setColor("#FFF");
            setMainColor("#FFF");
            ScrollToTop();
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
