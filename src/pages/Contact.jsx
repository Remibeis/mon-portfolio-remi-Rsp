import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      value: 'RemiBeis12@protonmail.com',
      icon: '✉️',
      action: () => copyToClipboard('RemiBeis12@protonmail.com', 'email'),
      link: 'mailto:RemiBeis12@protonmail.com'
    },
    {
      id: 'phone',
      title: 'Téléphone',
      value: '06.15.80.16.58',
      icon: '📱',
      action: () => copyToClipboard('06.15.80.16.58', 'phone'),
      link: 'tel:+33615801658'
    },
    {
      id: 'github',
      title: 'GitHub',
      value: 'github.com/Remibeis',
      icon: '🐙',
      link: 'https://github.com/Remibeis'
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Me Contacter</h1>
        <p className="contact-subtitle">Prêt à collaborer ou discuter d'une opportunité ?</p>
      </div>

      <div className="contact-methods">
        {contactMethods.map((method) => (
          <div key={method.id} className="contact-card">
            <div className="contact-icon">{method.icon}</div>
            <h3>{method.title}</h3>
            <p className="contact-value">{method.value}</p>
            <div className="contact-actions">
              {method.action && (
                <button 
                  className="contact-btn copy-btn"
                  onClick={method.action}
                  title="Copier"
                >
                  {copied === method.id ? '✓ Copié!' : 'Copier'}
                </button>
              )}
              <a href={method.link} target="_blank" rel="noopener noreferrer" className="contact-btn link-btn">
                {method.id === 'github' ? 'Visiter' : 'Ouvrir'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2>Mon CV</h2>
        <p className="cv-description">Téléchargez mon CV complet pour découvrir mon parcours détaillé et mes expériences</p>
        <a href="/About Me (7).pdf" download className="cv-button">
          <span>📥 Télécharger mon CV</span>
        </a>
      </div>

      <div className="contact-footer">
        <p className="footer-text">Je réponds généralement dans les 24h</p>
      </div>
    </div>
  );
}

