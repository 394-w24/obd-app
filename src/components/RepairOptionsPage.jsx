import React from 'react';
import { useNavigate } from 'react-router-dom';

const RepairOptionsPage = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
    <div className="list-group">
      <button type="button" className="btn">Quote from local repair</button>
      <button type="button" className="btn">Part location</button>
      <button type="button" className="btn">Repair guide</button>
      <button type="button" className="btn">Parts</button>
      <button type="button" className="btn">Videos</button>
    </div>
  </div>
  
  );
};

export default RepairOptionsPage;
