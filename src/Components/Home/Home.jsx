import React from "react";
import Typewriting from "./Typewriting";
const UCONNBG =
  "https://images.unsplash.com/photo-1733840161253-f934dbd464ec?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HomeBG =
  "https://images.unsplash.com/photo-1724365437529-ae10ac6573e8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Home() {
  return (
    <div className="border-none   2xl:text-lg min-h-[95vh]">
      {/*  large screens - for parallax effects */}
      <div
        className="2xl:text-5xl text-4xl flex justify-center items-start text-center p-2  2xl:pt-56 pt-24   font-[Roboto] min-h-[90vh]  bg-blue-100 rounded-2xl shadow-2xl drop-shadow-2xl "
        style={{ backgroundImage: `url(${HomeBG})`, backgroundSize: "cover" }}
      >
        <div className="py-4 pl-8 pt-8  text-white ">
          <h1>Heyah!</h1>
          <p className="py-4 p">
            I'm{" "}
            <span className="text-white font-semibold "> Saikiran Belana </span>
          </p>
          <Typewriting />
        </div>
      </div>
    </div>
  );
}

export default Home;
