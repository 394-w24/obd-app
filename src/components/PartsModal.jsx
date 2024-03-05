import React from 'react';
import './PartsModal.css'; // Make sure to create and style this CSS file

const PartsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="parts-modal-overlay">
      <div className="parts-modal-content">
        <button className="parts-modal-close" onClick={onClose}>&times;</button>
        <h2>Parts Information</h2>
        {/* You'll need to include the image path and text for your parts here */}
        <img src={'src/assets/Bank2Sensor1.jpg'} alt="Parts Diagram" />
        <p>Bank 1 is the side with cylinder number 1 (Cylinders 1 – 3 – 5 – 7 etc.)</p>
        <p>Bank 2 is the side with cylinder number 2 (Cylinders 2 – 4 – 6 – 8 etc.)</p>
      </div>
    </div>
  );
};

export default PartsModal;
