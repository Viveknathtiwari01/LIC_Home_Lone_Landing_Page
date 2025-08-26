import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <p className="copyright-text">© 2025 Manbhadra Fincorp Ltd.</p>
          <div className="footer-links">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/cookies">Cookies</a>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/manbhadrafincorp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/manbhadrafincorp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/manbhadrafincorp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://manbhadrafincorp.com/free-workshop/#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            <strong>Registered Address:</strong> Office No. 311, 3rd Floor, Royal Ratan, 07, MG Road, Indore - 452001, Madhya Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;