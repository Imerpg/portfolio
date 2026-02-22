import Image from "next/image";
import { FaAngleDown, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen snap-start relative">
            <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-xl shadow-2xl ring-1 ring-white/20 transition-all hover:bg-white/15">
                <div className="p-8 md:p-12 flex flex-col items-center">
                    <div className="relative p-1 rounded-full bg-gradient-to-b from-white/50 to-transparent">
                        <Image
                            src="/profile.jpg"
                            alt="Photo de Rémi Constans"
                            width={160}
                            height={160}
                            className="rounded-full object-cover w-40 h-40 border-2 border-white/20 shadow-lg"
                            priority
                        />
                    </div>

                    <h1 className="mt-6 text-4xl font-bold text-white tracking-tight">
                        Rémi Constans
                    </h1>
                    <p className="text-blue-200/80 font-medium mt-2">Développeur Fullstack</p>

                    <div className="mt-8 flex gap-6">
                        <a
                            href="https://github.com/Imerpg"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            <FaGithub size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/remi-constans"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            <FaLinkedin size={32} />
                        </a>
                    </div>
                </div>
            </div>

            <a
                href="#project"
                className="absolute bottom-10 animate-bounce cursor-pointer p-4 rounded-full bg-white/10 backdrop-blur-lg shadow-xl ring-1 ring-white/20 hover:bg-white/20 transition-all"
                aria-label="Voir mes projets"
            >
                <FaAngleDown size={28} className="text-white"/>
            </a>
        </section>
    );
}