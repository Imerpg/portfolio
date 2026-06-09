import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
    return (
        <section id="profile" className="w-full py-12 px-6 flex flex-col items-center justify-center">
            <div className="rounded-[2rem] bg-white/5 backdrop-blur-xl shadow-xl ring-1 ring-white/10 max-w-xl w-full p-6 md:p-10 transition-all hover:bg-white/10">
                <div className="flex flex-col items-center text-center">
                    <div className="relative p-1 rounded-full bg-gradient-to-b from-white/30 to-transparent">
                        <Image
                            src="/profile.jpg"
                            alt="Photo de Rémi Constans"
                            width={140}
                            height={140}
                            className="rounded-full object-cover w-32 h-32 md:w-36 md:h-36 border border-white/10 shadow-md"
                            priority
                        />
                    </div>

                    <h1 className="mt-5 text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Rémi Constans
                    </h1>
                    <p className="text-blue-300 font-semibold mt-1.5 text-base md:text-lg">
                        Développeur Concepteur C# / .NET & Web
                    </p>
                    
                    <div className="w-12 h-[1px] bg-white/20 my-4"></div>

                    {/* Accroche */}
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal max-w-md opacity-90">
                        Développeur concepteur fort de 3 ans d'expérience en alternance, je maîtrise le développement d'applications lourdes et de plateformes métier. Rigoureux et passionné par l'optimisation de systèmes, je mets ma polyvalence et mon autonomie au service de vos projets complexes.
                    </p>

                    <div className="mt-6 flex gap-5 items-center">
                        <a href="https://github.com/Imerpg" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/remi-constans" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:remiconstans11@gmail.com" className="text-white/60 hover:text-white transition-colors">
                            <FaEnvelope size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}