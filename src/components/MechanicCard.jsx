import React from 'react';
import { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.css";
import { haversineDistance } from '../utilities/coordinates';
import "./MechanicCard.css";

  const MechanicCard = ({name, quote, rating, lat, lon}) => {

    const currentLat = 42.057838
    const currentLong = -87.676140

    const distance = haversineDistance(currentLat, currentLong, lat, lon)

    const [quoteReceived, setQuoteReceived] = useState()
    const [viewQuote, setViewQuote] = useState()

    const quoteRequested = () => {
      setTimeout(function () {
        console.log("timeout")
      }, 10000)
      setQuoteReceived(true)
    }

    const viewQuoteClicked = () => {
      setViewQuote(true)
    }

    const closePopup = () => {
      setViewQuote(false)
    }
    return (
      <div>
      <div className="card" style={{ width: '90%' }}>
        <div className="card-body">
          <div className="card-title">
            <div>
              {name}
            </div>
            <div>
              {rating}/5.0 <i className="fa-solid fa-star" /> 
              <br/>
              {distance.toFixed(2)} mi away
            </div>
          </div>
          <div style={{justifyContent: "center", alignContent: "center"}}>
            <button type="button" className="btn btn-primary" onClick={quoteRequested}>Request Quote</button>
            <br/>
            {quoteReceived ? <button type="button" className="btn btn-primary" onClick={viewQuoteClicked}>View Quote</button> : <button type="button" className="btn btn-primary" disabled>View Quote</button>}
          </div>
        </div>
      </div>
      <div>
        {viewQuote && (
                <div className="quote-popup">
                    <div className="quote-popup-content">
                        <span className="close-popup" onClick={closePopup}>&times;</span>
                        <iframe src={quote} style={{ height: '100%' }}/>
                    </div>
                </div>
            )}
        </div>
      </div>
  );
};

export default MechanicCard;

