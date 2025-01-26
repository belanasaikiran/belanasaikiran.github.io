import React from "react";
import Hammer from "../../assets/Images/Hammer.svg";
import { ProjectList, OtherProjectList } from "./ProjectList";
import { AiOutlineArrowRight } from "react-icons/ai";
import UCONN_Logo from "../../assets/Images/uconn_logo.png";


function Projects() {
  return (
    <div className="md:py-0 2xl:px-20 xl:px-32 lg:px-10">
      <div className="text-center text-skin font-bold md:justify-start justify-center  items-center text-4xl mt-8">
        <h1 className="flex text-white  items-center justify-left ">
          <p className="flex bg-[#0c2443] p-8">
            <img src={Hammer} alt="build" className="h-[32px] pr-4 " /> Some Projects I've Built
          </p>
        </h1>
      </div>

  <div className="bg-[#0c2443] p-4 shadow-lg shadow-[#0c2443] ">
      <div className="mt-4  flex items-center lg:justify-start justify-center" style={{fontFamily: "KPDutyJNL, sans-serif"}}>
        <img className="lg:h-48 h-24" src={UCONN_Logo} alt="" /> <p className="xl:text-6xl lg:text-6xl text-4xl text-white ">University of <br /> Connecticut</p>
        </div>
      <div className="flex justify-around items-center xl:px-20">
      {/* <div className="" style={{fontFamily: "KPDutyJNL, sans-serif"}}>
        <img className="h-96" src={UCONN_Logo} alt="" /> <p className="xl:text-8xl lg:text-6xl text-white ">University of Connecticut</p>
        </div> */}
      <div className="flex flex-wrap justify-center items-stretch md:gap-4 w-full  2xl:pt-8 pt-8 lg:px-30">
        {ProjectList.map((Project, index) => (
          <div
            key={index}
            className="grid content-around justify-center item  text-white p-3 group xl:w-auto group  "
          >
            <div className=" overflow-hidden">
              <img
                src={Project.Image}
                alt="images"
                key={index}
                className="group-hover:scale-100 object-cover group-hover:object-contain  scale-110 xl:h-[225px] xl:w-[350px] h-[200px] w-[300px]  transition-all duration-700"
              />
            </div>

            <h3 className="text-2xl mt-4 font-semibold xl:max-w-[350px] max-w-[300px]">
              {Project.Name}
            </h3>
            <p className="text-sm italic text-red-400">{Project.techStack}</p>
            <p className="font-normal text-pretty mt-2 text-gray-50 xl:max-w-[350px] max-w-[300px]">
              {Project.Description}
            </p>

            <a href={Project.Link} target="blank">
              <button className="bg-red-900 mt-4 p-2 text-skin group inline-flex gap-2 hover:bg-brown transition-all duration-1000 ease-in-out ">
                {" "}
                {Project.type}{" "}
                <AiOutlineArrowRight className="mt-1 group-hover:ml-2  transition-all duration-300 ease-in-out  " />
              </button>
            </a>
          </div>
        ))}
      </div>
   
      </div>
      </div>


      <div className="bg-brown p-4 mt-8">
      <div className="mt-4 flex items-center">
        <p className="xl:text-6xl lg:text-6xl text-white ">Other Projects:</p>
        </div>

      <div className="flex flex-wrap justify-center items-stretch gap-4 w-full 2xl:pt-16 pt-8 lg:px-30">
        {OtherProjectList.map((Project, index) => (
          <div
            key={index}
            className="grid content-around justify-center item bg-skin text-brown p-3 group xl:w-auto group  "
          >
            <div className=" overflow-hidden">
              <img
                src={Project.Image}
                alt="images"
                key={index}
                className="group-hover:scale-100 object-cover group-hover:object-contain  scale-110 xl:h-[275px] xl:w-[350px] h-[200px] w-[300px]  transition-all duration-700"
              />
            </div>

            <h3 className="text-2xl mt-4 font-semibold xl:max-w-[350px] max-w-[300px]">
              {Project.Name}
            </h3>
            <p className="text-sm italic text-red-900">{Project.techStack}</p>
            <p className="font-normal text-pretty mt-2 text-gray-900 xl:max-w-[350px] max-w-[300px]">
              {Project.Description}
            </p>

            <a href={Project.Link} target="blank">
              <button className="bg-red-900 mt-4 p-2 text-skin group inline-flex gap-2 hover:bg-brown transition-all duration-1000 ease-in-out ">
                {" "}
                {Project.type}{" "}
                <AiOutlineArrowRight className="mt-1 group-hover:ml-2  transition-all duration-300 ease-in-out  " />
              </button>
            </a>
          </div>
        ))}
      </div>
      </div>



    </div>
  );
}




// function Projects() {
//   return (
//     <div
//       className="md:py-20 2xl:px-60 xl:px-40 lg:px-20
//      bg-brown "
//     >
//       <div className="flex flex-row h-48 text-skin md:justify-start justify-center  items-center ">
//         <img src={Hammer} alt="build" className="lg:h-[150px] h-[56px] " />
//         <h1 className="2xl:text-8xl lg:text-7xl text-4xl md:ml-8 ml-6 gradient-text  ">
//           Some Projects <br /> I've Built
//         </h1>
//       </div>

//       <div className="flex flex-wrap justify-center items-stretch gap-4 w-full  2xl:pt-24 pt-8 lg:px-30">
//         {ProjectList.map((Project, index) => (
//           <div
//             key={index}
//             className="grid content-around justify-center item bg-skin text-brown p-3 group xl:w-auto group  "
//           >
//             <div className=" overflow-hidden">
//               <img
//                 src={Project.Image}
//                 alt="images"
//                 key={index}
//                 className="group-hover:scale-100 object-cover group-hover:object-contain  scale-110 xl:h-[275px] xl:w-[350px] h-[200px] w-[300px]  transition-all duration-700"
//               />
//             </div>

//             <h3 className="text-2xl mt-4 font-semibold xl:max-w-[350px] max-w-[300px]">
//               {Project.Name}
//             </h3>
//             <p className="text-sm italic text-red-900">{Project.techStack}</p>
//             <p className="font-normal text-pretty mt-2 text-gray-900 xl:max-w-[350px] max-w-[300px]">
//               {Project.Description}
//             </p>

//             <a href={Project.Link} target="blank">
//               <button className="bg-red-900 mt-4 p-2 text-skin group inline-flex gap-2 hover:bg-brown transition-all duration-1000 ease-in-out ">
//                 {" "}
//                 {Project.type}{" "}
//                 <AiOutlineArrowRight className="mt-1 group-hover:ml-2  transition-all duration-300 ease-in-out  " />
//               </button>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default Projects;
