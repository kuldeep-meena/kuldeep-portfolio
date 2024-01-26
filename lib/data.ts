import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TravelImg from "@/public/latest.png";
import homepageImg from "@/public/homepage.png";

import trelloImg from "@/public/trello.png";

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
    title: "Sofware Engineer",
    location: "Persistent Systems, Pune",
    description:
      "Worked as a FrontEnd Engineer . My stack includes React, Next.js, TypeScript, Tailwind and Framer-motion.",
    icon: React.createElement(FaReact),
    date: "June 2022 - Jan 2024",
  },
  {
    title: "Mechanical Engineering",
    location: "Indian Institute of Technology (BHU) Varanasi",
    description:
      "I did my engineering in mechanical. Secured on-campus offer of job as a Software developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  }
] as const;

export const projectsData = [
  {
    title: "Modern UI/UX: Travelling WebSite",
    description:
      " Feature-rich travel app covering everything from a sleek UI to mobile-first best practices. ",
    tags: ["Next.js 14", "Tailwind CSS", "Typescript","React.js"],
    imageUrl: TravelImg,
    projectLink: 'https://modern-ui-ux-app-iota.vercel.app/',
    githubLink: 'https://github.com/kuldeep-meena/Modern-UI-UX-app',
  },
  {
    title: "Youtube Homepage",
    description:
      "Experimented with building a mimic of the YouTube homepage interface.",
    tags: ["TypeScript","Next.js", "Tailwind"],
    imageUrl: homepageImg,
    projectLink: 'https://youtube-homepage-kuldeep-meenas-projects.vercel.app/',
    githubLink: 'https://github.com/kuldeep-meena/Youtube-Homepage',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Java",
  "C++",
  "Data Structures And Algorithms",
  "Framer Motion",
   "Shadcn/ui"
] as const;