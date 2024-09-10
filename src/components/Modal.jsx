import React, { useEffect, useState } from 'react';

const Modal = ({ modalType, isOpen, closeModal, message }) => {
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  const [productInfo, setProductInfo] = useState(null); // Manage product info state

  useEffect(() => {
    // Close modal on pressing "Esc"
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  useEffect(() => {
    // Scroll to the modal when it opens
    if (isOpen) {
      const modalElement = document.getElementById('modal-notification');
      if (modalElement) {
        modalElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isOpen]);

  // Close product popup after 4 seconds once productInfo is available
  useEffect(() => {
    if (productInfo) {
      const timer = setTimeout(() => {
        setProductInfo(null); // Clear the product info after 4 seconds
        closeModal(); // Close the modal
      }, 4000);

      return () => clearTimeout(timer); // Cleanup the timeout on component unmount or state change
    }
  }, [productInfo, closeModal]);

  if (!isOpen) return null;

  // Modal styling, placed at the bottom
  const modalStyles = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    width: '80%',
    maxWidth: '400px',
  };

  const buttonStyles = {
    marginTop: '10px',
    padding: '10px 15px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#007bff', // Blue background
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const loadingSpinnerStyles = {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3', 
    borderTop: '4px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto',  // Center the spinner
  };

  const productPopupStyles = {
    backgroundColor: '#e0f7fa',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginTop: '20px',
  };

  // Simulate loading and then show product details (for Digital Product Passport only)
  const handleProductSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setProductInfo({
        product: 'Blust',
        manufacturer: 'Mombasa Cement',
        country: 'Kenya',
        qualityControl: 'Pass',
        manufactureDate: 'Jan 23, 2024',
      });
    }, 3000); // Simulate 3 seconds delay
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        id="modal-notification"
        className="modal-content"
        style={modalStyles}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close" onClick={closeModal}>&times;</span>

        {/* Only process Digital Product Passport */}
        {modalType === 'digitalPassport' && (
          <>
            {/* Show loading spinner if loading */}
            {isLoading ? (
              <div style={{ textAlign: 'center' }}>
                <div style={loadingSpinnerStyles}></div>
                <p>Loading...</p>
              </div>
            ) : (
              <>
                {/* Show product information if available */}
                {productInfo ? (
                  <div style={productPopupStyles}>
                    <h3>Product Details</h3>
                    <p><strong>Product:</strong> {productInfo.product}</p>
                    <p><strong>Manufacturer:</strong> {productInfo.manufacturer}</p>
                    <p><strong>Country:</strong> {productInfo.country}</p>
                    <p><strong>Quality Control:</strong> {productInfo.qualityControl}</p>
                    <p><strong>Date of Manufacture:</strong> {productInfo.manufactureDate}</p>
                  </div>
                ) : (
                  <>
                    <p>{message}</p>
                    {/* Show input and submit button only before product details */}
                    <h2>Digital Product Passport</h2>
                    <p>Enter the serial number of your product:</p>
                    <input type="text" placeholder="Enter serial number" />
                    <button style={buttonStyles} onClick={handleProductSubmit}>
                      Submit
                    </button>
                  </>
                )}
              </>
            )}
          </>
        )}

        {/* Show separate process for tracking system (no product details) */}
        {modalType === 'tracking' && (
          <>
            <h2>Tracking System</h2>
            <p>Enter the number of the driver:</p>
            <input type="text" placeholder="Enter driver number" />
            <button style={buttonStyles} onClick={handleProductSubmit}>
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// CSS animation for the spinner (added globally)
const styles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

export default Modal;

// Add the spinner animation styles
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
