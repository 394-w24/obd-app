import React from "react";
import { useState } from "react";
import icon from "../carRepair.png"
import "./Homepage.css"
import CodeInfoPage from "./CodeInfoPage";

const HomePage = ()  => {
    const [code, setCode] = useState({});

    const handleInputChange = (event) => {
        setCode(event.target.value.toUpperCase());
      };

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="inner">
                <a href="/" className="link">
                    <img src={icon} alt="Repair Icon" className="logo" />
                    <span className="title">RepairMate</span>
                </a>
            </div>
            <div className="inner">
                <p className="form-descriptor">To learn more about your car's required maintenance, input the repair code given by your OBD reader. </p>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input 
                            type="text"
                            class="form-control" 
                            onChange={handleInputChange} 
                            placeholder="Ex. P0100"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
             </div>
        </div>

    );
  }
  
  export default HomePage;