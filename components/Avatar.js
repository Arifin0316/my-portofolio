import Image from "next/image";


const Avatar = () => {
  return (
    <div className="hiden xl:flex xl:max-w-none">
      <Image src="/avatar.png" width={737} height={678} alt="avatar" />
    </div>
  )
};

export default Avatar;
