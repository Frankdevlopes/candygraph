import React from 'react';
import logo from '../assets/logo of my slod.PNG'; // Import the logo image

const Header = () => (
  <header style={{ width: '100%', backgroundColor: '#2c3e50', padding: '1rem 0' }}>
    <div className="container" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', // Space out the items
      alignItems: 'center', 
      width: '100%', 
      padding: '0 20px', // Padding to ensure the content doesn't touch the edges of the view
      maxWidth: '1200px', 
      margin: '0 auto' // Center the content within the header
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={logo} 
          alt="Logi Logo" 
          style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', // Make the image round
            marginRight: '10px' // Small margin to move the <h1> closer to the logo
          }} 
        />
        <h1 style={{ margin: '0', fontSize: '1.5rem', color: '#fff' }}>
          Logi Management System
        </h1>
      </div>
      <nav>
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          margin: '0', 
          padding: '0', 
          color: '#fff'
        }}>
          <li style={{ marginLeft: '20px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          </li>
          <li style={{ marginLeft: '20px' }}>
            <a href="#features" style={{ color: '#fff', textDecoration: 'none' }}>Features</a>
          </li>
          <li style={{ marginLeft: '20px' }}>
            <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
