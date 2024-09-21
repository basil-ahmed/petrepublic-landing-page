import React, { useEffect, useState } from 'react';
import './About.css'; 
import van from '../assets/images/van.png';
import appdog from '../assets/images/appdog1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Icon1 from '../assets/images/passport-icon.svg';
import Icon2 from '../assets/images/credit-card-icon.svg';
import Icon3 from '../assets/images/invoice-receipt-icon.svg';
import Icon4 from '../assets/images/paw-icon.svg';
// Import the uploaded image
import uploadedImage from '../assets/images/petimgg.png'; // Make sure this path is correct

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
 
  useEffect(() => {
    const handleScroll = () => {
      let newScrollPosition = window.scrollY / 2.5;
      if (newScrollPosition > 400) {
        newScrollPosition = 400;
      }
      setScrollPosition(newScrollPosition);
    };

    AOS.init({
        duration : 2000
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="content_1">
      <div className="header-textbox-container">
        <h1 className="aboutapp" data-aos="fade-down">
          Introducing the <span style={{ color: "#EF8214" }}>e-Passport</span> on the PetRepublic app!
        </h1>
        
        {/* This wraps the text and image horizontally */}
        <div className="textbox-image-container">
          <div className="textbox" data-aos="fade-left">
            <p>
              <img src={Icon1} alt="Icon 1" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
              <strong>The e-Passport:</strong> a digital ID for your pet, linking its microchip to a global database. It ensures your pet never gets lost and offers seamless access to:
            </p>
            <ul className="pet-details">
              <li>Medical & Vaccination Records</li>
              <li>70+ Partner Network</li>
              <li>Easy Ownership Transfers</li>
            </ul>
            <p>
              Beyond travel, the Pet e-Passport simplifies vet visits and event entry, eliminating the need for physical documents. All your pet’s essential info, all in one place.
            </p>
          </div>
          
          {/* Image to the right of the textbox */}
          <div className="image-container" data-aos="fade-left">
            <img src={uploadedImage} alt="Pet Passport" className="uploaded-image" />
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default About;