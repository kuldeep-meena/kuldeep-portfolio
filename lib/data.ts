import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TravelImg from "@/public/latest.png";
import homepageImg from "@/public/homepage.png";
import cryptocurrencyTracker from "@/public/Cryptocurrency-tracker.png"
import trelloImg from "@/public/trello.png";
import profile from "@/public/Screenshot (28).png"
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
  {
    title: "Cryptocurrency Tracker",
    description:"Developed a web application for monitoring real-time prices of all cryptocurrency coins over the past 24 hours.",
    
    tags: ["React","Chartjs", "Coin Gecko API","Firebase"],
    imageUrl: cryptocurrencyTracker ,
    projectLink: 'https://cryptocurrency-tracker-black.vercel.app/',
    githubLink: 'https://github.com/kuldeep-meena/Cryptocurrency-tracker',
  },
  {
    title: "Coding Profile",
    description:"Kept up a streak of participating in 127 contests,Secured a Global Rank 162 out of 29463 participants in Leetcode Weekly Contest 393.",
    
    tags: ["C++","Data structures and Algorithms"],
    imageUrl: profile,
    projectLink: '',
    githubLink: 'hhttps://leetcode.com/u/Kuldeep_Meena/',
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS",
  "JavaScript(ES6)",
  "TypeScript",
  "ReactJs",
  "Next.js",
  "Github",
  "Tailwind",
  "Java",
  "C++",
  "Data Structures And Algorithms",
  "Framer Motion",
  "Object Oriented Programming"
] as const;