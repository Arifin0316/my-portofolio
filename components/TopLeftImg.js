import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 z-10 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50">
      <Image src="/top-left-img.png" width={200} height={200} alt="top-left" />
    </div>
  )
};

export default TopLeftImg;
