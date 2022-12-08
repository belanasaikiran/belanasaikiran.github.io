import React, { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import Image from "../../assets/Images/sloth_profile.jpeg";
import {AiOutlineArrowRight} from "react-icons/ai"

function Contact() {



  return (
    <div className="min-h-screen text-center py-32 grid grid-cols-2 content-center bg-[#463F1A] text-white">
      <div className="lg:pl-40">
        <div className="grid justify-items-center   ">
          <img src={Image} alt="slothy" className="rounded-full w-[300px] " />
        </div>

        <p className="text-3xl py-10"> Saikiran Belana</p>
        <div className="flex gap-2 text-3xl justify-center">
          <GoMarkGithub />
          <ImLinkedin />
          <GrInstagram />
        </div>
      </div>

      <div>
        <h3 className=" text-3xl text-left font-semibold "> <span className="underline underline-offset-8 decoration-orange-800 decoration-4  ">Send a </span>message </h3>

        <form className="flex flex-col gap-4 py-10 w-[500px] text-xl" >
          <input type="text" placeholder="Name" className="border-none caret-[#463F1A] " />
          <input type="email" placeholder="Email" className="border-none caret-[#463F1A] " />
          <textarea  placeholder="Message" className="border-none caret-[#463F1A]" rows={8}></textarea> 
        
        <div className="text-right transition duration-300 ease-in-out">
          <button className=" p-2 bg-orange-800 text-white group inline-flex transition hover:duration-300  hover:bg-gray-800 ">Send Message <AiOutlineArrowRight className="mt-1 hidden group-hover:block group-hover:pl-2 transition group-hover:duration-500 ease-in-out " /> </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
