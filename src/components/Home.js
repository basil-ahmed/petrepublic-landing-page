import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

// Import button images
import iosButtonImage from '../assets/images/Apple-store-download-button.svg'; 
import androidButtonImage from '../assets/images/google-play-badge.png';
import appImage from '../assets/images/appss1.svg';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  // Function to handle iOS download
  const handleIOSDownload = () => {
    window.location.href = 'https://apps.apple.com/us/app/pet-republic/id6476663381';
  };

  // Function to handle Android download
  const handleAndroidDownload = () => {
    // window.location.href = 'your-android-download-link'; // Replace with your actual link
    alert('Android download is not available at the moment. But don\'t worry, we are working on it to deliver it to you soon!');
  };

  return (
    <>
    <div className="home">
      <Slider {...settings}>

        <div className='carousel-image'>
          <img src={require("../assets/images/test6.jpg")} alt="Slide 1" />
        </div>

        <div className='carousel-image'>
          <img src={require("../assets/images/test1.jpg")} alt="Slide 2" className='slide1' />
        </div>
        
        <div className='carousel-image'>
          <img src={require("../assets/images/test2.webp")} alt="Slide 3" />
        </div>

      </Slider>
    </div>
    <div className="carousel-text">

  <div className="button-container">
    <img src={appImage} className="app-image" alt="App" />
      <button onClick={handleIOSDownload} className="download-button ios" style={{ backgroundImage: `url(${iosButtonImage})` }}>
      </button>
      <button onClick={handleAndroidDownload} className="download-button android" title="Coming Soon" style={{ backgroundImage: `url(${androidButtonImage})` }}>
      </button>
    </div>
 
    
  </div>
</>
  );
}

export default Home;
