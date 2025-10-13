import React, { useState, useRef } from "react";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { SocialMedia } from "../SocialIcons/Social";
import { useTheme } from "../../context/ThemeContext";

const Image =
  "https://avatars.githubusercontent.com/u/88756154?s=400&u=f35449ed30519431779c4e179fa22c04060ad8c9&v=4";

function Contact() {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const command = "saikiranbelana@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div
      id="contact"
      className="text-center text-sm 2xl:text-lg text-accent py-32 "
    >
      <div className="  ">
        {/* <div className={`lg:pl-40 ${theme === "dark" ? "text-white" : ""} `}>
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
        </div>*/}

        <div className="lg:px-0 p-8 text-center">
          <h3
            className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-3xl md:text-4xl font-semibold mb-8`}
          >
            Wanna{" "}
            <span
              className={`${theme === "dark" ? "text-darkAccent" : "text-accent"} underline decoration-4 underline-offset-4`}
            >
              Build
            </span>{" "}
            something together?
          </h3>

          <div className="max-w-md mx-auto space-y-6 flex flex-col md:flex-row md:space-y-0 md:space-x-0 md:gap-4">
            {/* Email Section */}
            <div
              className={`rounded-lg px-6 py-4 transition shadow-lg  ${
                theme === "dark"
                  ? "bg-darkBrownBG text-gray-900 border border-gray-700"
                  : "bg-white text-gray-900 border border-gray-200"
              }`}
            >
              <p
                className={`text-sm font-semibold mb-2 ${theme === "dark" ? "text-gray-50" : "text-gray-900"}`}
              >
                EMAIL
              </p>
              <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-md font-semibold transition text-xs ${
                  theme === "dark"
                    ? "bg-darkAccent text-gray-900 hover:bg-opacity-80"
                    : "bg-uconn text-white hover:bg-opacity-90"
                }`}
              >
                {copied ? "✓ Copied!" : "Copy Email → "}
              </button>
            </div>

            {/* Social Links Section */}
            <div
              className={`rounded-lg px-6 py-4 transition shadow-lg ${
                theme === "dark"
                  ? "bg-darkBrownBG text-white border border-gray-700"
                  : "bg-white text-gray-900 border border-gray-200"
              }`}
            >
              <p
                className={`text-sm font-semibold mb-4 ${theme === "dark" ? "text-darkAccent" : "text-uconn"}`}
              >
                CONNECT WITH ME
              </p>
              <div className="flex justify-center gap-6 text-3xl">
                <a
                  href="https://linkedin.com/in/belanasaikiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`transition hover:scale-110 ${
                    theme === "dark"
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/belanasaikiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className={`transition hover:scale-110 ${
                    theme === "dark"
                      ? "text-sky-400 hover:text-sky-300"
                      : "text-sky-500 hover:text-sky-600"
                  }`}
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/belanasaikiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`transition hover:scale-110 ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
