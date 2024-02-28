import React, { useState, useEffect } from 'react';
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


      const [isFlipped, setIsFlipped] = useState({
        grooming: false,
        products: false,
        taxi: false,
        mobile: false,
    });

    // Function to flip card
    const flipCard = (card) => {
        setIsFlipped(prevState => ({
            ...prevState,
            [card]: !prevState[card],
        }));
    };

    return (
        <div className="services">
            <div className="services-header" data-aos="fade-down">
                <h2>Pet Republic</h2>
                <h1>Your All-in-One Pet Care Solution in the UAE!</h1>
                <p>Welcome to Pet Republic, your go-to destination for all your pet care needs in the UAE! Our user-friendly app seamlessly connects you to a network of certified pet care centers, ensuring the well-being of your furry friend.</p>
            </div>

            <div className="service-cards">
                <div className="service-card-left">
                    {/* Grooming Card */}
                    <div className={`service-card ${isFlipped.grooming ? 'flipped' : ''}`} onClick={() => flipCard('grooming')}>
                        <div className="card-front">
                            <img src={groomingIcon} alt="Grooming" />
                            <h3>Grooming, Boarding, Daycare, Training</h3>
                        </div>
                        <div className="card-back">
                            <p>Trust our certified professionals for your pet's grooming, boarding, and training requirements. Daycare services keep your pet active and happy through socialization and fun activities.</p>
                        </div>
                    </div>
                    {/* Pet Products Card */}
                    <div className={`service-card ${isFlipped.products ? 'flipped' : ''}`} onClick={() => flipCard('products')}>
                        <div className="card-front">
                            <img src={petProductsIcon} alt="Products" />
                            <h3>Pet Products</h3>
                        </div>
                        <div className="card-back">
                            <p>Explore a diverse range of pet products, including premium food and toys, all conveniently available through our app.</p>
                        </div>
                    </div>
                </div>
                <div className="service-card-right">
                    {/* Pet Taxi Card */}
                    <div className={`service-card ${isFlipped.taxi ? 'flipped' : ''}`} onClick={() => flipCard('taxi')}>
                        <div className="card-front">
                            <img src={petTaxiIcon} alt="Taxi" />
                            <h3>Pet Taxi</h3>
                        </div>
                        <div className="card-back">
                            <p>Rely on our safe and comfortable pet taxi service for hassle-free transportation to and from various locations.</p>
                        </div>
                    </div>
                    {/* Mobile Grooming Card */}
                    <div className={`service-card ${isFlipped.mobile ? 'flipped' : ''}`} onClick={() => flipCard('mobile')}>
                        <div className="card-front">
                            <img src={mobileIcon} alt="Mobile Grooming" />
                            <h3>Mobile Grooming</h3>
                        </div>
                        <div className="card-back">
                            <p>Experience the ultimate convenience of grooming services at your doorstep, provided by our skilled professionals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

  }

export default Services;
