import { Github, Linkedin, Twitter } from "lucide-react";
import { portfolioData } from "../data/portfolio-data";

export function Footer() {
    const { contact } = portfolioData;

    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Dev.Portfolio
                        </span>
                        <p className="text-slate-500 mt-2 text-sm">
                            Construindo o futuro, uma linha de código por vez.
                        </p>
                    </div>
                    {/* Social Icons */}
                    <div className="flex space-x-6">
                        <a
                            href={contact.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={contact.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        {/* Example: Uncomment if Twitter is added to portfolio-data */}
                        {/* <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a> */}
                    </div>
                </div>

                <div className="border-t border-slate-900 mt-8 pt-8 text-center text-slate-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados. Design e desenvolvimento com React & Tailwind.</p>
                </div>
            </div>
        </footer>
    );
}
