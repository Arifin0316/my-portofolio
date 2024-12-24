import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      {/* Elemen Latar Belakang */}
      <Circles />
      <Bulb />

      {/* Konten Utama */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Konten Teks */}
          <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="flex flex-col xl:w-[30vw] text-center xl:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              Portofolio <span className="text-accent">Karya</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto xl:mx-0">
              Jelajahi proyek-proyek terbaru dan karya kreatif saya. Setiap proyek menggambarkan tantangan unik dan solusi inovatif dalam pengembangan web dan desain.
            </p>

            {/* Statistik Portofolio */}
            <div className="hidden xl:flex flex-col gap-y-4 xl:mt-8">
              <div className="flex items-center gap-x-4 text-accent">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm tracking-[2px]">Proyek Selesai</div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm tracking-[2px]">Kepuasan Klien</div>
              </div>
            </div>
          </motion.div>

          {/* Slider */}
          <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      {/* Gradien latar belakang */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default Work;