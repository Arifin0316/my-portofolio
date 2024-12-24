import React, { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop,
} from "react-icons/si";

const aboutData = [
  {
    title: 'keahlian',
    info: [
      {
        title: 'Pengembangan Web',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'Desain UI/UX',
        icons: [
          <FaFigma key="figma" />, 
          <SiAdobexd key="xd" />, 
          <SiAdobephotoshop key="photoshop" />
        ],
      },
    ],
  },
  {
    title: 'penghargaan',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalis',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'pengalaman',
    info: [
      {
        title: 'Desainer UX/UI - Perusahaan XYZ',
        stage: '2012 - 2023',
      },
      {
        title: 'Pengembang Web - Agensi ABC',
        stage: '2010 - 2012',
      },
      {
        title: 'Magang - Perusahaan DEF',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'pendidikan',
    info: [
      {
        title: 'Pengembangan Web - Universitas ABC, LA, CA',
        stage: '2011',
      },
      {
        title: 'Diploma Ilmu Komputer - Institut Teknik AV',
        stage: '2009',
      },
      {
        title: 'Desainer Grafis Bersertifikat - Institut ABC, Los Angeles, CA',
        stage: '2006',
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
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold mb-4"
          >
            Cerita yang menarik <span className="text-accent">melahirkan</span> desain yang menakjubkan.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show" 
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 tahun yang lalu, saya memulai karir sebagai pengembang freelance. Sejak saat itu, saya telah
            mengerjakan berbagai proyek remote untuk berbagai agensi, menjadi konsultan untuk startup, dan
            berkolaborasi dalam pengembangan produk digital untuk keperluan bisnis maupun konsumen.
          </motion.p>
        </div>

        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? 'text-accent after:w-full after:bg-accent after:transition-all after:duration-300'
                    : 'after:w-0 after:bg-white'
                } cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:left-0 after:bottom-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => (
              <div 
                key={i}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">{icon}</div>
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