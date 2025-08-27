import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useTheme } from "../../context/ThemeContext";
import { ImLinkedin } from "react-icons/im";
import { SiGithub } from "react-icons/si";

export default function Highlights() {
  const { theme } = useTheme();

  const recentHightlights = [
    {
      event: "🦙 30 hours. | Sai Kiran Belana",
      description:
        "🦙 30 hours. No sleep. One city. One goal: Build something New Yorkers would..",
      appBuilt: (
        <p>
          Built the{" "}
          <a
            href="https://github.com/belanasaikiran/NYIntelliNews"
            target="_blank"
            rel="noreferrer"
            className={`${theme === "dark" ? "text-darkAccent" : "text-accent"} font-bold`}
          >
            Highlights NY IntelliNews{" "}
          </a>
        </p>
      ),
      // strictly one image only
      img: "https://raw.githubusercontent.com/belanasaikiran/highlight-images/refs/heads/main/Llama4NYC-242.jpg",
      platform: "LinkedIn",
      github: "https://github.com/belanasaikiran/NYIntelliNews",
      icon: <ImLinkedin />,
      PostUrl:
        "https://www.linkedin.com/posts/belanasaikiran_nycintellinews-llama-hackathon-activity-7335656664089432064-dm1w?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHSUQwBm7fuJiHjd3v-ZEEgpDUDLfEdpxU",
    },
    {
      event: "Mood Muse",
      description: "🏆 At Microsoft Hack Night, we took home Best Use of..",
      appBuilt: (
        <p>
          <a
            href="https://github.com/ramchandra3101/Hacakthan-Nyc"
            target="_blank"
            rel="noreferrer"
            className={`${theme === "dark" ? "text-darkAccent" : "text-accent"} font-bold`}
          >
            Mood Muse{" "}
          </a>
        </p>
      ),
      // strictly one image only
      img: "https://github.com/belanasaikiran/belanasaikiran.github.io/blob/2025/src/assets/Images/moodMuse.jpeg?raw=true",
      platform: "LinkedIn",
      github: "https://github.com/ramchandra3101/Hacakthan-Nyc",
      icon: <ImLinkedin />,
      PostUrl:
        "https://www.linkedin.com/posts/hiralchoksi_genai-rag-llm-activity-7333137461750960128-YzEe?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHSUQwBm7fuJiHjd3v-ZEEgpDUDLfEdpxU",
    },

    {
      event: "WayNotify",
      description:
        "A background service that listens for desktop notifications..",
      appBuilt: (
        <p>
          Built the
          <a
            href="https://github.com/ramchandra3101/Hacakthan-Nyc"
            target="_blank"
            rel="noreferrer"
            className={`${theme === "dark" ? "text-darkAccent" : "text-accent"} font-bold`}
          >
            Highlights NY IntelliNews{" "}
          </a>
        </p>
      ),
      // strictly one image only
      img: "https://plus.unsplash.com/premium_photo-1682309524785-cf2288f7b544?q=80&w=2712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      platform: "",
      github: "https://github.com/belanasaikiran/WayNotify",
      icon: <ImLinkedin />,
      PostUrl: "",
    },
  ];

  return (
    <div className="p-4">
      <h1
        className={`font-[Quantico] text-3xl ${theme === "dark" ? "text-darkAccent" : "text-accent"} font-bold`}
      >
        Recent Highlights
      </h1>
      {/* https://www.linkedin.com/embed/feed/update/urn:li:activity:7335656664089432064 */}

      <PhotoProvider>
        {recentHightlights.map((event, id) => (
          <div
            className={`flex w-full max-w-2xl overflow-hidden rounded-lg border my-2 ${
              theme === "dark"
                ? "bg-black text-white border-gray-700"
                : "bg-white text-black border-gray-300"
            }`}
            key={id}
          >
            {/* Image Section */}
            <div className="min-w-[160px] max-w-[160px] h-[120px] overflow-hidden">
              <PhotoView src={event.img}>
                <img
                  src={event.img}
                  alt="Highlight"
                  className="w-full h-full object-cover"
                />
              </PhotoView>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="font-semibold text-sm md:text-base leading-snug mb-1">
                  {event.event}
                </h2>
                <p className="text-xs text-wrap line-clamp-3">
                  {event.description}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-3 text-xs">
                {event.PostUrl && (
                  <a
                    href={event.PostUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[#0A66C2]"
                  >
                    {event.icon}
                    {event.platform.toLowerCase()}
                  </a>
                )}

                {event.github && (
                  <a
                    href={event.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    <SiGithub />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </PhotoProvider>
    </div>
  );
}
