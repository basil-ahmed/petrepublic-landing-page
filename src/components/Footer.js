import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';
import GooglePayLogo from '../assets/images/google-pay-logo.svg';
import ApplePayLogo from '../assets/images/apple-pay-logo.svg';
import VisaLogo from '../assets/images/visa-blue-logo.svg';
import MastercardLogo from '../assets/images/mastercard.svg';

const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event, id) => {
    event.preventDefault();

    // If not on the root page, navigate to it
    if (location.pathname !== '/') {
      navigate('/');
    }

    // Wait for potential page transition, then scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      const offset = 100; // Change this to the desired offset
      const position = element.offsetTop - offset;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }, 0);
  };

  return (
    <footer id="footer" className="footer">
      {/* Metadata Section */}
      <Helmet>
        <title>Footer - Pet Republic</title>
        <meta name="description" content="Pet Republic footer with contact information, social media links, payment options, and essential policies for a seamless user experience." />
        <meta name="keywords" content="footer, contact, social media, payment methods, privacy policy, terms and conditions, pet care UAE" />
        <meta name="author" content="Pet Republic Team" />
      </Helmet>

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

        <div className="payment-icons">
          <img src={GooglePayLogo} className='payment-icon' alt='google-pay'/>
          <img src={ApplePayLogo} className='payment-icon'  alt='apple-pay'/>
          <img src={VisaLogo} className='payment-icon'  alt='visa'/>
          <img src={MastercardLogo} className='payment-icon' alt='mastercard'/>
        </div>

        <div className="footer-links">
          <p><FaPhone /> : +971 50 116 8480</p>
          <a href="http://legal.petrepublic.ae/Privacy-Policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="http://legal.petrepublic.ae/Terms-and-Conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
          <a href="/onboarding">Grow With Us</a>
          <p><FaEnvelope /> : support@petrepublic.ae</p>
        </div>
        <div className="footer-company-name">
          @ 2024 Pet Republic
        </div>
      </div>
    </footer>
  );
};

export default Footer;
