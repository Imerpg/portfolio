

import Image from "next/image";

export default function Profile() {
  return (
    <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-fuchsia-300 to-blue-500 p-1 shadow-lg">
      <div className="bg-slate-300/50 p-5 rounded-md flex flex-col justify-center-safe backdrop-blur-lg">
        <div className="flex justify-center mb-4">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="mb-4 rounded-full object-cover w-40 h-40"
          />
        </div>

        <h1 className="text-3xl font-bold">Rémi Constans</h1>
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/Imerpg" className="flex items-center gap-2 text-lg hover:underline" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/remi-constans" className="flex items-center gap-2 text-lg hover:underline" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
            LinkedIn
          </a>
        </div>
      </div>        
    </div>
  );
}