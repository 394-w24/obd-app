import React from "react";
import { useState } from "react";
import icon from ".././icons/carRepair.png"
import "./RequestPage.css"
import { Link, Navigate } from "react-router-dom";
import "./response.css"
import "./response.css"
import { useNavigate } from "react-router-dom";




const RequestPage = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formValues = {
        vin: e.target.vin.value,
        miles: e.target.miles.value,
        code: e.target.code.value
      };
      // Instead of setting state, navigate to the CodeInfoPage
      navigate('/codeinfo', { state: formValues });
    };
    return (
        <div className="container">
            <div className="inner">
                <a href="/" className="link">
                    <img src={icon} alt="Repair Icon" className="logo" />
                    <span className="title">RepairMate</span>
                </a>
            </div>
            <div className="form-container">
                <p className="form-descriptor">To learn more about your car's required maintenance, input some information about your car and its DTC code.</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h4 className="input-label" style={{marginBottom: "0rem"}}>VIN Number:</h4>
                        <a href="https://www.txdmv.gov/motorists/how-to-find-the-vin" className="small-link" target="_blank" rel="noopener noreferrer">What is a VIN number?</a>
                        <input type="text" className="form-control" name="vin" placeholder="Ex. 4Y1SL65848Z411439" />
                    </div>
                    <hr className="divider"></hr>
                    <div className="form-group">
                        <h4 className="input-label">Car Mileage:</h4>
                        <input type="text" className="form-control" name="miles" placeholder="Ex. 45689" />
                    </div>
                    <hr className="divider"></hr>
                    <div className="form-group">
                        <h4 className="input-label">DTC Code:</h4>
                        <input type="text" className="form-control" name="code" placeholder="Ex. P0100" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default RequestPage;