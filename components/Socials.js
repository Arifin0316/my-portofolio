import Link from "next/link";
import { RiTwitterLine, RiInstagramLine, RiFacebookBoxLine, RiWhatsappLine, RiGithubLine } from 'react-icons/ri';

const telpon = "082143314286";
const pesan = "halo selamat datang";
const waLink = `https://wa.me/${telpon}?text=${encodeURIComponent(pesan)}`;

const socialsData = [
  { name: 'Instagram', icon: <RiInstagramLine />, href: 'https://www.instagram.com/arifin0316/' },
  { name: 'Facebook', icon: <RiFacebookBoxLine />, href: 'https://www.facebook.com/profile.php?id=61550034904693' },
  { name: 'Twitter', icon: <RiTwitterLine />, href: '#' },
  { name: 'WhatsApp', icon: <RiWhatsappLine />, href: waLink },
  { name: 'GitHub', icon: <RiGithubLine />, href: 'https://github.com/Arifin0316' },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialsData.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative hover:text-accent transition-all duration-300 group"
        >
          {/* Icon */}
          <div className="text-2xl">{social.icon}</div>

          {/* Tooltip */}
          <div className="absolute bottom-[-39px] left-1/2 -translate-x-1/2 bg-white text-dark text-sm font-medium px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
            {social.name}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-8 border-b-white border-x-transparent border-t-transparent"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
