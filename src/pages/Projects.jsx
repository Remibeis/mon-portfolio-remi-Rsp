import { useState } from "react";
import './Projects.css';

function ProjectCard({ title, description, imageUrl }) {
const [flipped, setFlipped] = useState(false);

return (
    <div
    className={`project-card${flipped ? " flipped" : ""}`}
    onClick={() => setFlipped(!flipped)}
    role="button"
    tabIndex={0}
    onKeyDown={e => { if (e.key === "Enter") setFlipped(!flipped); }}
    >
    <div className="card-front">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    <div className="card-back">
        <img src={imageUrl} alt={`Image du projet ${title}`} />
    </div>
    </div>
);
}

export default function Projects() {
const projects = [
    {
    title: "Rocket",
    description: "Projet d’animation interactive en JavaScript avec interface HTML/CSS. L’utilisateur peut déclencher le décollage ou l’annulation du lancement d’une fusée. Dynamique, responsive, et animé avec des éléments graphiques personnalisés",
    imageUrl: "/images/Rocketimg.png.png", 
    },
    {
    title: "Projet Infra (API Backend)",
    description: "Développement d’une API REST en Node.js avec Express. Gestion des employés, projets et départements. Documentation Swagger, conteneurisation avec Docker et liaison à une base PostgreSQL.",
    imageUrl: "/images/infra.png",
    },
    {
    title: "Forum Ynov",
    description: "Application fullstack avec React, Node.js, MongoDB et Docker. Gestion des utilisateurs, messages, frontend dynamique et API sécurisée.",
    imageUrl: "/images/imgforum.png",
    },
    {
    title: "Portfolio personnel",
    description: "Portfolio codé en React + Vite avec routing, navbar animée, design sobre et responsive. Intégration des projets et contact avec lien vers CV.",
    imageUrl: "/images/portefolio.png",
    },
    {
    title: "Groupie Tracker (Go)",
    description: "Web app en Go récupérant des données d’artistes et affichant leur discographie et concerts. Structure MVC, gestion JSON et templates.",
    imageUrl: "/images/groupietrrrr.png",
    },
    {
    title: "React Quiz",
    description: "Mini-jeu de quiz avec score, logique conditionnelle et transitions. React pur, états dynamiques, composant unique.",
    imageUrl: "/images/actorquiz.png",
    },
    {
    title: "Hangman Web",
    description: "Jeu du pendu en JavaScript pur, responsive, avec logique aléatoire et interface stylée.",
    imageUrl: "/images/hangman.png",
    },
    {
    title: "Défis TryHackMe & OSINT",
    description: "Résolution de challenges en cybersécurité (Follina, Log Analysis, OSINT, stéganographie). Rédaction de writeups et analyse de données.",
    imageUrl: "/images/tryhackme.png",
    },
];

return (
    <div className="projects-container">
    <h1>Mes Projets <p>cliquez sur un projet pour avoir un aperçu</p>
    </h1>
    <div className="projects-list">
        {projects.map((proj, idx) => (
        <ProjectCard
            key={idx}
            title={proj.title}
            description={proj.description}
            imageUrl={proj.imageUrl}
        />
        ))}
    </div>
    </div>
);
}
