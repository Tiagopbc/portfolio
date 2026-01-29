import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { portfolioData } from "../data/portfolio-data";

export function Projects() {
    const { projects, contact } = portfolioData;

    return (
        <section id="projects" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projetos em Destaque</h2>
                    <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-8" />
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Uma seleção de alguns dos trabalhos que desenvolvi durante minha jornada acadêmica e profissional.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all group hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto border-t border-slate-800 pt-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                                    >
                                        <Github size={16} />
                                        Código
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors ml-auto"
                                    >
                                        <ExternalLink size={16} />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href={contact.social.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg transition-colors"
                    >
                        <Github size={18} />
                        Ver mais no GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
