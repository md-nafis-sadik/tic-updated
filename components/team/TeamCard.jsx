import Image from "next/legacy/image";
import Link from "next/link";
import img1 from "@/public/images/client/01.jpg";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { MdOutlineEmail } from "react-icons/md";

function TeamCard() {
  const icons = [
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaLinkedin, link: "https://linkedin.com" },
    { icon: MdOutlineEmail, link: "mailto:example@example.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaXTwitter, link: "https://twitter.com" },
  ];

  return (
    <div
      className="mt-8 pb-5 bg-gradient-to-t from-orange-400 to-orange-700 shadow-xl rounded-lg hover:from-slate-800
    hover:to-slate-800 text-white group transition-all duration-500"
    >
      <div className="rounded-t-lg bg-slate-800 group-hover:bg-orange-500 h-32 overflow-hidden"></div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <Image
          className="object-cover object-center h-32"
          src={img1}
          alt="Woman looking front"
        />
      </div>

      <div className="text-center mt-5 ">
        <h1 className="font-semibold text-lg">Steve Smith</h1>
        <p className="text-gray-200">Freelance Web Designer</p>
      </div>

      <div className="flex justify-center gap-5 p-4 border-t mx-8 mt-2">
        {icons.map(({ icon: Icon, size, link }, index) => (
          <Link
            href={link}
            key={index}
            className="hover:cursor-pointer hover:text-orange-600"
          >
            <Icon size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
