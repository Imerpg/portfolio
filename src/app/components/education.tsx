import { educationData } from "@/data/education.json";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
    return ( 
        <section id="education" className="w-full py-12 px-6 flex flex-col items-center justify-center">
            <div>
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Mes Formations
                    </h2>
                    <p className="text-slate-400 mt-1.5 text-sm md:text-base">
                        Mon parcours académique et mes diplômes.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 max-w-4xl mx-auto">
                    {educationData.map((edu) => (
                        <div
                            key={edu.id}
                            className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 ring-1 ring-white/10 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-xl transition-all hover:bg-white/10"
                        >
                            <div className="p-4 rounded-xl bg-white/5 text-blue-400 shrink-0 shadow-inner">
                                <FaGraduationCap size={32} />
                            </div>

                            <div className="text-center md:text-left w-full">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                                        {edu.title}
                                    </h3>
                                    <span className="text-xs font-semibold text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 self-center md:self-auto shrink-0">
                                        {edu.period}
                                    </span>
                                </div>

                                <p className="text-sm font-semibold text-blue-300 mb-3">
                                    {edu.subtitle} {edu.school ? `| ${edu.school}` : ''}
                                </p>

                                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal opacity-95">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}