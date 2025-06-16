import { FaGitAlt, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa"
import { SiJest, SiRedux, SiTypescript } from "react-icons/si"

export const iconInfo = [
    { title: "HTML5", icon: FaHtml5 },
    { title: "Sass", icon: FaSass },
    { title: "JavaScript", icon: FaJs },
    { title: "TypeScript", icon: SiTypescript },
    { title: "React", icon: FaReact },
    { title: "Redux", icon: SiRedux },
    { title: "Jest", icon: SiJest },
    { title: "Git", icon: FaGitAlt },
];

export const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with React and Sass.',
        image: 'https://images.unsplash.com/photo-1726064855870-9a438a9517bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        demo: 'https://yourportfolio.live',
        code: 'https://github.com/yourusername/portfolio',
    },
    {
        title: 'Task Manager App',
        description: 'A task manager with authentication and CRUD operations.',
        image: 'https://images.unsplash.com/photo-1726064855870-9a438a9517bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        demo: '',
        code: 'https://github.com/yourusername/task-manager',
    },
    {
        title: 'E-commerce Store',
        description: 'Fully responsive e-commerce site with cart and payment integration.',
        image: 'https://images.unsplash.com/photo-1726064855870-9a438a9517bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        demo: 'https://ecommercestore.live',
        code: 'https://github.com/yourusername/ecommerce-store',
    },
];

export const skillInfo = [
    'Frontend Developer', 1000,
    'JavaScript & TypeScript Enthusiast', 1000,
    'Building UIs with React', 1000,
    'Version Control with Git', 1000,
    'Testing with Jest', 1000,
    'Frontend Developer | React • JS • TS • Git • Jest', 2000,
]
