import React from 'react';
import trackingLogo from '../assets/tracking_1712211.png';
import trackingIcon from '../assets/tracking_2602065.png';
import smartContractIcon from '../assets/payment_17596473.png';
import verifyIcon from '../assets/face-recognition_7860443.png';

const Features = ({ openModal }) => {
  // Helper function to handle modal opening with element's position
  const handleOpenModal = (e, modalType, message) => {
    const elementPosition = e.currentTarget.getBoundingClientRect(); // Get position of the clicked card
    openModal(modalType, message, { top: elementPosition.top, left: elementPosition.left });
  };

  return (
    <section id="features">
      <div className="container">
        <h2>Our Key Features</h2>
        <div className="card-container">
          <div
            className="card"
            style={{ backgroundColor: '#ff6f61' }}
            onClick={(e) => handleOpenModal(e, 'digitalPassport', 'Digital Product Passport Selected')}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={trackingLogo} alt="Digital Product Passport Logo" style={{ width: '40px', marginRight: '10px' }} />
              <h3>Digital Product Passport</h3>
            </div>
            <p>Manage and track your digital products with comprehensive digital passports.</p>
          </div>
          <div
            className="card"
            style={{ backgroundColor: '#4caf50' }}
            onClick={(e) => handleOpenModal(e, 'tracking', 'Tracking System Selected')}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={trackingIcon} alt="Tracking System Icon" style={{ width: '40px', marginRight: '10px' }} />
              <h3>Tracking System</h3>
            </div>
            <p>Keep track of your assets with our robust tracking system.</p>
          </div>
          <div
            className="card"
            style={{ backgroundColor: '#2196f3' }}
            onClick={(e) => handleOpenModal(e, 'smartContract', 'Smart Contract Selected')}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={smartContractIcon} alt="Smart Contract Icon" style={{ width: '40px', marginRight: '10px' }} />
              <h3>Smart Contract</h3>
            </div>
            <p>Utilize smart contracts for secure and transparent transactions.</p>
          </div>
          <div
            className="card"
            style={{ backgroundColor: '#ffc107' }}
            onClick={(e) => handleOpenModal(e, 'verifyContractor', 'Verify Contractor Identity Selected')}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={verifyIcon} alt="Verify Contractor Icon" style={{ width: '40px', marginRight: '10px' }} />
              <h3>Verify Contractor Identity</h3>
            </div>
            <p>Verify contractor identities to ensure reliability and trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
