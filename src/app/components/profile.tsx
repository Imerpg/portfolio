

import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen snap-start">
      <div className="rounded-2xl bg-gray-200/20 backdrop-blur-lg shadow-xl ring-1 ring-white/10">
        <div className="p-6 flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={160}
            height={160}
            className="mb-4 rounded-full object-cover w-40 h-40 border-white/30"
          />
          <h1 className="text-3xl font-bold text-white">Rémi Constans</h1>

          <div className="mt-6 flex gap-4">
            <a href="https://github.com/Imerpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                width={28}
                height={28}
              />
            </a>
            <a href="https://www.linkedin.com/in/remi-constans" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                width={28}
                height={28}
              />
            </a>
          </div>
        </div>
      </div>
      <a href="#project" className="cursor-pointer hover:-translate-y-1 transition-transform duration-300 p-2 m-10 rounded-2xl bg-gray-200/20 backdrop-blur-lg shadow-xl ring-1 ring-white/10 flex justify-center">
            <FaAngleDown size={24} className="text-white"/>
      </a>
    </div>
  );
}