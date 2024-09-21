import React from 'react';
import './Home.css';

// Import button images
import iosButtonImage from '../assets/images/Apple-store-download-button.svg'; 
import androidButtonImage from '../assets/images/google-play-badge.png';
import appImage from '../assets/images/appss1.svg';

function Home() {
  // Function to handle iOS download
  const handleIOSDownload = () => {
    window.location.href = 'https://apps.apple.com/us/app/pet-republic/id6476663381';
  };

  // Function to handle Android download
  const handleAndroidDownload = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=ae.petrepublic.app&hl=en&gl=US'; 
  };

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={appImage} className="app-image" alt="App" />
      </div>

      <div className="text-container">
        <h1 className="title">Pet Republic</h1>
        <h2 className="subtitle">Welcome to Pet Republic, your go-to destination for all your pet care needs in the UAE! Our user-friendly app seamlessly connects you to a network of certified pet care centers, ensuring the well-being of your furry friend.</h2>

        <div className="button-container">
          <button onClick={handleIOSDownload} className="download-button ios" style={{ backgroundImage: `url(${iosButtonImage})` }}>
            Download on the App Store
          </button>
          <button onClick={handleAndroidDownload} className="download-button android" style={{ backgroundImage: `url(${androidButtonImage})` }}>
            Get it on Google Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;