import React, { useState, useRef } from "react";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { SocialMedia } from "../SocialIcons/Social";
import { useTheme } from "../../context/ThemeContext";

const Image =
  "https://avatars.githubusercontent.com/u/88756154?s=400&u=f35449ed30519431779c4e179fa22c04060ad8c9&v=4";

function Contact() {
  const form = useRef();
  const [Response, setResponse] = useState("");
  const { theme } = useTheme();

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
    <div
      id="contact"
      className="text-center text-sm 2xl:text-lg text-accent py-32 "
    >
      <div className="text-center  my-8 pb-16">
        <h1 className="text-white text-xl 2xl:text-3xl">
          <span
            className={`font-[Quantico] ${theme === "dark" ? "bg-darkAccent text-black" : "bg-accent"}  px-6 py-2 rounded-tl-full rounded-br-full `}
          >
            Contact
          </span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 content-center  ">
        <div className={`lg:pl-40 ${theme === "dark" ? "text-white" : ""} `}>
          <div className="grid justify-items-center  ">
            <img
              src={Image}
              alt="slothy"
              className="rounded-full w-[300px] grayscale"
            />
          </div>

          <p className="text-3xl pt-4"> Saikiran Belana</p>
          <p
            className={`pt-2 pb-4 ${theme === "dark" ? "text-darkAccent" : ""}`}
          >
            {" "}
            Connect with me on social media
          </p>
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
          <h3
            className={`${theme === "dark" ? "text-darkAccent" : ""} text-3xl text-left font-semibold `}
          >
            {" "}
            <span
              className={`decoration-uconn ${theme === "dark" ? "text-white decoration-white" : ""} underline underline-offset-[10px]   decoration-4  `}
            >
              Send a{" "}
            </span>
            message{" "}
          </h3>

          <form
            className="flex flex-col gap-4 py-10 lg:w-[500px] text-brown"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Name"
              className={`${theme === "dark" ? "bg-gray-800 text-gray-50 border-darkAccent" : ""} border-accent rounded-xl caret-[#463F1A]`}
              name="name"
            />
            <input
              type="email"
              placeholder="Your email address"
              className={`${theme === "dark" ? "bg-gray-800 text-gray-50 border-darkAccent" : ""} border-accent rounded-xl caret-[#463F1A]`}
              name="email"
            />
            <textarea
              placeholder="Message"
              className={`${theme === "dark" ? "bg-gray-800 text-gray-50 border-darkAccent" : ""} border-accent rounded-xl caret-[#463F1A]`}
              rows={8}
              name="message"
            ></textarea>

            <p className="text-skin text-left">{Response}</p>

            <div className="text-right transition duration-500 ease-in-out ">
              <button
                className={` ${theme === "dark" ? "bg-darkAccent text-black" : "bg-uconn"} p-2  text-white group inline-flex gap-2 transition duration-500  hover:bg-skin hover:text-brown `}
                type="submit"
              >
                Send Message{" "}
                <AiOutlineArrowRight className="mt-1  transition duration-500 ease-in-out " />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden  grid-cols-2 justify-around">
        {/* LinkedIn Badge */}
        <div
          className="badge-base LI-profile-badge flex justify-center mb-10"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="HORIZONTAL"
          data-vanity="belanasaikiran"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/belanasaikiran?trk=profile-badge"
          >
            {" "}
          </a>
        </div>
        {/* Github Badge */}
        <div className="border h-[300px] w-[280px] rounded-lg">
          <p className="flex min-w-full items-center text-2xl font-semibold bg-brown-500">
            GitHub{" "}
            <span>
              <AiFillGithub />
            </span>
          </p>
          <div className="flex flex-col px-4 py-4">
            <img
              src="https://github.com/belanasaikiran.png"
              alt="Belana Sai Kiran"
              className="w-[50px] h-[50px] object-cover rounded-full "
            />
            <bold className="font-bold text-black text-[16px]">
              Sai Kiran Belana
            </bold>
            <a
              className="rounded-xl border-4 px-3 py-2 font-bold"
              href="https://github.com/belanasaikiran"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
