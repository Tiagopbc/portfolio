import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Studies } from "./components/Studies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-blue-500/30">
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Studies />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
