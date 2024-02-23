import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css'; 

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
      <nav>
        <img src={require("../assets/images/logo.png")} className="logo" alt='Logo'/>
        <img src={require("../assets/images/dog-gif.webp")} className="dog-gif" alt='Dog Running'/>
        <ul>
          {/* <li><a href="#home" onClick={(event) => handleClick(event, 'home')}>Home</a></li> */}
          <li><a href="#about" onClick={(event) => handleClick(event, 'about')}>Pet Passport</a></li>
          <li><a href="#services" onClick={(event) => handleClick(event, 'services')}>Services</a></li>
          {/* <li><a href="#mailing-list" onClick={(event) => handleClick(event, 'mailing-list')}>Mailing List</a></li> */}
          {/* <li><a href="#footer" onClick={(event) => handleClick(event, 'footer')}>Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;