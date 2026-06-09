import { FaServer, FaCodeBranch, FaCloud, FaMicrochip } from "react-icons/fa";

export default function SkillsMatrix() {
    const skillCategories = [
        {
            title: "Architecture & Backend",
            icon: <FaServer className="text-blue-400 w-5 h-5" />,
            skills: ["C# (.NET Core, API, WPF)", "PHP (Laravel, Symfony)", "Python", "C++"]
        },
        {
            title: "Frontend & Web",
            icon: <FaCodeBranch className="text-purple-400 w-5 h-5" />,
            skills: ["Angular (TypeScript)", "HTML5 / CSS3", "Tailwind CSS"]
        },
        {
            title: "Data & DevOps",
            icon: <FaCloud className="text-indigo-400 w-5 h-5" />,
            skills: ["MySQL, MariaDB", "Sérialisation JSON", "AWS, Docker, Linux, Git"]
        },
        {
            title: "IoT & Systèmes",
            icon: <FaMicrochip className="text-emerald-400 w-5 h-5" />,
            skills: ["Raspberry Pi", "Node-RED", "Protocoles com.", "Capteurs connectés"]
        }
    ];

    return (
        <section id="skills" className="w-full py-12 px-6 flex flex-col items-center justify-center">

            <div className="w-full max-w-6xl">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Mes Compétences
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 ring-1 ring-white/10 transition-all hover:bg-white/10 flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                                {cat.icon}
                                <h3 className="text-sm md:text-base font-bold text-white">
                                    {cat.title}
                                </h3>
                            </div>

                            <ul className="space-y-2.5 flex-grow">
                                {cat.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="text-xs md:text-sm text-slate-300 flex items-start gap-2">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0"></span>
                                        <span className="opacity-95">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}