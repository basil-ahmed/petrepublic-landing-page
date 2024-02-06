import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Ensure you create this CSS file

// Import button images
import iosButtonImage from '../assets/images/Apple-store-download-button.svg'; // Update the path as necessary
import androidButtonImage from '../assets/images/google-play-badge.png'; // Update the path as necessary

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
    window.location.href = 'your-ios-download-link'; // Replace with your actual link
  };

  // Function to handle Android download
  const handleAndroidDownload = () => {
    window.location.href = 'your-android-download-link'; // Replace with your actual link
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
{/* 
        <div className='carousel-image'>
          <img src={require("../assets/images/test3.jpg")} alt="Slide 3" />
        </div> */}
      </Slider>
    </div>
    <div className="carousel-text">
      {/* <div className="carousel-text-header">
    <h2>Welcome To PetRepublic</h2>
    <p> Download the app today and care for your pet with Pet Republic!</p>
    </div> */}
    <div className="button-container">
      <button onClick={handleIOSDownload} className="download-button ios" style={{ backgroundImage: `url(${iosButtonImage})` }}>
      </button>
      <button onClick={handleAndroidDownload} className="download-button android" style={{ backgroundImage: `url(${androidButtonImage})` }}>
      </button>
    </div>
</div>
</>
  );
}

export default Home;
