import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <img src={require("../assets/images/prdogr.png")} className="prdog" alt='Logo'/>
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100084255607426" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} color='black' />
          </a>
          <a href="https://www.linkedin.com/company/petsrepublic/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} color='black' />
          </a>
          <a href="https://www.instagram.com/petrepublic.ae?igsh=cXI3MTd0a3B0OXZs" className="InstaIcon" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} color='black'/>
          </a>
          <a href="https://www.tiktok.com/@petrepublic.ae?_t=8jeQz5MO6du&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={32} color='black'/>
          </a>
        </div>
        <div className="footer-links">
          <p><FaPhone /> : +971 50 116 8480</p>
          <a href="http://legal.petrepublic.ae/Privacy-Policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="http://legal.petrepublic.ae/Terms-and-Conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
          <a href="/onboarding">Grow With Us</a>
          <a href="#mailing-list" onClick={(event) => handleClick(event, 'mailing-list')}>Mailing List</a>
          <p><FaEnvelope /> : support@petrepublic.ae</p>
        </div>
        <div className="footer-company-name">
          @ 2024 Pet Republic
        </div>
      </div>
    </footer>
  );
}

export default Footer;