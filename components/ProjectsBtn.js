import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="flex gap-4">
      <Link 
        href="/" 
        download 
        className="group btn rounded-full border active:scale-90 active:bg-primary border-primary bg-red-500 text-white px-6 py-3 flex items-center justify-center overflow-hidden relative  hover:bg-accent w-40"
      >
        <span className="absolute translate-x-0 group-hover:-translate-x-full opacity-100 group-hover:opacity-0 transition-all duration-300">
          Download CV
        </span>
        <HiArrowRight className="w-5 h-5 absolute translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </Link>
      
      <Link
        href="/work" 
        className="group btn rounded-full border active:scale-90 active:bg-primary border-primary  text-white px-6 py-3 flex items-center justify-center overflow-hidden relative w-40 hover:bg-accent hover:text-white"
      >
        <span className="absolute translate-x-0 group-hover:-translate-x-full opacity-100 group-hover:opacity-0 transition-all duration-300">
          My Projects
        </span>
        <HiArrowRight className="w-5 h-5 absolute translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;