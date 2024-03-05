import React, { useState } from 'react';
import './RepairOptionsPage.css';
import { useNavigate } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import icon from "../icons/carRepair.png";
import guideData from '../data/repair.json';

const RepairOptionsPage = () => {
  let navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  
  const dtcEntries = guideData['Repair Guide']['DTC'];
  const dtcData = dtcEntries["P0150"];
  const videoId = getYoutubeVideoID(dtcData['youtube_link']);

  function getYoutubeVideoID(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
      <div className="container">
        <div className="inner">
          <a href="/navpage" className="link">
            <img src={icon} alt="Repair Icon" className="logo" />
            <span className="title">RepairMate</span>
          </a>
        </div>
        <div className="list-group">
          <button type="button" className="btn btn-primary" onClick={() => navigate('/location')}>Part location</button>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/repairguide')}>Repair guide</button>
          <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>DIY Video Guide</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: 'grey' }}>Buy Parts</button>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/mechanics')}>Quote from local repair</button>
        </div>
      </div>
    </>
  );
};

export default RepairOptionsPage;
