import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Advantage from './components/Advantage';
import Advantage2 from './components/Advantage2';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import GetReadyToStart from './components/GetReadyToStart';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
      <Advantage></Advantage>
      <Advantage2></Advantage2>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <GetReadyToStart></GetReadyToStart>
    </div>
  );
}

export default App;
