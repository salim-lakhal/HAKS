// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontAwesome.js'; 


function Footer() {
    return (
        <footer className="footer1">
            Copyright © 2024 LAKHAL Salim. All rights reserved.
        
        <div className="social-icons">
        <a href="https://twitter.com/KRYPTOSPHERE_" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
        <a href="https://www.instagram.com/haks_2023/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a href="https://www.linkedin.com/company/kryptosphere/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
    </div>
    </footer>
    );
}

export default Footer;
