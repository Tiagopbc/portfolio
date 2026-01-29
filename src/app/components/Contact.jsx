import { motion } from "motion/react";
import { Mail, MapPin, Send, Phone, CheckCircle } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data/portfolio-data";

export function Contact() {
    const { contact } = portfolioData;
    const [formState, setFormState] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
            alert("Obrigado pelo contato! Esta é uma demonstração.");
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Entre em Contato</h2>
                    <div className="w-20 h-1.5 bg-blue-500 rounded-full mb-8 mx-auto" />
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Tem um projeto em mente ou quer apenas bater um papo sobre tecnologia? Sinta-se à vontade para me enviar uma mensagem.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-6">Informações</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm mb-1">Email</p>
                                        <a href={`mailto:${contact.email}`} className="text-white hover:text-blue-400 transition-colors font-medium">{contact.email}</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm mb-1">Telefone</p>
                                        <span className="text-white font-medium">{contact.phone}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm mb-1">Localização</p>
                                        <span className="text-white font-medium">{contact.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                            <h3 className="text-xl font-bold mb-2">Estou disponível para freelance!</h3>
                            <p className="text-blue-100 mb-0">Se você precisa de um site ou aplicação web, vamos conversar.</p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-slate-400 text-sm font-medium mb-2">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Seu nome"
                                    required
                                    disabled={formState !== 'idle'}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-slate-400 text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="seu@email.com"
                                    required
                                    disabled={formState !== 'idle'}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-2">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Como posso ajudar?"
                                    required
                                    disabled={formState !== 'idle'}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formState !== 'idle'}
                                className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group ${formState === 'success'
                                    ? 'bg-green-600 text-white cursor-default'
                                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {formState === 'idle' && (
                                    <>
                                        Enviar Mensagem
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                                {formState === 'submitting' && "Enviando..."}
                                {formState === 'success' && (
                                    <>
                                        Mensagem Enviada!
                                        <CheckCircle size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
