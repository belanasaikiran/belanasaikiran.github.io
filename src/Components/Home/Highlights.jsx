import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useTheme } from "../../context/ThemeContext";

export default function Highlights() {
  const { theme } = useTheme();

  const recentHightlights = [
    {
      event: "Llama 4 Hackathon NYC",
      appBuilt: (
        <p>
          Built the{" "}
          <a
            href="https://github.com/belanasaikiran/NYIntelliNews"
            target="_blank"
            rel="noreferrer"
            className={`${theme === "dark" ? "text-darkAccent" : "text-accent"} font-bold`}
          >
            {" "}
            NY IntelliNews{" "}
          </a>
        </p>
      ),
      images: [
        "https://raw.githubusercontent.com/belanasaikiran/highlight-images/refs/heads/main/Llama4NYC-242.jpg",
        "https://raw.githubusercontent.com/belanasaikiran/highlight-images/refs/heads/main/Llama4NYC-129.jpg",
        "https://raw.githubusercontent.com/belanasaikiran/highlight-images/refs/heads/main/Llama4NYC-164.jpg",
      ],
    },
  ];

  return (
    <div className="p-4">
      <h1 className={`font-[Quantico] text-3xl ${theme === "dark" ? "text-darkAccent" : "text-accent"} font-bold px-4`}>
        {" "}
        Recent Highlights
      </h1>

      <PhotoProvider>
        {recentHightlights.map((event, id) => (
          <div key={id}>
            <h1 className={`text-xl font-semibold px-4 ${theme === "dark" ? "text-darkAccent" : "text-accent"}`}>{event.event}</h1>
            <p className="px-4">{event.appBuilt}</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {event.images.map((eachImage, imageId) => (
                <PhotoView key={imageId} src={eachImage}>
                  <img
                    src={eachImage}
                    style={{ objectFit: "cover" }}
                    alt=""
                    className="rounded-xl w-[40%] md:w-[60%] lg:w-[90%]"
                  />
                </PhotoView>
              ))}
            </div>
          </div>
        ))}
      </PhotoProvider>
    </div>
  );
}