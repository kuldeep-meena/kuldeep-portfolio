import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecomImg from "@/public/ecom.png";
import jamandplayImg from "@/public/jamandplay.png";
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
    imageUrl: ecomImg,
    projectLink: 'https://ecom-dashboard-five.vercel.app/',
    githubLink: 'https://github.com/kuldeep-meena/Modern-UI-UX-app',
  },
  {
    title: "Jam and Play",
    description:
      "Learn the art and science of creating music, with Jam and Play's comprehensive courses",
    tags: ["React", "TypeScript", "Headless UI", "Next.js", "Tailwind", "Framer-motion"],
    imageUrl: jamandplayImg,
    projectLink: 'https://www.jamandplay.com/',
    githubLink: '',
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
] as const;