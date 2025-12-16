import { useState } from "react";
import './Projects.css';

function ProjectCard({ title, description, imageUrl, category, index }) {
  const [flipped, setFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`project-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === "Enter") setFlipped(!flipped); }}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-front">
        <div className="card-header">
          <span className="project-category">{category}</span>
          <span className="flip-hint">Cliquer pour voir</span>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-footer">
          <span className="card-arrow">→</span>
        </div>
      </div>
      <div className="card-back">
        <img src={imageUrl} alt={`Image du projet ${title}`} />
        <div className="back-overlay">
          <span>Cliquer pour retour</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Rocket",
      category: "JavaScript",
      description: "Projet d'animation interactive en JavaScript avec interface HTML/CSS. L'utilisateur peut déclencher le décollage ou l'annulation du lancement d'une fusée. Dynamique, responsive, et animé avec des éléments graphiques personnalisés",
      imageUrl: "/images/Rocketimg.png.png", 
    },
    {
      title: "Projet Infra (API Backend)",
      category: "Node.js",
      description: "Développement d'une API REST en Node.js avec Express. Gestion des employés, projets et départements. Documentation Swagger, conteneurisation avec Docker et liaison à une base PostgreSQL.",
      imageUrl: "/images/infrafile.png",
    },
    {
      title: "Forum Ynov",
      category: "Fullstack",
      description: "Application fullstack avec React, Node.js, MongoDB et Docker. Gestion des utilisateurs, messages, frontend dynamique et API sécurisée.",
      imageUrl: "/images/imgforum.png",
    },
    {
      title: "Portfolio personnel",
      category: "React",
      description: "Portfolio codé en React + Vite avec routing, navbar animée, design sobre et responsive. Intégration des projets et contact avec lien vers CV.",
      imageUrl: "/images/portefolio.png",
    },
    {
      title: "Groupie Tracker (Go)",
      category: "Go",
      description: "Web app en Go récupérant des données d'artistes et affichant leur discographie et concerts. Structure MVC, gestion JSON et templates.",
      imageUrl: "/images/groupietrrrr.png",
    },
    {
      title: "React Quiz",
      category: "React",
      description: "Mini-jeu de quiz avec score, logique conditionnelle et transitions. React pur, états dynamiques, composant unique.",
      imageUrl: "/images/actorquiz.png",
    },
    {
      title: "Hangman Web",
      category: "JavaScript",
      description: "Jeu du pendu en JavaScript pur, responsive, avec logique aléatoire et interface stylée.",
      imageUrl: "/images/hangman.png",
    },
    {
      title: "Défis TryHackMe & OSINT",
      category: "Cybersécurité",
      description: "Résolution de challenges en cybersécurité (Follina, Log Analysis, OSINT, stéganographie). Rédaction de writeups et analyse de données.",
      imageUrl: "/images/tryhackme.png",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Mes Projets</h1>
        <p className="projects-subtitle">Explorez mes réalisations avec des animations fluides</p>
        <p className="projects-hint">💡 Cliquez sur une carte pour voir l'aperçu</p>
      </div>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            title={proj.title}
            category={proj.category}
            description={proj.description}
            imageUrl={proj.imageUrl}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}
