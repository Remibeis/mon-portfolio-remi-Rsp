import './Accueil.css';
import { Link } from 'react-router-dom';
import tryhackme from '../assets/Bannière Score THM.png';

export default function Accueil() {
return (
    <div className="accueil-container">
    <h1>Bienvenue sur mon portfolio</h1>
    <h2>Je suis étudiant en cybersécurité & développement web</h2>
    <p>
        Passionné par le développement web, le hacking éthique et les CTF, j’ai travaillé cette année sur des projets concrets en React, Node.js, Go et Docker.
        Explorez mes projets ou contactez-moi pour en savoir plus.
        Je suis actuellement à la recherche d'une alternance, alors n'hésitez pas !<br />
        Vous pouvez également consulter mon GitHub pour voir les projets que j’ai réalisés.
    </p>
    <div className="accueil-buttons">
        <Link to="/projects" className="accueil-btn">Voir mes projets</Link>
        <Link to="/contact" className="accueil-btn">Me contacter</Link>
    </div>

    <div className="thm-section">
        <h2>Mon niveau TryHackMe</h2>
        <img src={tryhackme} alt="Profil TryHackMe remibais" className="thm-banner" />
        <p>
        Classé dans les <strong>7% les plus performants</strong> sur TryHackMe, j’ai terminé <strong>71 chambres</strong> et obtenu <strong>13 badges</strong>.
        Cela m’a permis de progresser en sécurité offensive, OSINT, réseaux, et d’acquérir une vraie rigueur d’analyse.
        </p>
    </div>
    </div>
);
}


