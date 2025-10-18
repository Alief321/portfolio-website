import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { FaLaravel } from 'react-icons/fa';
import { DiCodeigniter } from 'react-icons/di';
import webAngkatan from '@/public/web-angkatan.jpg';
import pkkmb from '@/public/pkkmb.jpg';
import bem from '@/public/bem.jpg';
import webmon from '@/public/webmon.jpg';
import descan from '@/public/descan.jpg';
import cmsstis from '@/public/cms-stis.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated From High School',
    location: 'Cilacap, Central Java, Indonesia',
    description: 'I graduated after 2 years of studying. I immediately become a college Student at Politeknik Statistika STIS.',
    icon: React.createElement(LuGraduationCap),
    date: '2021',
  },
  {
    title: 'IT Division Staff - Second-Year Committee',
    location: 'Jakarta, Indonesia',
    description: 'I worked as a front-end developer and UI/UX designer building the website of ANGKATAN 63. I also helped to manage the organization. With my team, we created a website for the organization using a Laravel and Tailwind',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'PKKMB STIS 2023 - IT Division',
    location: 'Jakarta, Indonesia',
    description:
      "I worked as a front-end developer and UI/UX designer building the website to student 'ospek' for new student college of Politeknik Statistika STIS. With my team, we created a website for the organization using a Laravel and Tailwind",
    icon: React.createElement(FaLaravel),
    date: '2023',
  },
  {
    title: 'BEM STIS 2023-2024 - IT Division Staff',
    location: 'Jakarta, Indonesia',
    description: 'I worked as a front-end developer and UI/UX designer building the website of BEM Politeknik Statistika STIS. With my team, we created a website for the organisation using Code Igniter and Bootstrap.',
    icon: React.createElement(DiCodeigniter),
    date: '2023 - 2024',
  },
  {
    title: '(PKL 63) - IT Division, Web Monitoring Subdivision',
    location: 'Jakarta, Indonesia',
    description: 'I worked as a full-stack developer and UI/UX designer building a website to monitor pkl 63 activities . With my team, we created a website for the organization using a Next.js, Express.js and Tailwind',
    icon: React.createElement(FaReact),
    date: '2023',
  },
  {
    title: 'Internship - Software Engineer at BPS Kabupaten Cilacap',
    location: 'Cilacap, Central Java, Indonesia',
    description: 'I worked as a software enginer for building a website for the socio-economic data collection of Maos Lor. With my team, we created a website for the organization using a Next.js and Tailwind',
    icon: React.createElement(FaReact),
    date: '2024',
  },
  {
    title: 'IT Division Staff - Fourth-Year Committee',
    location: 'Jakarta, Indonesia',
    description: 'Responsible for managing technology-related tasks, maintaining systems, and supporting digital initiatives within the organization.',
    icon: React.createElement(FaReact),
    date: '2024 - 2025',
  },
  {
    title: 'Graduation - Politeknik Statistika STIS',
    location: 'Jakarta, Indonesia',
    description: 'I graduated after 4 years of studying at Politeknik Statistika STIS with a Bachelor Degree in Applied Statistics (D-IV).',
    icon: React.createElement(FaReact),
    date: '2025',
  },
] as const;

export const projectsData = [
  {
    title: 'Website Angkatan 63',
    description: 'I worked as a front-end developer and UI/UX designer building the website of ANGKATAN 63.',
    tags: ['Laravel', 'Tailwind', 'MySQL', 'PHP', 'Jquery', 'Figma'],
    imageUrl: webAngkatan,
    tautan: 'https://angkatan63.stis.ac.id/',
  },
  {
    title: 'PKKMB Angkatan 65',
    description: 'I worked as a front-end developer and UI/UX designer building the website to student "ospek" for new student college of Politeknik Statistika STIS',
    tags: ['Laravel', 'Tailwind', 'MySQL', 'PHP', 'Alphine.js', 'Figma'],
    imageUrl: pkkmb,
    tautan: 'https://pkkmb.stis.ac.id/2023',
  },
  {
    title: 'BEM Politeknik Statistika STIS 2023-2024',
    description: 'I worked as a front-end developer and UI/UX designer building the website of BEM Politeknik Statistika STIS.',
    tags: ['Code Igniter4', 'Bootstrap', 'MySQL', 'PHP', 'JQuery', 'Figma'],
    imageUrl: bem,
    tautan: 'https://bem.stis.ac.id/',
  },
  {
    title: 'Web Monitoring PKL D-IV 63 STIS',
    description: 'I worked as a full-stack developer and UI/UX designer building a website to monitor pkl 63 activities.',
    tags: ['Next.js', 'Express.js', 'MySql', 'Node.js', 'Tailwind', 'Figma'],
    imageUrl: webmon,
    tautan: 'https://monitoring.pkl63.stis.ac.id/',
  },
  {
    title: 'Desa Cantik Cilacap (Maos Lor)',
    description: 'I worked as a software enginer for building a website for the socio-economic data collection of Maos Lor.',
    tags: ['Next.js', 'Tailwind', 'MySQL', 'DaisyUI', 'PrismaORM'],
    imageUrl: descan,
    tautan: 'https://desacantik.cilacapkab.go.id/dashboard',
  },
  {
    title: 'CMS Politeknik Statistika STIS',
    description: 'A content management system (CMS) built for Politeknik Statistika STIS to manage and publish digital content efficiently.',
    tags: ['Next.js', 'PayloadCMS', 'PostgreSQL', 'Node.js', 'Tailwind', 'Figma', 'Shadcn UI'],
    imageUrl: cmsstis,
    tautan: 'https://stis-dev.student.stis.ac.id/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Vite',
  'Vue.js',
  'Payload CMS',
  'Git',
  'Sass',
  'Tailwind CSS',
  'Bootstrap',
  'DaisyUI',
  'Shadcn UI',
  'GraphQL',
  'MongoDB',
  'Express.js',
  'PostgreSQL',
  'MySQL',
  'PHP',
  'Laravel',
  'CodeIgniter',
  'Python',
  'Figma',
  'Photoshop',
  'Prisma ORM',
  'Java',
  'Spring Boot',
  'C',
  'R',
] as const;
