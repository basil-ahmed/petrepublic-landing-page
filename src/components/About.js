import React, { useEffect, useState } from 'react';
import './About.css'; 
import van from '../assets/images/van.png';
import appdog from '../assets/images/appdog1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Icon1 from '../assets/images/passport-icon.svg';
import Icon2 from '../assets/images/credit-card-icon.svg'
import Icon3 from '../assets/images/invoice-receipt-icon.svg';
import Icon4 from '../assets/images/paw-icon.svg';

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
    <>
    <div className="content_1" >
      <h1 className="aboutapp" data-aos="fade-down">Introducing the <span style={{color:"#1F9C89"}}>Pet Passport</span> on the PetRepublic app!</h1>
      <div className="textbox" data-aos="fade-left">
      <p><img src={Icon1} alt="Icon 1" /><strong>Step 1 : </strong> Choose "Create Passport" on the app.</p>
        </div>
        <div className="textbox" data-aos="fade-right">
          <p><img src={Icon2} alt="Icon 2" /><strong>Step 2 : </strong> Select your payment plan.</p>
        </div>
        <div className="textbox" data-aos="fade-left">
          <p><img src={Icon3} alt="Icon 3" /><strong>Step 3 : </strong> Fill out the payment details.</p>
        </div>
        <div className="textbox" data-aos="fade-right">
          <p><img src={Icon4} alt="Icon 4" /><strong>Step 4 : </strong> Fill out your fur baby's details!</p>
        </div>
      {/* <img src={van} className="doglogo" alt="Dog Logo" style={{ transform: `translate3d(${scrollPosition-scrollPosition}px, ${-scrollPosition}px, 0)` }}/> */}
    </div> 

    {/* <div className='phone-section'>
      <div className='phone'>
        <img src={appdog} alt="App Dog" className="appdog" />
      </div>
      
    </div> */}
    </>
  );
}

export default About;