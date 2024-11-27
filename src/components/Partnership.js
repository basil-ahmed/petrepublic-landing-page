import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Partnership.css';

// Import your partner images
import Partner1 from '../assets/images/CrazyPets.jpg';
import Partner2 from '../assets/images/MHPets.png';
// import Partner3 from '../assets/images/PetLuxe_edit.svg';
import Partner4 from '../assets/images/PetMaison.png';
import Partner5 from '../assets/images/PupNut_edit.svg';
import Partner6 from '../assets/images/TopDog_edit.svg';
import Partner7 from '../assets/images/AquariumLives_edit.svg';
// import Partner8 from '../assets/C&C_svg.svg';
import Partner9 from '../assets/images/BarkAvenue_svg.svg';
import Partner10 from '../assets/images/woof&purr_svg.svg';
import { Helmet } from 'react-helmet-async';
// import Partner11 from '../assets/images/ninetails.png';

const partners = [
  Partner1,
  Partner2,
  // Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
  // Partner8,
  Partner9,
  Partner10,
  // Partner11,
];

const Partnership = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000, // Slow scroll speed
    slidesToShow: 6, // Number of slides shown at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Constant animation
    cssEase: 'linear',
    pauseOnHover: false,
  };

  return (
    <div className="partnership">
      <Helmet>
        <title>Our list of amazing Partners!</title>
        <meta name="description" content="Working together with nation-wide famous centers to support pets and pet owners, whether it is pet grooming services or veterinary services!"/>
      </Helmet>
      <h2 className="partnership-title">Our Partners</h2>
      <p>Working together with nation-wide famous centers to support pets and pet owners!<br />
       Whether it is pet grooming services or you need a vet, our qualified partners will be there to help!</p>
      <Slider {...settings}>
        {partners.concat(partners).map((partner, index) => (
          <div className="slide" key={index}>
            <img className="partner-image" src={partner} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partnership;
