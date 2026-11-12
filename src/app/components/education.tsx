import { educationData } from "@/data/education.json";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
    return ( 
        <section id="education" className="w-full py-12 px-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Mes Formations
                    </h2>
                    <p className="text-slate-400 mt-1.5 text-sm md:text-base">
                        Mon parcours académique et mes diplômes.
                    </p>
                </div>

                {/* Conteneur avec la ligne verticale pointillée en arrière-plan */}
                <div className="relative border-l border-dashed border-white/20 ml-4 md:ml-6 space-y-8">
                    {educationData.map((edu) => (
                        <div key={edu.id} className="relative pl-6 md:pl-8">
                            {/* Petit point indicateur sur la ligne pointillée */}
                            <div className="absolute -left-[7px] top-6 w-3.5 h-3.5 rounded-full bg-blue-500/80 border-4 border-[#0a0a0c] shadow-md" />

                            {/* La box du diplôme */}
                            <div className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 transition-all hover:bg-white/10 hover:border-white/20 shadow-lg flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                                <div className="p-3 rounded-xl bg-white/5 text-blue-400 border border-white/5 shrink-0">
                                    <FaGraduationCap size={24} />
                                </div>

                                <div className="flex flex-col w-full">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                                        <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                                            {edu.title}
                                        </h3>
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/10 text-slate-300 bg-white/5 self-start sm:self-auto">
                                            {edu.period}
                                        </span>
                                    </div>

                                    <p className="text-xs md:text-sm font-semibold text-blue-400 mb-2">
                                        {edu.subtitle} {edu.school ? `• ${edu.school}` : ''}
                                    </p>

                                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal opacity-90">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}