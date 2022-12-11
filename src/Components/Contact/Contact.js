import React, { useState, useRef } from "react";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import Image from "../../assets/Images/sloth_profile.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import emailjs from "@emailjs/browser";

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
      <div className="grid grid-cols-2 content-center  py-32">
        <div className="lg:pl-40">
          <div className="grid justify-items-center   ">
            <img src={Image} alt="slothy" className="rounded-full w-[300px] " />
          </div>

          <p className="text-3xl py-10"> Saikiran Belana</p>
          <div className="flex gap-2 text-3xl justify-center">
            <a href="https://github.com/belanasaikiran" target="blank">
              <GoMarkGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/saikiran-belana-81004613a/"
              target="blank"
            >
              <ImLinkedin />
            </a>
            <a href="https://www.instagram.com/copycharming/" target="blank">
              <GrInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className=" text-3xl text-left font-semibold ">
            {" "}
            <span className="underline underline-offset-8 decoration-orange-800 decoration-4  ">
              Send a{" "}
            </span>
            message{" "}
          </h3>

          <form
            className="flex flex-col gap-4 py-10 w-[500px] text-xl text-brown"
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
                className=" p-2 bg-orange-800 text-white group inline-flex gap-2 transition duration-500  hover:bg-gray-800 "
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
