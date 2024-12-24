import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import TestimonialSlider from '../../components/TestimonialSlider';
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-primary/30 py-32 relative overflow-hidden">
      {/* Elemen Latar Belakang */}
      <Circles />
      <Bulb />

      {/* Konten Utama */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-y-12 xl:gap-x-16 xl:py-32 items-center">
          {/* Konten Teks */}
          <motion.div 
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="w-full xl:w-[30%] text-center xl:text-left "
          >
            <h2 className="h2 mb-4">
              Kata Klien <span className="text-accent">Kami.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-[474px] mx-auto xl:mx-0">
              Temukan apa yang dikatakan klien kami tentang pengalaman mereka
              bekerja sama dengan kami. Testimoni mereka mencerminkan komitmen kami terhadap keunggulan.
            </p>
            {/* Elemen Dekoratif */}
            <div className="hidden xl:flex items-center gap-x-4">
              <div className="w-[70px] h-[2px] bg-accent"></div>
              <div className="w-4 h-4 rounded-full bg-accent"></div>
            </div>
          </motion.div>

          {/* Kontainer Slider Testimoni */}
          <motion.div 
            variants={fadeIn('left', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="w-full xl:w-[70%] bg-pink-500/[0.03] rounded-3xl backdrop-blur-sm px-6 py-8 xl:px-12"
          >
            <div className="relative">
              {/* Gradien Dekoratif */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-3xl"></div>
              {/* Slider */}
              <TestimonialSlider />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lapisan Gradien */}
      <motion.div 
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute bottom-0 left-0 w-full"
      >
        <div className="h-40 bg-gradient-to-t from-primary/80 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Testimonials;