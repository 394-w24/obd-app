import React from "react";
import { useState } from "react";
import icon from "../carRepair.png"
import "./Homepage.css"
import data from "../../data/data.json"
import "./response.css"



const HomePage = () => {
    const [code, setCode] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        setCode(e.target.code.value)
        // const newCode = e.target.code.value
        // if (data[newCode]) {
        //     setCode(-1)
        // } else {
        //     setCode(e.target.code.value)
        // }
    }
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
            <br></br>
            <div>
                {code ?
                    <div>
                        {code == -1 ?
                            <div>
                                <h1>The code was not found :/</h1>
                            </div>
                            :
                            <div>
                                <div>
                                    <h3 style={{textAlign: "center"}}>
                                        <b><u>Repair Description</u></b>
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
                                        <li><b>Parts:</b>
                                            <ul>
                                                <li>Part: Catalytic Converter
                                                    <ul>
                                                        <li>Price: $683.67</li>
                                                        <li>Quantity: 1</li>
                                                    </ul>
                                                </li>
                                                <li>Part: Transmission
                                                    <ul>
                                                        <li>Price: $1283.34</li>
                                                        <li>Quantity: 1</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><b>TSB:</b>
                                            <ul>
                                                <li>Instructions: <a href="http://downloads.innova.com/tsb-files/118000/4824780.pdf" target="_blank" rel="noopener noreferrer">Download TSB Instructions</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
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