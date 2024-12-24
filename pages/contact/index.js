/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute -top-1/2 right-0 z-0">
        <Circles />
      </div>

      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full relative z-10">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text & form */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">Connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 w-full"
          >
            {/* group */}
            <div className="flex gap-x-6 w-full">
              <input 
                type="text" 
                placeholder="Name" 
                className="input flex-1" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="input flex-1" 
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="input" 
            />
            <textarea 
              placeholder="Message" 
              className="textarea"
            ></textarea>
            
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="hidden group-hover:block absolute translate-y-[120%] group-hover:translate-y-0 transition-all duration-500 text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

