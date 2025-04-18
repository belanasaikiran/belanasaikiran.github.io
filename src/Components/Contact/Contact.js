import React, { useState, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { SocialMedia } from "../SocialIcons/Social";

const Image =
  "https://avatars.githubusercontent.com/u/88756154?s=400&u=f35449ed30519431779c4e179fa22c04060ad8c9&v=4";

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
        "T1CvxBOfehT8aN-kn",
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          setResponse("An Error Occured!");
        },
      );
  };

  return (
    <div id="contact" className="text-center text-accent py-32 ">
      <div className="text-center  text-3xl my-8 pb-16">
        <h1 className="text-white">
          <span className="bg-accent px-6 py-2 rounded-tl-full rounded-br-full ">
            Contact
          </span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 content-center  ">
        <div className="lg:pl-40">
          <div className="grid justify-items-center ">
            <img
              src={Image}
              alt="slothy"
              className="rounded-full w-[300px] grayscale"
            />
          </div>

          <p className="text-3xl pt-4"> Saikiran Belana</p>
          <p className="text-xl py-4"> Connect with me on social media</p>
          <div className="flex gap-2 text-3xl justify-center">
            {SocialMedia.map((Social) => (
              <a
                href={Social.Link}
                target="blank"
                // hint
                key={Social.Link}
                aria-label={Social.Name}
                style={{ cursor: "pointer" }}
                title={Social.Name}
              >
                {Social.Icon}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:px-0 p-8">
          <h3 className=" text-3xl text-left font-semibold ">
            {" "}
            <span className="underline underline-offset-[10px]  decoration-uconn decoration-4  ">
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
                className=" p-2 bg-uconn  text-white group inline-flex gap-2 transition duration-500  hover:bg-skin hover:text-brown "
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
