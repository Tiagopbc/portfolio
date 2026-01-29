import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio-data";

export function About() {
    const { about, skills } = portfolioData;

    return (
        <section id="about" className="py-24 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:w-2/3"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{about.title}</h2>
                    <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-8" />
                    {about.bio.map((paragraph, index) => (
                        <p key={index} className="text-slate-300 text-lg leading-relaxed mb-6 last:mb-0">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                <skill.icon className="text-blue-400 group-hover:text-blue-300" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="text-slate-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
