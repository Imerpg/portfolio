import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {

    var currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="w-full py-12 px-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl flex flex-col gap-8">
                
                <div className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 text-center shadow-lg transition-all">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                        On prend contact ?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-md mx-auto mb-8 font-normal opacity-90">
                        Je suis toujours ouvert à la discussion pour de nouvelles opportunités ou simplement pour échanger sur le dev !
                    </p>

                    <a
                        href="mailto:remiconstans11@gmail.com"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-slate-950 text-base font-bold shadow-lg hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        <FaEnvelope size={18} />
                        Me laisser un message
                    </a>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-slate-400 font-medium">
                    <div>
                        ©{currentYear} Rémi Constans. Tous droits réservés.
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <a 
                            href="https://github.com/Imerpg" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                            title="GitHub"
                        >
                            <FaGithub size={16} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/remi-constans" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                            title="LinkedIn"
                        >
                            <FaLinkedin size={16} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}