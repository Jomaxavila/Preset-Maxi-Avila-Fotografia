import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social-media">
        <a href="https://wa.me/549351333639" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FontAwesomeIcon icon={faWhatsapp} className="footer__icon" />
        </a>
        <a href="https://www.facebook.com/maxiavilafotografia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} className="footer__icon" />
        </a>
        <a href="https://www.linkedin.com/in/maxiavila" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} className="footer__icon" />
        </a>
        <a href="https://www.instagram.com/maxiavilafotografia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className="footer__icon" />
        </a>
      </div>
      <div>
        <Link className="copiright" to="https://jomaxavila.github.io/Pagina-Maxi-Avila-Fotografia/" target="_blank" rel="noopener noreferrer"><small>© 2023 Maxi Avila Fotografia</small> </Link>
      </div>
      <div className="footer__links">
        <Link to="/">Home</Link>
      </div>
    </footer>
  );
}

export default Footer;
