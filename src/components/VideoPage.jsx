import React from 'react';
import { Link } from 'react-router-dom';
import profile from ".././icons/user.png"
import { useAuthState } from '../utilities/firebase';
import guideData from '../data/repair.json'; 
import "./VideoPage.css"
import icon from ".././icons/carRepair.png";


const VideoPage = () => {
    const dtcEntries = guideData['Repair Guide']['DTC'];
    const dtcData = dtcEntries["P0150"]
  return (
    <div className='container'>
        <div className="inner">
            <a href="/navpage" className="link">
                <img src={icon} alt="Repair Icon" className="logo" />
                <span className="title">RepairMate</span>
            </a>
        </div>
      <h1 className="title">Videos</h1>
      {dtcData['youtube_link'] && (
                        <div className="video-responsive">
                            <iframe
                                title={`YouTube Video: P01050}`}
                                src={`https://www.youtube.com/embed/${getYoutubeVideoID(dtcData['youtube_link'])}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
    </div>
  );
};

const getYoutubeVideoID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default VideoPage;