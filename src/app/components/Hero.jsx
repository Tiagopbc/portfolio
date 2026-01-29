import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { portfolioData } from "../data/portfolio-data";

export function Hero() {
    const { profile } = portfolioData;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
                        {profile.role}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Transformando <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{profile.highlightText}</span> em soluções reais.
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                        {profile.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 group"
                        >
                            Ver Projetos
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={profile.resumeUrl}
                            className="px-8 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2"
                        >
                            <Download size={18} />
                            Baixar CV
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                    <ImageWithFallback
                        src={profile.avatarUrl}
                        alt="Workspace"
                        className="object-cover w-full h-full opacity-80"
                    />
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
            </div>
        </section>
    );
}
