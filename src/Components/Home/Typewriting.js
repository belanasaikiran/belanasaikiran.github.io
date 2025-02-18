import React from "react";
import Typewriter from "typewriter-effect";
import UCONN_Logo from "../../assets/Images/uconn_logo.png";

function Typewriting() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Grad Student at UCONN", "Student Developer at UCONN"],
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          delay: 50,
        }}
      />
    </div>
  );
}

export default Typewriting;
