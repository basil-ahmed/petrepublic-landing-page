import React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, FacebookIcon, LinkedinIcon, TwitterIcon  } from 'react-share';
import { FaInstagram } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <FacebookShareButton url="https://yourwebsite.com">
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url="https://yourwebsite.com">
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton url="https://www.linkedin.com/company/petsrepublic/">
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <a href="https://www.instagram.com/petrepublic.ae?igsh=cXI3MTd0a3B0OXZs" className="InstaIcon" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} color='black'/>
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