import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';

const aboutData = [
  {
    title: 'keahlian',
    info: [
      {
        title: 'Pengembangan Web',
        icons: [<FaHtml5 key="html5" />, <FaCss3 key="css3" />, <FaJs key="js" />, <FaReact key="react" />, <SiNextdotjs key="next" />],
      },
    ],
  },
  {
    title: 'pengalaman',
    info: [
      {
        title: 'pembuatan web toko online yang bernama yumemart',
        stage: '2023',
      },
      {
        title: 'pembuatan web pengelolah keuangan yang bernama finance', 
        stage: '2023',
      },
      {
        title: 'pembuatan web anime yang bernama anime',
        stage: '2022',
      },
    ],
  },
  {
    title: 'pendidikan',
    info: [
      {
        title: 'Mi.Syariatul Islamiya',
        stage: '2012-2017',
      },
      {
        title: 'Mts.Miftahul Ulum',
        stage: '2017-2019',
      },
      {
        title: 'Ma.AlHisi',
        stage: '2019-2022',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar */}
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" className="text-4xl font-bold mb-4">
            Cerita yang menarik <span className="text-accent">melahirkan</span> desain yang menakjubkan.
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Nama saya samsul Arifin saya umur 21 tahun. Saya mepunyai beground web defeloper kusus nya frontend saya belajar secara autodidak saya sangat percaya diri dengan skil yang saya punya.
          </motion.p>
        </div>

        {/* info */}
        <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" className="flex-1">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex ? 'text-accent after:w-full after:bg-accent after:transition-all after:duration-300' : 'after:w-0 after:bg-white'
                } cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:left-0 after:bottom-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
