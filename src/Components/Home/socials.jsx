import { SocialMedia } from "../SocialIcons/Social";
import { useTheme } from "../../context/ThemeContext";
import React, { useState } from "react";

export default function Socials() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {SocialMedia.map((Social) => (
        <a
          href={Social.Link}
          target="blank"
          // hint
          key={Social.Link}
          aria-label={Social.Name}
          style={{ cursor: "pointer" }}
          title={Social.Name}
          className={`flex text-white align-middle gap-2 content-center justify-items-center items-center ${theme === "dark" ? "" : ""} py-2 px-4 rounded-md text-sm ${Social.backgroundColor}`}
        >
          {Social.Icon} {Social.Name}
        </a>
      ))}
    </div>
  );
}
