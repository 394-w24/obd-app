import React, { useEffect, useState } from 'react';
import MechanicCard from './MechanicCard';
import icon from ".././icons/carRepair.png";
import { useDbData } from '../utilities/firebase';

const  LocalMechanics = () => {
  const mechanics = useDbData("/Mechanics")[0]  
  console.log("mechanics", mechanics)

  if (mechanics === undefined) {
    return (
      <div className='container'>
        <a href="/navpage" className="link">
          <img src={icon} alt="Repair Icon" className="logo" />
        </a>
        <h1>Loading ...</h1>
      </div>
    )
  }


  return (
    <div className='container'>
      <a href="/navpage" className="link">
        <img src={icon} alt="Repair Icon" className="logo" />
      </a>
      <h1>Mechanics Near You</h1>
      {Object.values(mechanics).map(mechanic => 
        <MechanicCard name = {mechanic.Name} quote = {mechanic.Quote} rating = {mechanic.Rating}/>
      )}
    </div>
  );
};

export default LocalMechanics;

