import React, { useEffect, useState } from 'react';
import './About.css'; 
import van from '../assets/images/van.png';
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
      <h1 className="aboutapp" >About the <span style={{color:"#1F9C89"}}>App</span></h1>
      <div className="textbox">
        <p>Third-Party Platform Technology powered by cutting-edge third-party platform technology, Pet Republic ensures a seamless and secure user experience. Benefit from advanced features and a robust infrastructure for all your pet care needs.

        Simplify Your Pet Care with Pet Republic - Say goodbye to pet care hassles and embrace the simplicity of Pet Republic! Accessing top-notch services for your beloved pets has never been easier.

        Download the app today and make your pet care with Pet Republic!</p>
      </div>
      <img src={van} className="doglogo" alt="Dog Logo" style={{ transform: `translate3d(${scrollPosition-scrollPosition}px, ${-scrollPosition}px, 0)` }}/>
    </div>

    </>
  );
}

export default About;