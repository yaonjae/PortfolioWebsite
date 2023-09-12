import React from "react";
import IconIndex from "./sidebarIcons/IconIndex";
import IconAbout from "./sidebarIcons/IconAbout";
import IconEducation from "./sidebarIcons/IconEducation";
import IconSkills from "./sidebarIcons/IconSkills";
import IconContact from "./sidebarIcons/IconContact";

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
  { name: "HTML", category: "Front-end", proficiency: 80 },
  { name: "CSS", category: "Front-end", proficiency: 85 },
  { name: "React JS", category: "Front-end", proficiency: 70 },
  { name: "Tailwind CSS", category: "Front-end", proficiency: 80 },
  { name: "JavaScript", category: "Back-end", proficiency: 70 },
  { name: "TypeScript", category: "Back-end", proficiency: 65 },
  { name: "Prisma ORM", category: "Back-end", proficiency: 60 },
  { name: "Express JS", category: "Back-end", proficiency: 70 },
  { name: "MySQL", category: "Back-end", proficiency: 60 },
];

export const educationData = [
  {
    title: "Senior High School",
    date: "AUG 2017 - MAY 2019",
    location: "STI Calbayog",
    address: "Calbayog City, Western Samar",
    count: "1",
  },
  {
    title: "Bachelor of Science in Computer Engineering",
    date: "AUG 2019 - MAY 2023",
    location: "Northwest Samar State University",
    address: "Calbayog City, Western Samar",
    count: "2",
  },
  {
    title: "DX Coding Bootcamp",
    date: "JUL 2023 - AUG 2023",
    location: "DX Lab",
    address:
      "2nd Floor, M.A.R. Bldg., Rosales Boulevard, Umbria St., Calbayog City",
    count: "3",
  },
];

export const userDetails =
  "A dedicated Northwest Samar State University graduate with a Bachelor of Science in Computer Engineering. Experienced in web and mobile app development, and microcontroller programming. Passionate about programming, and systems development. Champion in the STI Calbayog intramural programming competition and chosen to be one of the representatives for the regional programming competition at STI West Negros University. Created a Capstone Project, Android-based Automation System for Homes and Offices, allowing users to control and monitor various appliances, devices, and sensors through an Android application. Additionally, I have developed an Inventory Management System using React JS, Tailwind CSS, Express JS, and Prisma as the final project for the DX Coding Bootcamp.";


export const userEmail = "yaon.jae.2001@gmailcom"

export const userMobileNumber = "+63917 302 6675"

export const userAddress = "San Roque, San Isidro, Northern Samar"