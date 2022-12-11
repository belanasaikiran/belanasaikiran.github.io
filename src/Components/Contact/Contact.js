import React, { useState, useRef } from "react";
import Image from "../../assets/Images/sloth_profile.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { SocialMedia } from "../SocialIcons/Social";

function Contact() {
  const form = useRef();
  const [Response, setResponse] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qg9biiq",
        "template_r3gu58l",
        form.current,
        "T1CvxBOfehT8aN-kn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          setResponse("An Error Occured!");
        }
      );
  };

  return (
    <div className="min-h-screen text-center bg-[#463F1A] text-skin ">
      <div className="grid md:grid-cols-2 grid-cols-1 content-center  py-32">
        <div className="lg:pl-40">
          <div className="grid justify-items-center   ">
            <img src={Image} alt="slothy" className="rounded-full w-[300px] " />
          </div>

          <p className="text-3xl py-10"> Saikiran Belana</p>
          <div className="flex gap-4 text-3xl justify-center">
          {SocialMedia.map((Social)=>(
            <a href={Social.Link} target="blank">
              {Social.Icon}
            </a>
          ))}
          </div>
        </div>

        <div className="lg:px-0 p-8">
          <h3 className=" text-3xl text-left font-semibold ">
            {" "}
            <span className="underline underline-offset-[10px]  decoration-skin decoration-4  ">
              Send a{" "}
            </span>
            message{" "}
          </h3>

          <form
            className="flex flex-col gap-4 py-10 lg:w-[500px] text-xl text-brown"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Name"
              className="border-none caret-[#463F1A] "
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-none caret-[#463F1A] "
              name="email"
            />
            <textarea
              placeholder="Message"
              className="border-none caret-[#463F1A]"
              rows={8}
              name="message"
            ></textarea>

            <p className="text-skin text-left">{Response}</p>

            <div className="text-right transition duration-500 ease-in-out ">
              <button
                className=" p-2 bg-cyan-600  text-white group inline-flex gap-2 transition duration-500  hover:bg-skin hover:text-brown "
                type="submit"
              >
                Send Message{" "}
                <AiOutlineArrowRight className="mt-1  transition duration-500 ease-in-out " />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
