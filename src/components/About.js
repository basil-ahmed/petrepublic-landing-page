import React, { useEffect, useState } from 'react';
import './About.css'; 
import van from '../assets/images/van.png';
import appdog from '../assets/images/appdog1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <div className="content" >
      <h1 className="aboutapp" data-aos="fade-down">Introducing the <span style={{color:"#1F9C89"}}>Pet Passport</span> on the PetRepublic app!</h1>
      <div className="textbox" data-aos="fade-left">
      <p>Step 1: Choose "Create Passport" on the app.</p>
        </div>
        <div className="textbox" data-aos="fade-right">
          <p>Step 2: Select your payment plan.</p>
        </div>
        <div className="textbox" data-aos="fade-left">
          <p>Step 3: Fill out the payment details.</p>
        </div>
        <div className="textbox" data-aos="fade-right">
          <p>Step 4: Fill out your fur baby's details!</p>
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