import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import Testimonials from './components/Testimonials/Testimonials';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer';
import FaqSection from './components/FaqSection/FaqSection';
import OurWorksSection from './components/OurWorksSection/OurWorksSection';
import Templates from './components/Templates/Templates';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ServicesSection />
      <OurWorksSection />
      <Templates />
      <WhyChooseUs />
      <Testimonials />
      <ImageCarousel />
      <FaqSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;