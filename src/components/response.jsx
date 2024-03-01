import React from 'react';
import { Link } from 'react-router-dom';
import icon from ".././icons/carRepair.png";

const Response = () => {
  return (
    <div className='container'>
        <div>
            <h4 style={{textAlign: "center"}}>P0150</h4>
            <ul>
                    <li>O2 Sensor Circuit Malfunctions</li>
            </ul>
        </div>

        <Link to="/options">
            <button className="btn btn-primary custom-button" >Let's Fix It!</button>
        </Link> {/* This was missing a closing tag */}
    </div> 
  );
};

export default Response;
