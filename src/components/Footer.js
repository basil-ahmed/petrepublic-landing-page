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
          <LinkedinShareButton url="https://yourwebsite.com">
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <a href="https://www.instagram.com/yourusername/" className="InstaIcon" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} color='black'/>
          </a>
        </div>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-company-name">
          @ 2024 Pet Republic
        </div>
      </div>
    </footer>
  );
}

export default Footer;