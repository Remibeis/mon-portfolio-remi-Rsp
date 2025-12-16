import './Accueil.css';
import { Link } from 'react-router-dom';
import tryhackme from '../assets/Bannière Score THM.png';

export default function Accueil() {
  return (
    <div className="accueil-container">
      <div className="cards-container">
        <div className="card">
          <div className="card-content">
            <h2>À propos de moi</h2>
            <h3>Bienvenue sur mon portfolio</h3>
            <p className="subtitle">Je suis étudiant en cybersécurité & développement web</p>
            <p className="description">
              Passionné par le développement web, le hacking éthique et les CTF, j'ai travaillé cette année sur des projets concrets en React, Node.js, Go et Docker.
              Explorez mes projets ou contactez-moi pour en savoir plus.
              Je suis actuellement à la recherche d'une alternance, alors n'hésitez pas !<br />
              Vous pouvez également consulter mon GitHub pour voir les projets que j'ai réalisés.
            </p>
            <div className="card-buttons">
              <Link to="/projects" className="card-btn"><span>Voir mes projets</span></Link>
              <Link to="/contact" className="card-btn contact-btn"><span>Me contacter</span></Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>TryHackMe</h2>
            <h3>Mon profil de sécurité</h3>
            <img src={tryhackme} alt="Profil TryHackMe remibais" className="thm-banner" />
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">7%</span>
                <span className="stat-label">Top performants</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">71</span>
                <span className="stat-label">Chambres complétées</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">13</span>
                <span className="stat-label">Badges obtenus</span>
              </div>
            </div>
            <p className="card-description">
              Cette expérience m'a permis de progresser en sécurité offensive, OSINT, réseaux, et d'acquérir une vraie rigueur d'analyse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


