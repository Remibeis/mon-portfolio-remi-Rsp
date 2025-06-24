import './Projects.css';

export default function Projects() {
    return (
    <div className="projects-container">
        <h1>Mes Projets</h1>
        <div className="projects-list">
        <div className="project-card">
        <h2>Rocket</h2>
        <p>Projet d’animation interactive en JavaScript avec interface HTML/CSS. L’utilisateur peut déclencher le décollage ou l’annulation du lancement d’une fusée. Dynamique, responsive, et animé avec des éléments graphiques personnalisés</p>
        </div>
        <div className="project-card">
        <h2>Projet Infra (API Backend)</h2>
        <p>Développement d’une API REST en Node.js avec Express. Gestion des employés, projets et départements. Documentation Swagger, conteneurisation avec Docker et liaison à une base PostgreSQL.</p>
        </div>
        <div className="project-card">
            <h2>Forum Ynov</h2>
            <p>Application fullstack avec React, Node.js, MongoDB et Docker. Gestion des utilisateurs, messages, frontend dynamique et API sécurisée.</p>
        </div>
        <div className="project-card">
            <h2>Portfolio personnel</h2>
            <p>Portfolio codé en React + Vite avec routing, navbar animée, design sobre et responsive. Intégration des projets et contact avec lien vers CV.</p>
        </div>
        <div className="project-card">
            <h2>Groupie Tracker (Go)</h2>
                <p>Web app en Go récupérant des données d’artistes et affichant leur discographie et concerts. Structure MVC, gestion JSON et templates.</p>
        </div>
        <div className="project-card">
            <h2>React Quiz</h2>
            <p>Mini-jeu de quiz avec score, logique conditionnelle et transitions. React pur, états dynamiques, composant unique.</p>
        </div>
        <div className="project-card">
            <h2>Hangman Web</h2>
            <p>Jeu du pendu en JavaScript pur, responsive, avec logique aléatoire et interface stylée.</p>
        </div>
        <div className="project-card">
            <h2>Défis TryHackMe & OSINT</h2>
            <p>Résolution de challenges en cybersécurité (Follina, Log Analysis, OSINT, stéganographie). Rédaction de writeups et analyse de données.</p>
        </div>
        </div>
    </div>
    );
}

