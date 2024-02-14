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
        const newCode = e.target.code.value
        if (data[newCode]) {
            setCode(-1)
        } else {
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
                <p className="form-descriptor">To learn more about your car's required maintenance, input some information about you car and its DTC code. </p>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <h4>Vin Number:</h4>
                        <input
                            type="text"
                            class="form-control"
                            name="vin"
                            placeholder="Ex. 4Y1SL65848Z411439" />
                        <h4>Car Mileage:</h4>
                        <input
                            type="text"
                            class="form-control"
                            name="miles"
                            placeholder="Ex. 45689" />
                        <h4>DTC Code:</h4>
                        <input
                            type="text"
                            class="form-control"
                            name="code"
                            placeholder="Ex. P0100" />
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
                                <div>
                                    <ul>
                                        <li>Description: Replace Catalytic Converter(s) with new OE Catalytic Converter(s)</li>
                                        <li>Urgency: 2
                                            <ul>
                                                <li>Urgency Description: Repair immediately if drivability issues are present. Threat to essential system components if not repaired as soon as possible.</li>
                                            </ul>
                                        </li>
                                        <li>Repair:
                                            <ul>
                                                <li>Difficulty: 3</li>
                                                <li>Part Cost: $1967.01</li>
                                                <li>Labor Cost: $244.674</li>
                                                <li>Misc Cost: $25</li>
                                                <li>Total Cost: $2236.684</li>
                                            </ul>
                                        </li>
                                        <li>Parts:
                                            <ul>
                                                <li>Part: Catalytic Converter
                                                    <ul>
                                                        <li>Manufacturer: </li>
                                                        <li>Price: $683.67</li>
                                                        <li>Quantity: 1</li>
                                                    </ul>
                                                </li>
                                                <li>Part: Transmission
                                                    <ul>
                                                        <li>Manufacturer: </li>
                                                        <li>Price: $1283.34</li>
                                                        <li>Quantity: 1</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>TSB:
                                            <ul>
                                                <li>Instructions: <a href="http://downloads.innova.com/tsb-files/118000/4824780.pdf">Download TSB Instructions</a></li>
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
    );}
  export default HomePage;