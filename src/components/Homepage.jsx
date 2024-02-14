import React from "react";
import { useState } from "react";
import icon from "../carRepair.png"
import "./Homepage.css"
import data from "../../data/data.json"
import CodeInfoPage from "./CodeInfoPage";

const HomePage = ()  => {
    const [code, setCode] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCode = e.target.code.value 
        if (data[newCode]) {
            setCode(-1)
        }else{
            setCode(e.target.code.value)
        }
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
                            name="code" 
                            placeholder="Ex. P0100"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
             </div>
            
            <div>
                {code ? 
                    <div>
                        {code == -1 ? 
                        <div>
                            <h1>The code was not found :/</h1>
                        </div>
                        : 
                        <div>
                            <h1>More information for: {code}</h1>
                        </div>
                        }
                    </div>
                    :
                    <div></div>
                }
            </div>
        </div>

    );
  }
  
  export default HomePage;