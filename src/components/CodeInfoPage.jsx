import React from 'react';
import { useLocation } from 'react-router-dom';
import Response from './response';
import icon from ".././icons/carRepair.png";

const CodeInfoPage = () => {
  const location = useLocation();
  const formData = location.state || {};

  return (
    <div className="container">
      <div>
          <a href="/navpage" className="link">
              <img src={icon} alt="Repair Icon" className="logo"/>
              <span className="title">RepairMate</span>
          </a>
      </div>
      <h1>Code Information</h1>
      {formData.vin && <p>VIN: {formData.vin}</p>}
      {formData.miles && <p>Mileage: {formData.miles}</p>}
      {/* {formData.code && <p>Code: {formData.code}</p>} */}
      <Response />
    </div>
  );
};

export default CodeInfoPage;
