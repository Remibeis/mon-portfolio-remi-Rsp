import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/LogoGithub.png';

export default function Navbar() {
return (
    <nav className="navbar">
    <img src={logo} alt="Logo" className="logo" />
    <h2 style={{ marginRight: 'auto' }}>Mon Portfolio</h2>
    <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link> 
    </div>
    </nav>
);
}




