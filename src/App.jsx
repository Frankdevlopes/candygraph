import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './App.css';

const App = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    modalType: '',
    message: '',
    position: { top: 0, left: 0 }
  });

  const showModal = (type, msg, position) => {
    setModalData({ isOpen: true, modalType: type, message: msg, position });
  };

  const hideModal = () => {
    setModalData({ isOpen: false, modalType: '', message: '', position: { top: 0, left: 0 } });
  };

  return (
    // Wrapping the whole app in a Bootstrap container-fluid
    <div className="container-fluid"> {/* Full-width container with padding */}
      <Header />
      <Hero />
      <Features openModal={showModal} />
      <Contact />
      <Footer />
      <Modal
        modalType={modalData.modalType}
        isOpen={modalData.isOpen}
        closeModal={hideModal}
        message={modalData.message}
        position={modalData.position}
      />
    </div>
  );
};

export default App;
