import React from 'react';
import MechanicCard from './MechanicCard';
import icon from ".././icons/carRepair.png";
import { useDbData } from '../utilities/firebase';

const  LocalMechanics = () => {
  const mechanics = useDbData("/Mechanics")[0]  

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
      <div>
          <a href="/navpage" className="link">
              <img src={icon} alt="Repair Icon" className="logo"/>
              <span className="title">RepairMate</span>
          </a>
      </div>
      <h1>Mechanics Near You</h1>
      {Object.values(mechanics).sort((a, b) => b.Rating - a.Rating ).map(mechanic => 
        <MechanicCard name = {mechanic.Name} quote = {mechanic.Quote} rating = {mechanic.Rating} lat = {mechanic.Latitude} lon = {mechanic.Longitude} />
      )}
    </div>
  );
};

export default LocalMechanics;

