import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";

import corpcommentImg from "@/public/profilephoto.jpg"; //Change these to match projects
import rmtdevImg from "@/public/profilephoto.jpg";
import wordanalyticsImg from "@/public/profilephoto.jpg";

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
] as const;


export const importantLinks = [
  {
    link: "https://github.com/saketdixit",
    Icon: FaGithub,
  },
  {
    link: "https://www.linkedin.com/in/saketdixit/", 
    Icon: FaLinkedin,
  },
  {
    link: "https://drive.google.com/file/d/15JQPjdxOCWLLVX88rGhUnU71ONTIsrAn/view?usp=sharing",
    Icon: SiReaddotcv,
  }
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Computer Science",
    location: "Pune, India",
    description:
      "Graduated with a 8.0 CGPA",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Developer",
    location: "Pune, India",
    description:
      "I worked as a front-end developer for about 2 years at a startup. The stack was PHP, Yii2, Javascript, MySQL and occasional Python",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Masters in Computer Science",
    location: "New York, USA",
    description:
      "Graduated with a 3.6 GPA",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Data Analyst (Volunteer)",
    location: "Seattle, USA",
    description:
      "While looking for a job, I worked part time at an org named Harvard in Tech. Used NoSQL, Tableau, Excel and Python",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Data Engineer (Volunteer)",
    location: "Seattle, USA",
    description:
      "My team split for the previous role and we were roped into a new org named Fact Finders Pro. I worked here to scrape data from various sources and prepare it for modelling. We also used LLMs and NLP routines.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Software Engineer",
    location: "New Jersey, USA",
    description:
      "I joined a firm specializing in creating emdedded systems and IoT devices for security applications. Some Technologies I used were Python, Flask, Embedded-C, SDCC and MySQL",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MySQL",
  "MongoDB",
  "RESTAPI",
  "Flask",
  "Spring Boot",
  "GraphQL",
  "Express",
  "AWS",
  "NLP"
] as const;