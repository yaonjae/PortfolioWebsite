import React from "react";
import IconIndex from "./sidebarIcons/IconIndex";
import IconAbout from "./sidebarIcons/IconAbout";
import IconEducation from "./sidebarIcons/IconEducation";
import IconSkills from "./sidebarIcons/IconSkills";
import IconContact from "./sidebarIcons/IconContact";
import html from "./skillsIcons/HTML5.png";
import css from "./skillsIcons/CSS3.png";
import js from "./skillsIcons/JavaScript.png";
import ts from "./skillsIcons/TypeScript (1).png";
import php from "./skillsIcons/PHP (1).png";
import tailwind from "./skillsIcons/Tailwind CSS.png";
import bootstrap from "./skillsIcons/Bootstrap.png";
import react from "./skillsIcons/React.png";
import next from "./skillsIcons/Next.js.png";
import vite from "./skillsIcons/Vite.js.png";
import ci from "./skillsIcons/CodeIgniter.png";
import express from "./skillsIcons/Express.png";
import prsima from "./skillsIcons/prisma.848x1024.png";
import mysql from "./skillsIcons/MySQL.png";
import posgresql from "./skillsIcons/PostgresSQL.png";
import git from "./skillsIcons/Git.png";

export const links = [
  {
    href: "#Index",
    icon: <IconIndex />,
    text: "Index",
  },
  {
    href: "#About",
    icon: <IconAbout />,
    text: "About",
  },
  {
    href: "#Education",
    icon: <IconEducation />,
    text: "Education",
  },
  {
    href: "#Skills",
    icon: <IconSkills />,
    text: "Skills",
  },
  {
    href: "#Contact",
    icon: <IconContact />,
    text: "Contact",
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "TypeScript", icon: ts },
  { name: "PHP", icon: php },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "React JS", icon: react },
  { name: "Next JS", icon: next },
  { name: "Vite JS", icon: vite },
  { name: "CodeIgniter", icon: ci },
  { name: "Express JS", icon: express },
  { name: "Prisma ORM", icon: prsima },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: posgresql },
  { name: "Git", icon: git },
];

export const educationData = [
  {
    title: "Senior High School",
    date: "AUG 2017 - MAY 2019",
    location: "STI Calbayog",
    address: "Brgy. Rawis, Calbayog City, Samar",
    description:
      "Enrolled as a ITMAWD (IT in Mobile App and Web Development) strand student. Gained a comprehensive understanding of the concepts of computer programming, scripting languages, build iOS and Android applications, and create and optimize content for mobile and web applications.",
  },
  {
    title: "Bachelor of Science in Computer Engineering",
    date: "AUG 2019 - MAY 2023",
    location: "Northwest Samar State University",
    address: "Rueda St., Calbayog City, Samar",
    description:
      "Studied the analysis and design of digital computers, as well as the analysis, design, and operation of systems. Gained principles from electrical engineering and computer science to design and analyze all hardware and software required for a computer system.",
  },
  {
    title: "DX Coding Bootcamp",
    date: "JUL 2023 - AUG 2023",
    location: "DX Lab",
    address:
      "2nd Floor, M.A.R. Bldg., Rosales Blvd., Umbria St., Calbayog City, Samar",
    description:
      "An 8-week training program designed to teach individuals the essential skills and knowledge needed to become web developers. These programs are typically focused on providing practical, hands-on experience in web development and aim to prepare students for entry-level positions in the field.",
  },
];

export const experienceData = [
  {
    position: "Junior Front-End Developer",
    date: "OCT 2023 - Present",
    location: "Digital Transformation Calbayog",
    address: "2nd Floor, VIRSCO Bldg., Rosales Blvd., Umbria St., Calbayog City",
    projects: [
      {
        title: 'Payruler',
        description: 'Payruler is a comprehensive payroll management system designed to streamline and automate payroll processes for businesses. It offers features such as employee data management, payroll calculations, tax compliance, and reporting, ensuring accuracy and efficiency in handling payroll tasks.'
      },
      {
        title: 'Ebiyahe',
        description: 'Ebiyahe is a travel management platform designed to simplify the booking and planning process for travelers. It offers features such as itinerary creation, booking management, and real-time updates, ensuring a seamless travel experience for users.'
      },
    ]
  }
];

export const userDetails =
  "I am a dedicated web developer with a Bachelor’s degree in Computer Engineering from Northwest Samar State University. While my primary focus is frontend development, I also have experience in backend technologies, allowing me to build full-stack web applications. I am passionate about creating seamless, responsive, and user-friendly interfaces while continuously improving my backend skills. Continuously learning and improving, I am eager to contribute to innovative projects that push the boundaries of web development.";

export const userEmail = "yaon.jae.2001@gmailcom";

export const userMobileNumber = "+63917 302 6675";

export const userAddress = ["San Roque, San Isidro, Northern Samar", "P3, Brgy. Obrero, Calbayog City, Samar (Current)"];
