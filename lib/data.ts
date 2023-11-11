import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated project",
    location: "dpe",
    description:
      "I graduated after 6 months of studying",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Online with Rabha",
    description:
      "I received training for months",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Online with Rabha",
    description:
      "I received training for months",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "log design",
    description:
      "I worked as designer",
    tags: ["microsoftoffice"],
    imageUrl: corpcommentImg,
  },
  {
    title: "frontend",
    description:
      "i trained in GiZ",
    tags: ["React"],
    imageUrl: rmtdevImg,
  },
  {
    title: "sales",
    description:
      "i workes as sales ",
    tags: ["digetal marketing"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  
] as const;
