import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio-data";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { contact } = portfolioData;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Sobre", href: "#about" },
        { name: "Projetos", href: "#projects" },
        { name: "Estudos", href: "#studies" },
        { name: "Contato", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Dev.Portfolio
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4 border-l border-slate-700 pl-4">
                        <a
                            href={contact.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={contact.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-white text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4 border-t border-slate-800">
                                <a
                                    href={contact.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href={contact.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
