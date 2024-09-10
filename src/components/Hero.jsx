import React from 'react';
import ReactIcon from '../assets/supply-chain_17321102.png'; // Import the PNG icon

const Hero = () => {
  const handleScrollToFeatures = () => {
    // Scroll to the "features" section smoothly
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        height: '100vh',               // 100% of viewport height
        width: '100vw',                // 100% of viewport width
        display: 'flex',               // Flexbox to center content
        alignItems: 'center',          // Center vertically
        justifyContent: 'center',      // Center horizontally
        backgroundColor: '#007bff',    // Background color
        color: 'white',                // Text color
        textAlign: 'center',           // Center text horizontally
        margin: 0,                     // Remove default margin
        padding: 0                     // Remove padding
      }}
    >
      <div style={{ width: '100%', padding: '0 20px' }}>
        <h2 style={{ fontSize: '3rem', margin: 0 }}>Welcome to Our Supply Chain  Management System</h2>
        <p style={{ fontSize: '1.2rem', margin: '20px 0 0' }}>
          Managing your infrastructure with ease and efficiency.
        </p>

        {/* Centering the button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
            onClick={handleScrollToFeatures}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: 'white',             // White text color
              backgroundColor: '#000',     // Black background color
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              display: 'flex',            // Flex to align icon and text
              alignItems: 'center',       // Center items vertically
              gap: '10px',                // Space between icon and text
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#333')}  // Darker hover effect
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#000')}
          >
            <img src={ReactIcon} alt="Supply Chain Icon" style={{ width: '20px', height: '20px' }} /> {/* Icon */}
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
