import React from 'react';
import { Link } from 'react-router-dom';
import profile from ".././icons/user.png"
import './PartsLocationPage.css'
import icon from ".././icons/carRepair.png";
import guideData from '../data/repair.json'; 


const PartsLocationPage = () => {
    const dtcEntries = guideData['Repair Guide']['DTC'];
    const dtcData = dtcEntries["P0150"]
  return (
    <div className='container'>
        <a href="/navpage" className="link">
            <img src={icon} alt="Repair Icon" className="logo" />
        </a>
        <h1>Parts location</h1>
        {dtcData['image_url'].map((url, index) => (
                            <img 
                                key={index} 
                                src={url} 
                                alt={`P0150 Image ${index + 1}`}
                                style={{ maxWidth: '100%', height: 'auto' }} 
                            />
                        ))}
    </div>
  );
};

export default PartsLocationPage;