import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ProjectBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import ParticlesContainer from '../components/ParticlesContainer';
import Image from 'next/image';

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">
      {/* Particles Background */}
      <div className="w-full h-full absolute translate-z-0">
        <ParticlesContainer />
      </div>

      {/* Main Content Wrapper */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/50 to-black/10">
        <div className="container mx-auto h-full flex flex-col justify-center xl:pt-40 relative">
          {/* Hero Section */}
          <div className="flex flex-col justify-center h-full container mx-auto z-10">
            <motion.div
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              className="text-center xl:text-left"
            >
              {/* Hero Title */}
              <h1 className="text-4xl xl:text-6xl font-bold mb-8 leading-tight">
                Hi, I&apos;m{' '}
                <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Arifin
                </span>
                <br />
                <TypewriterText 
                  text="Full Stack Developer" 
                  speed={150}
                />
              </h1>

              {/* Hero Description */}
              <motion.p
                variants={fadeIn('down', 0.3)}
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-lg text-white/70"
              >
                Passionate about creating beautiful and functional web applications. 
                Specializing in modern web technologies and user-centric design.
              </motion.p>

              {/* Mobile Project Button */}
              <motion.div
                variants={fadeIn('down', 0.4)}
                className="flex justify-center xl:hidden relative"
              >
                <ProjectBtn />
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Project Button */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            className="hidden xl:flex mb-52 z-20"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute right-0 bottom-0 h-full w-full">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
          <Image
            src="/bg-explosion.png"
            width={800}
            height={600}
            alt="Background effect"
            className="hidden xl:block object-cover h-full w-full opacity-50"
            priority
          />
        </div>
      </div>

      {/* Avatar */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        animate="show"
        className="absolute bottom-0 hidden xl:block right-[8%] w-full h-full max-w-[737px] max-h-[678px]"
      >
        <Avatar />
      </motion.div>
    </div>
  );
};

export default Home;