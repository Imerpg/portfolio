import { projectData } from "@/data/project.json";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

export default function Projects() {
    return (
        <section id="projects" className="w-full py-12 px-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl">
                
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Mes projets
                    </h2>
                    <p className="text-slate-400 mt-1.5 text-sm md:text-base">
                        Découvrez mes réalisations techniques et projets.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col sm:flex-row h-full rounded-2xl bg-white/5 backdrop-blur-xl shadow-xl ring-1 ring-white/10 p-5 md:p-6 transition-all hover:bg-white/10 hover:scale-[1.01]"
                        >
                            <div className="relative flex-shrink-0 w-full sm:w-[140px] h-[140px] mb-4 sm:mb-0">
                                <Image
                                    src={project.preview_path ?? "/profile.jpg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-xl shadow-md border border-white/5"
                                />
                            </div>

                            <div className="sm:ml-6 flex flex-col w-full justify-between">
                                <div>
                                    <h3 className="text-lg font-bold tracking-tight text-white leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-[11px] font-semibold text-blue-300 mt-1 mb-2.5 tracking-wider uppercase opacity-90">
                                        {project.subtitle}
                                    </p>
                                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal opacity-95">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                                        {project.tags?.map((tag, idx) => (
                                            <span 
                                                key={idx}
                                                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-slate-200 border border-white/10"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {project.link && project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1 group"
                                        >
                                            <span>Voir</span>
                                            <FaAngleRight className="transition-transform group-hover:translate-x-0.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}