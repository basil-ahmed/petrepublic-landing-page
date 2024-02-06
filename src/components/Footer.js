import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
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
          <p>About Us</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-company-name">
          @ 2024 Pet Republic
        </div>
      </div>
    </footer>
  );
}

export default Footer;