import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaGithub, FaLinkedin , FaMicrochip} from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { DiGoogleAnalytics } from "react-icons/di";


import projectImage from "@/public/temporarily-unavailable-pic.webp"; //I have to rebuild these projects and take screenshots


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
    icon: React.createElement(DiGoogleAnalytics),
    date: "2023",
  },
  {
    title: "Data Engineer (Volunteer)",
    location: "Seattle, USA",
    description:
      "My team split for the previous role and we were roped into a new org named Fact Finders Pro. I worked here to scrape data from various sources and prepare it for modelling. We also used LLMs and NLP routines.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Software Engineer",
    location: "New Jersey, USA",
    description:
      "I joined a firm specializing in creating emdedded systems and IoT devices for security applications. Some technologies I used were Python, Flask, Embedded-C, SDCC and MySQL",
    icon: React.createElement(FaMicrochip),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Car-Dealership Fleet-Tracker",
    description:
      "Created a web app prototype to showcase how asset deliveries/transportation could be tracked securely",
    tags: ["Java", "Firebase", "MySQL", "Android Studio"],
    imageUrl: projectImage,
  },
  {
    title: "Webscraper & Asset price suggestion system",
    description:
      "Created a webscraper to get data for various grocery items based on public apis, updated daily",
    tags: ["Python", "Selenium", "MS Excel"],
    imageUrl: projectImage,
  },
  {
    title: "Web Admin Application",
    description:
      "Various functions like changing of prices, updating the site, managing orders on the app could be done using the web application",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: projectImage,
  },
  {
    title: "Covid-19 Detection using CT-scans",
    description:
      "Few-shot learning can extract features with very few training CT-scans, making it great for covid detection",
    tags: ["Python", "Tensorflow", "Deep CNN", "Tableau"],
    imageUrl: projectImage,
  },
  {
    title: "Heart disease prediction using ML",
    description:
      "We implemented models with Decision trees, Random Forest, K-Nearest Neighbours, Linear SVM and compared them side-by-side",
    tags: ["Python", "Plotly","Numpy", "Pandas", "Vercel"],
    imageUrl: projectImage,
  },
  {
    title: "Classification in Imbalanced datasets",
    description:
      "Researched and tested this new algorithm to improve accuracy on an imbalanced variation of the MNIST dataset",
    tags: ["Python", "Tensorflow","Numpy", "Pandas","Scikit"],
    imageUrl: projectImage,
  },
  {
    title: "Text chat application over network using C",
    description:
      "Created an application to run a text chat application running over a server and multiple clients, with network sockets, text and multimedia messages",
    tags: ["C"],
    imageUrl: projectImage,
  },
  {
    title: "Indoor GPS using BLE Beacons",
    description:
      "Implemented a system where a user would connect to nearby beacons and then enter a destination to get directions from current location",
    tags: ["Java", "Google Map API", "JSON"],
    imageUrl: projectImage,
  },
  {
    title: "Restaurant Companion App",
    description:
      "Set up an environment so that user could book seats at the restaurant and order starters before they arrived",
    tags: ["Java", "Firebase", "MySQL", "Android Studio"],
    imageUrl: projectImage,
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