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
    title: 'Pengurus Tingkat Dua Bidang TI',
    location: 'Jakarta, Indonesia',
    description: 'I worked as a front-end developer and UI/UX designer building the website of ANGKATAN 63. I also helped to manage the organization. With my team, we created a website for the organization using a Laravel and Tailwind',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'PKKMB STIS 2023 bidang TI',
    location: 'Jakarta, Indonesia',
    description:
      "I worked as a front-end developer and UI/UX designer building the website to student 'ospek' for new student college of Politeknik Statistika STIS. With my team, we created a website for the organization using a Laravel and Tailwind",
    icon: React.createElement(FaLaravel),
    date: '2023',
  },
  {
    title: 'BEM STIS 2023-2024 unit Digitasi',
    location: 'Jakarta, Indonesia',
    description: 'I worked as a front-end developer and UI/UX designer building the website of BEM Politeknik Statistika STIS. With my team, we created a website for the organisation using Code Igniter and Bootstrap.',
    icon: React.createElement(DiCodeigniter),
    date: '2023 - present',
  },
  {
    title: 'PKL D-IV angkatan 63 bidang TI sub divisi Web monitoring',
    location: 'Jakarta, Indonesia',
    description: 'I worked as a full-stack developer and UI/UX designer building a website to monitor pkl 63 activities . With my team, we created a website for the organization using a Next.js, Express.js and Tailwind',
    icon: React.createElement(FaReact),
    date: '2023 - present',
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
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Bootstrap',
  'MongoDB',
  'GraphQL',
  'Express.js',
  'PostgreSQL',
  'MySQL',
  'PHP',
  'Laravel',
  'CodeIgniter',
  'Python',
  'Figma',
  'Photoshop',
  'Java',
  'Spring Boot',
  'C',
  'DaisyUI',
  'Vue.js',
  'R',
] as const;
