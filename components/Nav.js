import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  { name: 'testimonials', path: '/testimonials', icon: <HiChatBubbleBottomCenterText /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="fixed z-50 w-full xl:w-16 h-max xl:h-screen bottom-0 xl:right-[2%] mt-auto">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Navigation Container */}
        <div className="relative w-full px-4 md:px-40 xl:px-0 py-6 xl:py-8">
          {/* Background Blur Effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm xl:rounded-full" />
          
          {/* Navigation Links */}
          <div className="relative flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-8">
            {navData.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`relative p-3 rounded-full transition-all duration-300 hover:bg-white/20
                  ${pathname === link.path ? 'text-accent' : 'text-white'} 
                  group`}
              >
                {/* Icon */}
                <div className="text-2xl xl:text-xl">
                  {link.icon}
                </div>
                
                {/* Tooltip */}
                <div className="absolute hidden text-accent xl:group-hover:flex right-0 xl:right-14 
                  bg-white px-4 py-1 rounded-lg text-sm capitalize text-dark
                  items-center opacity-0 group-hover:opacity-100 transition-all duration-300
                  before:absolute before:right-[-6px] xl:before:right-auto xl:before:left-[-6px]
                  before:top-1/2 before:-translate-y-1/2 before:border-8
                  before:border-y-transparent before:border-l-white before:border-r-transparent">
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;