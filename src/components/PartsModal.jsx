import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import './PartsModal.css'; 

const PartsModal = ({ isOpen, onClose }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [secondImageUrl, setSecondImageUrl] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const storage = getStorage();
      const secondImageRef = ref(storage, 'gs://obd-app-acded.appspot.com/p1050part.webp');
      const imageRef = ref(storage, 'gs://obd-app-acded.appspot.com/ExhuastSystem.jpeg');

      try {
        const firstUrl = await getDownloadURL(imageRef);
        setImageUrl(firstUrl);
        const secondUrl = await getDownloadURL(secondImageRef);
        setSecondImageUrl(secondUrl);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImages();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="parts-modal-overlay">
      <div className="parts-modal-content">
        <button className="parts-modal-close" onClick={onClose}>&times;</button>
        <h2 className="centered-text">Part Location</h2>
        {imageUrl ? <img src={imageUrl} alt="Parts Diagram" /> : "Loading image..."}
        <p className="centered-text"> Oxygen Sensor in the Exhaust system</p>
        <hr />
        {secondImageUrl ? <img src={secondImageUrl} alt="Second Parts Diagram" /> : "Loading second image..."}
        <div className="text-box">
          <li>Bank 1 is the side with cylinder number 1 (Cylinders 1 – 3 – 5 – 7 etc.)</li>
          <li>Bank 2 is the side with cylinder number 2 (Cylinders 2 – 4 – 6 – 8 etc.)</li>
        <p className="text"> The O2 sensors are mounted in the exhaust system of the car. Sensor 2 is mounted in the exhaust stream and is located after the catalytic converter.</p>
        </div>
      </div>
    </div>
  );
};

export default PartsModal;
