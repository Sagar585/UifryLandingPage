import React, { useState } from 'react';
import './Styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [activePage, setActivePage] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActivePage = (page) => {
    setActivePage(page);
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Uifry Logo" className="logo-image" />
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#about" id='Home' className={activePage === 'Home' ? 'active' : ''} onClick={() => handleSetActivePage('Home')}>Home</a>
          </li>
          <li>
            <a href="#about" id='AboutUs' className={activePage === 'AboutUs' ? 'active' : ''} onClick={() => handleSetActivePage('AboutUs')}>About Us</a>
          </li>
          <li>
            <a href="#pricing" id='Pricing' className={activePage === 'Pricing' ? 'active' : ''} onClick={() => handleSetActivePage('Pricing')}>Pricing</a>
          </li>
          <li>
            <a href="#features" id='Features' className={activePage === 'Features' ? 'active' : ''} onClick={() => handleSetActivePage('Features')}>Features</a>
          </li>
        </ul>
        <a href="#download" className="download-button">Download</a>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
