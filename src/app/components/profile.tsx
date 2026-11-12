import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
    return (
        <section id="profile" className="w-full h-screen py-12 px-6 flex flex-col items-center justify-center">
            <div className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg max-w-6xl w-full p-6 md:p-10 transition-all">
                <div className="flex flex-col items-center text-center">
                    <div className="relative p-1 rounded-full bg-white/10 border border-white/5 shadow-inner">
                        <Image
                            src="/profile.png"
                            alt="Photo de Rémi Constans"
                            width={140}
                            height={140}
                            className="rounded-full object-cover w-32 h-32 md:w-36 md:h-36"
                            priority
                        />
                    </div>

                    <h1 className="mt-5 text-xl md:text-4xl font-bold text-white tracking-tight">Rémi Constans</h1>

                    <p className="text-blue-400 font-semibold mt-1.5 text-lg md:text-xl">
                        Développeur Full Stack & Concepteur d'Applications
                    </p>

                    <div className="w-12 h-[1px] bg-white/10 my-4"></div>

                    <p className="text-slate-300 text-lg md:text-xl text-justify leading-relaxed font-normal max-w-md opacity-90">
                        Développeur concepteur fort de 3 ans d'expérience en alternance, je maîtrise le développement
                        d'applications lourdes et de plateformes métier. Rigoureux et passionné par l'optimisation de
                        systèmes, je mets ma polyvalence et mon autonomie au service de vos projets complexes.
                    </p>

                    <div className="mt-6 flex gap-3 items-center">
                        <a
                            href="https://github.com/Imerpg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                            title="GitHub"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/remi-constans"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                            title="LinkedIn"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href="mailto:remiconstans11@gmail.com"
                            className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                            title="Email"
                        >
                            <FaEnvelope size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
