import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from "react-icons/rx";
import { FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Kami membantu membangun identitas merek yang kuat dan berkesan.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Desain',
    description: 'Menciptakan desain visual yang menarik dan sesuai kebutuhan Anda.',
  },
  {
    icon: <RxDesktop />,
    title: 'Pengembangan',
    description: 'Mengembangkan solusi digital yang responsif dan modern.',
  },
  {
    icon: <RxReader />,
    title: 'Konten',
    description: 'Menulis konten yang menarik dan sesuai dengan target audiens Anda.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimasi mesin pencari untuk meningkatkan visibilitas online Anda.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* ikon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* judul & deskripsi */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* panah */}
              <div className="text-3xl">
                <FaArrowRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;