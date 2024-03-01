import React from "react";
import { useState } from "react";
import icon from ".././icons/carRepair.png"
import "./RequestPage.css"
import { Link, Navigate } from "react-router-dom";
import "./response.css"
import "./response.css"
import { useNavigate } from "react-router-dom";
import vinLocationImage from '../assets/vinLocation.jpg';
import ErrorModal from "./ErrorModal";




const RequestPage = () => {
    const navigate = useNavigate();
    //Added state for vin - Eraj
    const [vin, setVin] = useState('');
    //Added state for vin location photo popup visibility - Eraj
    const [showVinPopup, setShowVinPopup] = useState(false);

    const [error, setError] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();
      const formValues = {
        vin: vin,
        miles: e.target.miles.value,
        code: e.target.code.value
      };
      //check for valid DTC code (in this case only p0150)
      if (formValues.code == 'p0150' || formValues.code == 'P0150'){
        navigate('/codeinfo', { state: formValues });
        
      }else{
        setError(true)
      }
    };

    //Handle VIN input change - Eraj
    const handleVinChange = (e) => {
        setVin(e.target.value.toUpperCase()); //Convert to uppercase
      };
    //Toggle VIN location photo popup visibility - Eraj
    const toggleVinPopup = () => {
        setShowVinPopup(!showVinPopup);
      };

    //close error modal for wrong dtc code
    const handleCloseModal = () => {
        setError(false);
    };

    return (
        <div className="container">
            <div className="inner">
                <a href="/navpage" className="link">
                    <img src={icon} alt="Repair Icon" className="logo" />
                    <span className="title">RepairMate</span>
                </a>
            </div>
            <div className="form-container">
                <p className="form-descriptor">To learn more about your car's required maintenance, input some information about your car and its DTC code.</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h4 className="input-label" style={{marginBottom: "0rem"}} >VIN Number:</h4>
                        <button type="button" className="small-link" onClick={toggleVinPopup}>What is a VIN number and how to locate it?</button>
                        <input type="text" className="form-control" name="vin" placeholder="Ex. 4Y1SL65848Z411439" value={vin} onChange={handleVinChange}/>
                    </div>
                    <hr className="divider"></hr>
                    <div className="form-group">
                        <h4 className="input-label">DTC Code:</h4>
                        <input type="text" className="form-control" name="code" placeholder="Ex. P0100" />
                    </div>
                    <hr className="divider"></hr>
                    <div className="form-group">
                        <h4 className="input-label">Car Mileage:</h4>
                        <input type="text" className="form-control" name="miles" placeholder="Ex. 45689" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            {showVinPopup && (
                <div className="vin-popup">
                    <div className="vin-popup-content">
                        <span className="close-popup" onClick={toggleVinPopup}>&times;</span>
                        <img src={vinLocationImage} alt="Common VIN Locations" />
                    </div>
                </div>
            )}
            {error && 
                <ErrorModal onClose={handleCloseModal}/>
            }
        </div>
    );
}

export default RequestPage;