import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className="w-full py-12 px-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl flex flex-col gap-12">
                
                <div className="text-center py-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                        On prend contact ?
                    </h2>
                    <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto mb-8 font-normal">
                        Je suis toujours ouvert à la discussion pour de nouvelles opportunités ou simplement pour échanger sur le dev !
                    </p>

                    <a
                        href="mailto:remiconstans11@gmail.com"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-bold shadow-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all"
                    >
                        <FaEnvelope size={16} />
                        Me laisser un message
                    </a>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
                    <div>
                        © 2026 Rémi Constans. Tous droits réservés.
                    </div>
                    
                    <div className="flex items-center gap-5">
                        <a href="https://github.com/Imerpg" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
                            <FaGithub size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/remi-constans" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}