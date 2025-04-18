import ReactBlog from "../../assets/Images/Projects/ReactBlog.png";
import ThreeJs from "../../assets/Images/Projects/ThreeJsCar.png";
import TwitterSentimentalAnalysis from "../../assets/Images/Projects/TwitterSentimentalAnalysis.svg";
import WebTerminal from "../../assets/Images/Projects/webTerminal.png";
import LightSpeedPhotonics from "../../assets/Images/Projects/LightSpeedPhotonicsWebsite.png";
import HangMan from "../../assets/Images/Projects/hangman-django-ui.png";
import PCConnect from "../../assets/Images/Projects/PCConnect.png";
import ArchPrj from "../../assets/Images/Projects/ArchPrj.png";

export const ProjectList = [
  {
    Name: "WayNotify",
    Image:
      "https://plus.unsplash.com/premium_photo-1682309524785-cf2288f7b544?q=80&w=2712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: "C++, CMake, D-Bus, Cairo, Wayland",
    Description:
      "A background service that listens for desktop notifications (via D-Bus), then displays them on-screen using Wayland protocols.",
    Link: "https://github.com/belanasaikiran/WayNotify",
    type: "Vercel",
  },
  {
    Name: "Windborne-Tracker",
    Image:
      "https://raw.githubusercontent.com/belanasaikiran/windborne-tracker/refs/heads/main/screenshot.png",
    techStack: "Next.js, React, TailwindCSS",
    Description:
      "An interactive web app that visualizes WindBorne Systems’ live balloon data on an interactive world map. Users can select any hour from the last 24 to view balloon positions at that time.",
    Link: "https://windborne-tracker.vercel.app",
    type: "Vercel",
  },
  {
    Name: "Branch Predictor and Data Caches in RISC-V ",
    Image: ArchPrj,
    techStack: "C, GCC",
    Description: (
      <div>
        Developed a functional 5-stage pipelined RISC-V processor simulator,
        supporting all instruction types and enhancing simulation accuracy.
        Implemented dynamic branch predictors, pipeline interlocks, and
        forwarding techniques to handle data and structural hazards, ensuring
        accurate simulation results under various unit tests.
      </div>
    ),
    Link: "https://github.com/belanasaikiran/Computer-Architecture/tree/main/project",
    type: "GitHub",
  },
  {
    Name: "Kernel system calls implementation",
    Image:
      "https://github.com/belanasaikiran/OS161/blob/main/Labs/Images/print-name-os-kernel.png?raw=true",
    techStack: "Operating Systems, C, Linux, GCC, Makefile",
    Description: (
      <div className="">
        Developed and validated multithreaded applications in OS/161 by
        implementing system calls, locks, and semaphores to optimize concurrency
        and manage process synchronization, ensuring proper execution through
        kernel modifications.{" "}
      </div>
    ),
    Link: "https://github.com/belanasaikiran/OS161",
    type: "GitHub",
  },

  {
    Name: "CPU Scheduling & File Management",
    Image:
      "https://github.com/belanasaikiran/File-System-Management/raw/main/images/final_UI.png",
    techStack: "Operating Systems, C++, Linux, DearImGUI, Make tool ",
    Description: (
      <div className="">
        Developed a file system GUI using Dear ImGui, enabling users to manage
        files, directories, monitor disk usage, and perform file modifications.
        Implemented core functionality in C++ leveraging OpenGL for UI
        components.{" "}
      </div>
    ),
    Link: "https://github.com/belanasaikiran/File-System-Management",
    type: "GitHub",
  },
  {
    Name: "MD5 Collision Attack and Security Analysis",
    Image: "https://www.thinkpenguin.com/files/bless.png",
    techStack: "md5collgen, md5sum ",
    Description: (
      <div className="">
        Executed an MD5 collision attack using md5collgen to generate two
        distinct binary files with identical hashes, demonstrating cryptographic
        vulnerabilities. Analyzed the security risks of hash collisions in
        digital authentication and malware verification.
      </div>
    ),
    Link: "https://github.com/belanasaikiran/ComputerSecurity/blob/main/Project1/Report.md",
    type: "GitHub",
  },
  {
    Name: "Buffer Overflow Attack Vulnerability Analysis",
    Image:
      "https://cdn.invicti.com/app/uploads/2022/06/28121124/buffer-overflow-attacks-1024x538.webp",
    techStack: "md5collgen, md5sum ",
    Description: (
      <div className="">
        Executed an MD5 collision attack using md5collgen to generate two
        distinct binary files with identical hashes, demonstrating cryptographic
        vulnerabilities. Analyzed the security risks of hash collisions in
        digital authentication and malware verification.
      </div>
    ),
    Link: "https://github.com/belanasaikiran/ComputerSecurity/tree/main/Project2",
    type: "GitHub",
  },

  {
    Name: "Car Make & Model Detection using Transfer Learning",
    Image:
      "https://raw.githubusercontent.com/belanasaikiran/Team-6-Big-Data-Project/refs/heads/main/images/results.png",
    techStack: "Operating Systems, C, Linux, GCC, Makefile",
    Description: (
      <div className="">
        Developed an ML model using the Xception architecture to classify car
        make and model from the Stanford Car Dataset (196 classes, 16,185
        images), achieving 99.69% accuracy and 0.58% loss on unseen data by
        demonstrating scalability for applications like traffic monitoring
        analysis.{" "}
      </div>
    ),
    Link: "https://github.com/belanasaikiran/Team-6-Big-Data-Project",
    type: "GitHub",
  },
  {
    Name: "IPV4 Router with OpenFlow and POX Controller",
    Image:
      "https://raw.githubusercontent.com/belanasaikiran/Computer-Networks/refs/heads/main/Projects/Project3/images/pingall.png",
    techStack: "Python, OpenFlow, Mininet, iperf",
    Description: (
      <div className="">
        <div>
          Designed and implemented a network routing interface with OpenFlow and
          POX controller on Mininet, simulating a production environment with
          firewalls, custom traffic rules, and tested using iperf, ping, and
          dpctl for performance and reliability.
        </div>{" "}
      </div>
    ),
    Link: "https://github.com/belanasaikiran/Computer-Networks/blob/main/Projects/Project3/README.md",
    type: "GitHub",
  },
  {
    Name: "LightSpeed Photonics Website",
    Image: LightSpeedPhotonics,
    techStack: "ReactJs, NodeJs, MongoDB, TailwindCSS",
    Description:
      "Official Website for LightSpeed Photonics & LightSpeedAI Labs - Complete Web Development",
    Link: "https://lightspeedphotonics.com/",
    type: "Visit Site",
  },
  // {
  //   Name: "PC Link",
  //   Image: PCConnect,
  //   techStack: "Flutter, Dart, Android, Linux, Bluetooth",
  //   Description:
  //     "A cross-platform application to Sync your Mobile with PC - Flutter",
  //   Link: "https://github.com/belanasaikiran/PC-Link",
  //   type: "GitHub",
  // },

  {
    Name: "Web Terminal",
    Image: WebTerminal,
    techStack: "NodeJS, ReactJs, xTerm, SSH2, Socket.io",
    Description:
      "Web Terminal built using libraries xTerm, SSH2 & Socket.io. I have provided instructions to add your own .env file and also an option to enter the credentials that connect to the Remote Server.",
    Link: "https://github.com/belanasaikiran/Web-Terminal",
    type: "GitHub",
  },

  {
    Name: "HangMan",
    Image: HangMan,
    techStack: "Python, Django, SQLite",
    Description: "HangMan Game built on Django Framework - Python",
    Link: "https://github.com/belanasaikiran/hangman-django",
    type: "GitHub",
  },
  // {
  //   Name: "Blog",
  //   Image: ReactBlog,
  //   techStack: "React",
  //   Description: "Blog Page with React, React-Router",
  //   Link: "https://react-blog-eight-gilt.vercel.app/",
  //   type: "See Demo",
  // },
  // {
  //     Name: "ThreeJs Demo",
  //     Image: ThreeJs,
  //     Description: "Display animated 3D computer graphics in the browser using WebGL. ",
  //     Link: "https://gltf-react.vercel.app/",
  //     type: "See Demo"
  // },
];

export const OtherProjectList = [];
