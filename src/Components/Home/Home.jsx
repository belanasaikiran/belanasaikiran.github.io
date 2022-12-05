import React from "react";
import SkyLine from "../../assets/Images/Hyderabad_Skyline.svg";
function Home() {
  return (
    <div className="">
      <header className="relative  min-h-screen   ">
        <div className="ml-56 2xl:mt-56 mt-40 2xl:text-7xl text-4xl font-[roboto] ">
          <h1>Hello!</h1>
          <p className="py-4">
            My Name is{" "}
            <span className="text-orange-800 font-[600] ">
              {" "}
              Saikiran Belana{" "}
            </span>
          </p>
          <p>
            I'm a Full Stack <span className="font-[600]"> Developer </span>
          </p>
        </div>

        <img src={SkyLine} alt="Skyline" className=" bottom-0 pb-40 absolute w-screen " />
        <div className="bg-[#463F1A] w-40  absolute text-white rotate-[-90deg] text-center ">GitHub</div>
      </header>

      {/* Section 2 - Technical Skills */}
      <div className="bg-[#463F1A] ">
        Ho
      </div>
    </div>
  );
}

export default Home;
