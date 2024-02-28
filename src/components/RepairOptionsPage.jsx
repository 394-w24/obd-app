import React from 'react';
import { useNavigate } from 'react-router-dom';

const RepairOptionsPage = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
    <div className="list-group">
      <button type="button" className="list-group-item list-group-item-action">Quote from local repair</button>
      <button type="button" className="list-group-item list-group-item-action list-group-item-secondary">Part location</button>
      <button type="button" className="list-group-item list-group-item-action list-group-item-success">Repair guide</button>
      <button type="button" className="list-group-item list-group-item-action list-group-item-danger">Parts</button>
      <button type="button" className="list-group-item list-group-item-action list-group-item-warning">Videos</button>
    </div>
  </div>
  
  );
};

export default RepairOptionsPage;
