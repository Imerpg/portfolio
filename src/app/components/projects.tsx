import { useState, useEffect } from "react";
import { FaAngleRight, FaStar } from "react-icons/fa";
import { GoRepo } from "react-icons/go";

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    language: string | null;
    topics?: string[];
}

function formatRepoName(name: string): string {
    return name
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

const languageColors: { [key: string]: string } = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-400",
    Python: "bg-green-500",
    HTML: "bg-orange-500",
    CSS: "bg-purple-400",
    C: "bg-gray-400",
    "C++": "bg-pink-500",
    "C#": "bg-purple-500",
    Rust: "bg-orange-600",
    PHP: "bg-indigo-400",
    Shell: "bg-emerald-400",
};

export default function Projects() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/imerpg/repos?sort=updated&per_page=12")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setRepos(
                        data.filter((repo: GitHubRepo) => repo.name.toLowerCase() !== "imerpg")
                    );
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur chargement GitHub:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section
            id="projects"
            className="w-full py-12 px-6 flex flex-col items-center justify-center"
        >
            <div className="w-full max-w-6xl">
                <div className="mb-10 md\:text-left">
                    <h2 className="text-2xl md\:text-3xl font-bold text-white tracking-tight">
                        Mes projets
                    </h2>
                    <p className="text-slate-400 mt-1.5 text-sm md\:text-base">
                        Découvrez mes réalisations techniques et dépôts.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center text-slate-400 py-12 text-sm">
                        Chargement des projets depuis GitHub...
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {repos.map((project) => (
                            <a
                                key={project.id}
                                href={project.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 transition-all hover\:bg-white/10 hover\:border-white/20 shadow-lg group"
                            >
                                <div className="flex items-center justify-between gap-3 h-6 mb-3">
                                    <div className="flex items-center gap-2 min-w-0 h-6">
                                        <GoRepo className="shrink-0 text-slate-400 text-base" />
                                        <span className="font-semibold text-blue-400 group-hover\:underline text-base truncate">
                                            {formatRepoName(project.name)}
                                        </span>
                                    </div>
                                    {project.stargazers_count > 0 && (
                                        <div className="flex items-center justify-end gap-1 text-slate-300 text-sm h-6 shrink-0">
                                            <FaStar className="text-yellow-400 text-[0.65rem] translate-y-[-1.5px]" />
                                            <span className="leading-none">{project.stargazers_count}</span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-xs sm\:text-sm text-slate-300 leading-relaxed line-clamp-2 mb-3">
                                    {project.description || "Aucune description fournie."}
                                </p>

                                {project.topics && project.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.topics.map((topic) => (
                                            <span
                                                key={topic}
                                                className="text-[0.65rem] leading-none text-blue-300 bg-blue-500/15 border border-blue-400/20 px-2 py-1 rounded-full"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-auto flex items-center justify-between text-xs pt-3 border-t border-white/5">
                                    {project.language ? (
                                        <span className="flex items-center gap-1.5">
                                            <span
                                                className={`w-3 h-3 rounded-full ${
                                                    languageColors[project.language] || "bg-slate-400"
                                                }`}
                                            />
                                            <span className="text-slate-300">{project.language}</span>
                                        </span>
                                    ) : (
                                        <span />
                                    )}
                                    <span className="text-blue-400 font-medium flex items-center gap-1 group-hover\:translate-x-0.5 transition-transform">
                                        Voir <FaAngleRight className="text-xs" />
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}