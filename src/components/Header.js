import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css'; 
import { Helmet } from 'react-helmet-async';

function Header() {
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
    <header className="container">
      <Helmet>
        <title>Pet Republic: The one stop app for all your pet care needs!</title>
        <meta name="description" content="The one stop for all your pet grooming, veterinary and pet products needs in the UAE!"/>
      </Helmet>
      <nav>
        <img
          src={require("../assets/images/logo.png")}
          onClick={(event) => handleClick(event, 'home')}
          className="logo"
          alt="Logo"
        />
        <img
          src={require("../assets/images/dog-gif.webp")}
          className="dog-gif"
          alt="Dog Running"
        />
        <div className="nav-right">
          <ul>
            <li><a href="#about" onClick={(event) => handleClick(event, 'about')}>Pet Passport</a></li>
            <li><a href="#services" onClick={(event) => handleClick(event, 'services')}>Services</a></li>
          </ul>
          <div className="download-container">
            <button className="download-btn">Download</button>
            <div className="download-dropdown">
              <a href="https://apps.apple.com/us/app/pet-republic/id6476663381" target='_blank' rel="noreferrer">iOS</a>
              <a href="https://play.google.com/store/apps/details?id=ae.petrepublic.app&hl=en&gl=US" target='_blank' rel="noreferrer">Android</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    
  );
}

export default Header;
