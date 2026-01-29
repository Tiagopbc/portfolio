import { motion } from "motion/react";
import { BookOpen, Calendar } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";

export function Studies() {
    const { education } = portfolioData;

    return (
        <section id="studies" className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Formação e Estudos</h2>
                    <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-8" />
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Minha trajetória acadêmica e aprendizado contínuo.
                    </p>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-800" />

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot on the timeline */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10 mt-6 md:mt-6" />

                                {/* Content */}
                                <div className="ml-8 md:ml-0 md:w-1/2 px-0 md:px-8">
                                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                                        <div className="flex items-center gap-2 mb-2 text-blue-400">
                                            <item.icon size={20} />
                                            <span className="text-xs font-bold uppercase tracking-wider">{item.type === 'university' ? 'Graduação' : item.type === 'course' ? 'Curso' : 'Certificação'}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                                        <p className="text-slate-300 font-medium mb-3">{item.institution}</p>
                                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                                            <Calendar size={14} />
                                            {item.period}
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
