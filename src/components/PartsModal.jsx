import React from 'react';
import './PartsModal.css'; 

const PartsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="parts-modal-overlay">
      <div className="parts-modal-content">
        <button className="parts-modal-close" onClick={onClose}>&times;</button>
        <h2 className="centered-text">Required Parts</h2>
        <img src={'src/assets/Bank2Sensor1.jpg'} alt="Parts Diagram" />
        <li>Bank 1 is the side with cylinder number 1 (Cylinders 1 – 3 – 5 – 7 etc.)</li>
        <li>Bank 2 is the side with cylinder number 2 (Cylinders 2 – 4 – 6 – 8 etc.)</li>
        <hr></hr>
        <p> The O2 sensors are mounted in the exhaust system of the car. Sensor 2 is mounted in the exhaust stream and is located after the catalytic convertor.</p>
   
      </div>
    </div>
  );
};

export default PartsModal;
