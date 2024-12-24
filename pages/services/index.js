import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      {/* Elemen Latar Belakang */}
      <Circles />
      <Bulb />
      {/* Konten Utama */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Konten Teks */}
          <motion.div 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col xl:w-[30vw] text-center xl:text-left mb-4 xl:mb-0"
          >
            <h2 className="h2 xl:mt-8">
              Layanan Kami <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto xl:mx-0">
              Saya menyediakan berbagai layanan digital untuk membantu mewujudkan ide-ide Anda.
              Dari desain hingga pengembangan, semuanya saya tangani.
            </p>
          </motion.div>

          {/* Slider */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;