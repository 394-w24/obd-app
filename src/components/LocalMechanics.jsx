import React, { useEffect, useState } from 'react';
import MechanicCard from './MechanicCard';
import { calculateBbox, haversineDistance } from '../utilities/coordinates';
import { SpinningCircles } from 'react-loading-icons'
import ThreeDots from 'react-loading-icons/dist/esm/components/three-dots';
import icon from ".././icons/carRepair.png";

const LocalMechanics = () => {
  const [mechanics, setMechanics] = useState([]);
  const [location, setLocation] = useState({
    lat: 42.0451, 
    lon: 87.6877
  });

 
  //trying to get user's current location, just using evanston coords for now 
  // function error(){
  //   console.log("Could not find location")
  // }
  // //navigator.geolocation.getCurrentPosition(setLocation, error)

  // setLocation({lat:42.0451, lon:87.6877})
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bbox = calculateBbox(location.lat, location.lon, 2).join(",")
        const overpassQuery = `
        [out:json];
        nwr["shop"="car_repair"](${bbox});
        out center;`;

        const response = await fetch('https://overpass-api.de/api/interpreter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `data=${encodeURIComponent(overpassQuery)}`,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch mechanics');
        }

        const data = await response.json();
        const fetchedMechanics = data.elements.map(element => ({
          id: element.id,
          lat: element.lat,
          lon: element.lon,
          tags: element.tags
        }));
        setMechanics(fetchedMechanics.filter(mechanic => mechanic.tags.name).sort((a, b) => haversineDistance(location.lat, location.lon, b.lat, b.lon) -haversineDistance(location.lat, location.lon, a.lat, a.lon)).slice(0, 10));
      } catch (error) {
        console.error('Error fetching mechanics:', error);
      }
    };
  
    fetchData();
  }, []); 


  return (
    <div className='container'>
      <a href="/navpage" className="link">
        <img src={icon} alt="Repair Icon" className="logo" />
      </a>
      <h1>Mechanics Near You</h1>
      <ul>
        {mechanics.map(mechanic => (
          <MechanicCard id={mechanic.id} tags={mechanic.tags}/>
        ))}
      </ul>
    </div>
  );
};

export default LocalMechanics;
