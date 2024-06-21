import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import MailingList from './components/MailingList';
import BlogSection from './components/BlogSection';
import BlogArticle from './components/BlogArticle';
import PageFooter from './components/Footer';
import OnboardingForm from './components/OnboardingForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="services"><Services /></div>
              <div id="mailing-list"><MailingList /></div>
              <div id="blog-section"><BlogSection /></div>
            </>
          } exact />
          <Route path="/blog/:id" element={<BlogArticle />} />
          <Route path='/onboarding' element={<OnboardingForm />} />
        </Routes>
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
