import React, { useEffect } from 'react';
import './Services.css';
import groomingIcon from '../assets/images/bath.png'; // Replace with the path to your icon
import petProductsIcon from '../assets/images/adoption.png'; // Replace with the path to your icon
import petTaxiIcon from '../assets/images/vet.png'; // Replace with the path to your icon
import mobileIcon from '../assets/images/care.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Services() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
      <div className="services">
        <div className="services-header" data-aos="fade-down">
          <h2>Pet Republic</h2>
          <h1>Your All-in-One Pet Care Solution in the UAE!</h1>
          <p>Welcome to Pet Republic, your go-to destination for all your pet care needs in the UAE! Our user-friendly app seamlessly connects you to a network of certified pet care centers, ensuring the well-being of your furry friend.</p>
        </div>
        <div className="service-cards">
            <div className='service-card-left'>
                <div className="service-card" data-aos="fade-down-right">
                    <img src={groomingIcon} alt="React" />
                    <div className='service-card-text'>
                        <h3>Grooming, Boarding, Daycare, Training</h3>
                        <p>Trust our certified professionals for your pet's grooming, boarding, and training requirements. Daycare services keep your pet active and happy through socialization and fun activities.</p>
                    </div>
                </div>
                <div className="service-card"  data-aos="fade-up-right">
                    <img src={petProductsIcon} alt="Next.js" />
                    <div className='service-card-text'>
                        <h3>Pet Products</h3>
                        <p>Explore a diverse range of pet products, including premium food and toys, all conveniently available through our app.</p>
                    </div>
                </div>
            </div>
            <div className='service-card-right'>
                <div className="service-card"  data-aos="fade-down-left">
                    <img src={petTaxiIcon} alt="Tailwind CSS" />
                    <div className='service-card-text'>
                        <h3>Pet Taxi</h3>
                        <p>Rely on our safe and comfortable pet taxi service for hassle-free transportation to and from various locations.</p>
                    </div>
                </div>
                <div className="service-card"  data-aos="fade-up-left">
                    <img src={mobileIcon} alt="TypeScript" />
                    <div className='service-card-text'>
                        <h3>Mobile Grooming</h3>
                        <p>Experience the ultimate convenience of grooming services at your doorstep, provided by our skilled professionals.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }

export default Services;
