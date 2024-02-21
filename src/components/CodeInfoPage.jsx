import React from "react";
import "./CodeInfoPage.css"

const CodeInfoPage = (code)  => {
    return (
      <div className="container">
          {code == -1 ?
              <div>
                  <h1>The code was not found :/</h1>
              </div>
              :
              <div>
                  <div>
                      <h3 style={{textAlign: "center"}}>
                          <b>Repair Description</b>
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
    );
  }
  
  export default CodeInfoPage;