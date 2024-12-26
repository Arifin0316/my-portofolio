import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'anime',
          description: 'ini adalah website list anime favorit saya yang di buat mengunakan javascript dengan fremwork react',
          path: '/anime.jpg',
          link: 'https://arifin-anime.vercel.app/',
        },
        {
          title: 'yumemart',
          path: '/yumemart.jpg',
          description: 'ini adalah website e-commerce yang di buat mengunakan next js dengan fitur payment getway midtrans',
          link: 'https://yumemart.vercel.app/',
        },
        {
          title: 'finance',
          description: 'ini adalah website pengelolah keuangan anda supaya anda dapat mengatur keuangan anda dengan mudah dan efisien',
          path: '/finenst2.jpg',
          link: 'https://finance-app-xi-seven.vercel.app/',
        },
        {
          title: 'water',
          description: 'ini adalah website untuk melihat perkiran cuaca yang terkini di seluruh kota yang ada di indonesia ada dapat melihat perkiran cuaca yang ada di kota anda',
          path: '/water.jpg',
          link: 'https://water-app-nine.vercel.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <Link 
                    href={image.link || '#'} 
                    key={index}
                    target="_blank"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt={image.title} className="object-cover w-full h-full" />
                      <div className="absolute inset-0 bg-gradient-to-l from-black via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white p-4">
                        <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                        {image.description && (
                          <p className="text-sm text-white text-center">{image.description}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;