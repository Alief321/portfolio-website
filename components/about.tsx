'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from <b>SMAN 1 Cilacap</b>, I continued my studies at <b>Politeknik Statistika STIS</b>. I decided to pursue my passion for programming. <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack is <span className="font-medium">Laravel, Spring, Next.js, Node.js, and MySql</span>. I am
        also familiar with Python , R, and TypeScript.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and playing with my cat. I also enjoy <span className="font-medium">learning new things</span>. I am currently learning about{' '}
        <span className="font-medium">Statistics</span>. I'm also learning how to play music instrument like guitar, bass, etc.
      </p>
    </motion.section>
  );
}
