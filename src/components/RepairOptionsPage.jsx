import React from 'react';
import './RepairOptionsPage.css'
import { useNavigate } from 'react-router-dom';
import icon from ".././icons/carRepair.png"

const RepairOptionsPage = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
       <div className="inner">
                <a href="/navpage" className="link">
                    <img src={icon} alt="Repair Icon" className="logo" />
                    <span className="title">RepairMate</span>
                </a>
            </div>
      <div className="list-group">
        <button type="button" className="btn btn-primary" onClick={() => navigate('/mechanics')}>Quote from local repair</button>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/location')}>Part location</button>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/repairguide')}>Repair guide</button>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/parts')}>Parts</button>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/videos')}>Videos</button>
      </div>
    </div>
  );
};



export default RepairOptionsPage;

