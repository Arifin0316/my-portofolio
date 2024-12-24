import Image from 'next/image';

const Bulb = () => {
  return (
    <div className='absolute bottom-0 -left-32 z-10 mix-blend-color-dodge rotate-12 animate-pulse duration-75 w-[200px] xl:w-[260px]'>
      <Image src={'/bulb.png'} 
      width={260} 
      height={200} 
      alt={'bulb'}
      className='h-full w-full'
       />
    </div>
  );
};

export default Bulb;
