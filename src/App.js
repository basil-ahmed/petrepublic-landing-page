import './App.css';
import React from 'react';
import Header from './components/Header';  
import Home from './components/Home';      
import About from './components/About';    
import Services from './components/Services';  
import PageFooter from './components/Footer';  
import MailingList from './components/MailingList';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">

      </div>
      <div id="services">
        <Services />
      </div>
      <div id="mailing-list">
        <MailingList />
      </div>
      <PageFooter />
    </div>
  );
}

export default App;