import React from "react";
import Typewriter from "typewriter-effect";

function Typewriting() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Full Stack Developer", "DevOps Engineer", "Cloud Systems Engineer"],
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
