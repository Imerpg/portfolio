import { projectData } from "@/data/project.json";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="project" className="flex flex-col min-h-screen text-white p-10 snap-start items-center">
            <div className="w-full max-w-6xl">
                <div className="w-fit mb-12 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl ring-1 ring-white/20 p-5">
                    <h2 className="text-3xl font-semibold">Mes projets</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col md:flex-row h-full rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl ring-1 ring-white/20 p-6 transition-all hover:bg-white/15 hover:scale-[1.01]"
                        >
                            {/* Image - Légèrement agrandie pour équilibrer le texte plus gros */}
                            <div className="relative flex-shrink-0 w-full md:w-[160px] h-[160px] mb-4 md:mb-0">
                                <Image
                                    src={project.preview_path ?? "/profile.jpg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-2xl shadow-inner"
                                />
                            </div>

                            <div className="md:ml-8 flex flex-col w-full">
                                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                                    {project.title}
                                </h3>

                                <p className="text-lg text-gray-100/90 leading-relaxed line-clamp-4">
                                    {project.description}
                                </p>

                                {/*<a
                                    href="#"
                                    className="mt-auto pt-6 flex items-center justify-end text-base font-bold hover:text-blue-300 transition-colors group"
                                >
                                    <span>Voir plus</span>
                                    <FaAngleRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                </a>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}