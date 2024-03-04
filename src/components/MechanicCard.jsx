import React from 'react';
import { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.css";
import { Document, Page} from 'react-pdf';
import "./MechanicCard.css";

  const MechanicCard = ({name, quote, rating}) => {

    const [quoteReceived, setQuoteReceived] = useState()
    const [viewQuote, setViewQuote] = useState()

    const quoteRequested = () => {
      setTimeout(function () {
        console.log("timeout")
      }, 10000)
      setQuoteReceived(true)
    }

    console.log(quote)

    const viewQuoteClicked = () => {
      setViewQuote(true)
    }

    const closePopup = () => {
      setViewQuote(false)
    }
    return (
      <div className="card" style={{ width: '90%' }}>
        <div className="card-body">
          <div className="card-title">
            <div>
              {name}
            </div>
            <div>
              {rating}/5.0 <i className="fa-solid fa-star" />
            </div>
          </div>
          <div style={{justifyContent: "center"}}>
          <button type="button" className="btn btn-primary" onClick={quoteRequested}>Request Quote</button>
          {quoteReceived ? <button type="button" style = {{padding:"15px 35px", fontSize: "20px"}}className="btn btn-primary" onClick={viewQuoteClicked}>View Quote</button> : <button type="button" className="btn btn-primary" disabled>View Quote</button>}
          </div>
        </div>
        {viewQuote && (
                <div className="quote-popup">
                    <div className="quote-popup-content">
                        <span className="close-popup" onClick={closePopup}>&times;</span>
                        <iframe src={quote}/>
                    </div>
                </div>
            )}
      </div>
  );
};

export default MechanicCard;

