import { Code, Server, Database, Layout, Terminal, GraduationCap, Award, BookOpen } from "lucide-react";

export const portfolioData = {
    profile: {
        name: "Seu Nome Aqui",
        role: "Estudante de Engenharia de Software",
        headline: "Transformando código em soluções reais.",
        highlightText: "código",
        description: "Olá! Eu sou um desenvolvedor apaixonado por construir interfaces modernas, sistemas escaláveis e resolver problemas complexos através da tecnologia.",
        avatarUrl: "https://images.unsplash.com/photo-1702726001096-096efcf640b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBtaW5pbWFsaXN0JTIwZGFya3xlbnwxfHx8fDE3NjkxNjUxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        resumeUrl: "#", // URL para download do CV
    },

    about: {
        title: "Sobre Mim",
        bio: [
            "Sou estudante de Engenharia de Software com foco no desenvolvimento de soluções completas e eficientes. Meu interesse pela tecnologia começou cedo e hoje busco constantemente aprimorar minhas habilidades em arquitetura de software, boas práticas de código e experiência do usuário.",
            "Atualmente estou aprofundando meus estudos em desenvolvimento Full Stack, explorando tanto a criação de interfaces interativas quanto a construção de APIs robustas."
        ]
    },

    skills: [
        { name: "Frontend", icon: Layout, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
        { name: "Backend", icon: Server, items: ["Node.js", "Express", "Python", "Java"] },
        { name: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "MySQL"] },
        { name: "Tools", icon: Terminal, items: ["Git", "Docker", "Linux", "VS Code"] },
    ],

    projects: [
        {
            title: "Finance Dashboard",
            description: "Um painel administrativo para controle financeiro pessoal, com gráficos interativos e gerenciamento de transações em tempo real.",
            tags: ["React", "Recharts", "Node.js", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwZGFyayUyMG1vZGV8ZW58MXx8fHwxNzY5MTY1MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            github: "#",
            live: "#"
        },
        {
            title: "Task Master App",
            description: "Aplicativo mobile para gerenciamento de produtividade, permitindo criar tarefas, definir lembretes e organizar projetos.",
            tags: ["React Native", "Firebase", "Redux"],
            image: "https://images.unsplash.com/photo-1750056393356-d1de9d222a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbiUyMG1vZGVybnxlbnwxfHx8fDE3NjkxNjUxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            github: "#",
            live: "#"
        },
        {
            title: "API Gateway Service",
            description: "Um serviço de backend robusto para orquestração de microsserviços, com autenticação JWT e rate limiting implementados.",
            tags: ["Node.js", "Express", "Docker", "Redis"],
            image: "https://images.unsplash.com/photo-1753998943619-b9cd910887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGNvZGUlMjBvbiUyMHNjcmVlbnxlbnwxfHx8fDE3NjkxNjUxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            github: "#",
            live: "#"
        }
    ],

    education: [
        {
            type: "university",
            institution: "Universidade Tecnológica",
            degree: "Bacharelado em Engenharia de Software",
            period: "2022 - 2026 (Previsão)",
            description: "Foco em arquitetura de sistemas, algoritmos avançados e desenvolvimento web moderno. Membro ativo do clube de computação.",
            icon: GraduationCap
        },
        {
            type: "course",
            institution: "Plataforma de Ensino Online",
            degree: "Bootcamp Full Stack Web Developer",
            period: "2023",
            description: "Curso intensivo de 6 meses cobrindo React, Node.js, bancos de dados relacionais e deploy na nuvem.",
            icon: BookOpen
        },
        {
            type: "certification",
            institution: "AWS Training",
            degree: "AWS Certified Cloud Practitioner",
            period: "2024",
            description: "Certificação fundamental sobre conceitos de nuvem, segurança e serviços básicos da AWS.",
            icon: Award
        }
    ],

    contact: {
        email: "contato@exemplo.com",
        phone: "+55 (11) 99999-9999",
        location: "São Paulo, SP - Brasil",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            // twitter: "https://twitter.com",
        }
    }
};
