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
            duration: 2000
        });
    }, []);

    return (
        <div className="services">
            <div className="services-header" data-aos="fade-down">
                <h1>All the services our app offers!</h1>
            </div>

            <div className="service-cards">
                {/* Grooming Card (Image Right, Text Left) */}
                <div className="service-card grooming" data-aos="fade-up" >
                    <div className="card-text">
                        <h3>Grooming, Boarding, Daycare, Training</h3>
                        <p>Trust our certified professionals for your pet's grooming, boarding, and training requirements. Daycare services keep your pet active and happy through socialization and fun activities.</p>
                    </div>
                    <div className="card-image">
                        <img src={groomingIcon} alt="Grooming" />
                    </div>
                </div>

                {/* Pet Products Card (Image Left, Text Right) */}
                <div className="service-card pet-products" data-aos="fade-up" >
                    <div className="card-image">
                        <img src={petProductsIcon} alt="Products" />
                    </div>
                    <div className="card-text">
                        <h3>Pet Products</h3>
                        <p>Explore a diverse range of pet products, including premium food and toys, all conveniently available through our app.</p>
                    </div>
                </div>

                {/* Pet Taxi Card (Image Right, Text Left) */}
                <div className="service-card pet-taxi" data-aos="fade-up" >
                    <div className="card-text">
                        <h3>Pet Taxi</h3>
                        <p>Rely on our safe and comfortable pet taxi service for hassle-free transportation to and from various locations.</p>
                    </div>
                    <div className="card-image">
                        <img src={petTaxiIcon} alt="Taxi" />
                    </div>
                </div>

                {/* Mobile Grooming Card (Image Left, Text Right) */}
                <div className="service-card mobile-grooming" data-aos="fade-up" >
                    <div className="card-image">
                        <img src={mobileIcon} alt="Mobile Grooming" />
                    </div>
                    <div className="card-text">
                        <h3>Mobile Grooming</h3>
                        <p>Experience the ultimate convenience of grooming services at your doorstep, provided by our skilled professionals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
