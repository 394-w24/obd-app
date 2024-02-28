// Response.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from ".././icons/carRepair.png";

const Response = () => {
  return (
    <div className="container">
        <div>
            <h3 style={{textAlign: "center"}}>
                <b>Repair Description</b>
            </h3>
            <ul>
                <li>Replace Catalytic Converter(s) with new OE Catalytic Converter(s)</li>
                <li><b>Urgency:</b> 2
                    <ul>
                        <li>Urgency Description: Repair immediately if drivability issues are present. Threat to essential system components if not repaired as soon as possible.</li>
                    </ul>
                </li>
                <li><b>Repair:</b>
                    <ul>
                        <li>Difficulty: 3</li>
                        <li>Part Cost: $1967.01</li>
                        <li>Labor Cost: $244.674</li>
                        <li>Misc Cost: $25</li>
                        <li>Total Cost: $2236.684</li>
                    </ul>
                </li>
              
             
            </ul>
        </div>

        <Link to="/options">
                <button className="circle-btn">Let's Fix It!</button>

        <Link to="/mechanics">
                <button className="btn btn-primary custom-button">Find Mechanics</button>
        </Link>
        <Link to="/repairguide">
                <button className="btn btn-primary custom-button">Repair Guide</button>

        </Link>
    </div> 
  );
};

export default Response;
