import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// data testimonial
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Sarah Wijaya',
    position: 'Pelanggan',
    message:
      'Sangat puas dengan layanan yang diberikan. Tim mereka sangat profesional dan hasil kerjanya melebihi ekspektasi saya. Pengerjaan proyek tepat waktu dan komunikasinya sangat baik.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Diana Putri',
    position: 'Pelanggan',
    message:
      'Desain website yang dihasilkan sangat elegan dan sesuai dengan brand kami. Proses pengerjaannya sangat terstruktur dan mereka selalu terbuka terhadap feedback yang kami berikan.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Budi Santoso',
    position: 'Pelanggan',
    message:
      'Kolaborasi yang luar biasa dengan tim yang sangat kompeten. Mereka tidak hanya mengerjakan sesuai permintaan, tapi juga memberikan saran-saran yang membangun untuk proyek kami.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="h-[350px] sm:h-[400px] md:h-[450px] xl:h-[400px] w-full"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index} className="pb-12">
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-6 md:px-12 xl:px-16">
              {/* avatar, nama, posisi */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center items-center text-center">
                  {/* avatar dengan border dan shadow */}
                  <div className="mb-4 relative">
                    <div className="w-[120px] h-[120px] relative">
                      <Image 
                        src={person.image} 
                        fill
                        objectFit="cover"
                        alt={person.name}
                        className="rounded-full ring-4 ring-accent/20"
                      />
                    </div>
                    {/* Lingkaran dekoratif */}
                    <div className="absolute -z-10 top-2 left-2 w-[120px] h-[120px] rounded-full bg-accent/10"></div>
                  </div>
                  {/* nama dengan gradien */}
                  <div className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-1">
                    {person.name}
                  </div>
                  {/* posisi */}
                  <div className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                    {person.position}
                  </div>
                </div>
              </div>

              {/* kutipan dan pesan */}
              <div className="flex-1 flex flex-col justify-center relative md:pl-10 xl:pl-20 mt-6 md:mt-0">
                {/* Garis vertikal */}
                <div className="hidden md:block absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-accent/20 via-gray-200 to-transparent"></div>
                
                {/* Ikon kutipan */}
                <div className="mb-4 flex items-center">
                  <BsArrowRight className="text-3xl text-accent" />
                  <div className="w-8 h-[1px] bg-accent ml-4"></div>
                </div>

                {/* Pesan dengan style */}
                <div className="text-base md:text-lg leading-relaxed font-light text-gray-200 italic relative">
                  {/* Tanda kutip */}
                  <span className="absolute -left-4 -top-2 text-4xl text-accent/20"></span>
                  {person.message}
                  <span className="absolute -right-4 -bottom-2 text-4xl text-accent/20"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;