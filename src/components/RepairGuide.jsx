import React from 'react';
import guideData from '../data/repair.json'; 
import icon from ".././icons/carRepair.png";

const RepairGuide = () => {
    const dtcEntries = guideData['Repair Guide']['DTC'];

    return (
        <div>
            <a href="/navpage" className="link">
                <img src={icon} alt="Repair Icon" className="logo" />
            </a>
            <h1>Repair Guide</h1>
            {Object.entries(dtcEntries).map(([dtcCode, dtcData]) => (
                <div key={dtcCode}>
                    <h2>DTC: {dtcCode}</h2>
                    <p>Description: {dtcData['DTC Explanation']}</p>
                    <p>Part: {dtcData['Part']}</p>
                    <p>Possible Causes: {dtcData['Possible Causes']}</p>
                    <div>
                        {dtcData['image_url'].map((url, index) => (
                            <img 
                                key={index} 
                                src={url} 
                                alt={`${dtcCode} Image ${index + 1}`}
                                style={{ maxWidth: '100%', height: 'auto' }} 
                            />
                        ))}
                    </div>
                    {dtcData['youtube_link'] && (
                        <div className="video-responsive">
                            <iframe
                                title={`YouTube Video ${dtcCode}`}
                                src={`https://www.youtube.com/embed/${getYoutubeVideoID(dtcData['youtube_link'])}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}


                </div>
            ))}
        </div>
    );
};

const getYoutubeVideoID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default RepairGuide;
