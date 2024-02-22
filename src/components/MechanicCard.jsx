import React from 'react';
import { Link } from "react-router-dom";
import "./MechanicCard.css";

  const MechanicCard = ({id, tags}) => {
    const name = tags.name

    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <div className="card-title">
            {name}
          </div>
        </div>
      </div>
  );
};

export default MechanicCard;