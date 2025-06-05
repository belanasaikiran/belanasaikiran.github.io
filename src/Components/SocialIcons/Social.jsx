import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { SiUnsplash } from "react-icons/si";

export const SocialMedia = [
  {
    Name: "X / Twitter",
    Link: "https://x.com/saikiranbelana",
    Icon: <GrTwitter />,
    backgroundColor: "bg-[#1DA1F2]", // Twitter/X blue
  },
  {
    Name: "LinkedIn",
    Link: "https://www.linkedin.com/in/belanasaikiran/",
    Icon: <ImLinkedin />,
    backgroundColor: "bg-[#0077B5]", // LinkedIn blue
  },
  {
    Name: "GitHub",
    Link: "https://github.com/belanasaikiran",
    Icon: <GoMarkGithub />,
    backgroundColor: "bg-[#181717]", // GitHub black
  },

  // {
  //   Name: "Instagram",
  //   Link: "https://www.instagram.com/copycharming/",
  //   Icon: <GrInstagram />,
  //   backgroundColor: "bg-gray-900",
  // },

  {
    Name: "Unsplash",
    Link: "https://unsplash.com/@belanasaikiran",
    Icon: <SiUnsplash />,
    backgroundColor: "bg-[#111111]", // Unsplash dark
  },
];
