import React, { useState } from 'react';
import './RepairOptionsPage.css';
import { useNavigate } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import icon from "../icons/carRepair.png";
import guideData from '../data/repair.json';
import PartsModal from './PartsModal'; 
import ImageModal from './ImageModal';
import rp1 from '../assets/rp1.jpg';
import rp2 from '../assets/rp2.jpg';


const RepairOptionsPage = () => {
  let navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  
  const dtcEntries = guideData['Repair Guide']['DTC'];
  const dtcData = dtcEntries["P0150"];
  const videoId = getYoutubeVideoID(dtcData['youtube_link']);
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [isPartsModalOpen, setPartsModalOpen] = useState(false); // New state for the parts modal

  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const images = [

    { src: rp2, alt: 'Repair Guide image 1' },
    { src: rp1, alt: 'Repair Guide Image 2' },
  ];


  function getYoutubeVideoID(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  // Call this function when the Buy Parts button is clicked
  const showPartsModal = () => {
    setPartsModalOpen(true);
  };
  

  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
      <PartsModal isOpen={isPartsModalOpen} onClose={() => setPartsModalOpen(false)} />
      <ImageModal isOpen={isImageModalOpen} onClose={() => setImageModalOpen(false)} images={images} />
      <div className="container">
        <div className="inner">
          <a href="/navpage" className="link">
            <img src={icon} alt="Repair Icon" className="logo" />
            <span className="title">RepairMate</span>
          </a>
        </div>
        <div className="list-group">
          <button type="button" className="btn btn-primary" onClick={showPartsModal}>Part location</button>
          <button type="button" className="btn btn-primary" onClick={() => setImageModalOpen(true)}>Repair guide</button> 
          <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>DIY Video Guide</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: 'grey' }}>Buy Parts</button>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: 'grey' }} onClick={() => navigate('/mechanics')}>Quote from local repair</button>
        </div>
      </div>
    </>
  );
};

export default RepairOptionsPage;
