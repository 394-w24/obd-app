import React, { useEffect, useState } from 'react';

const LocalMechanics = () => {
  const [mechanics, setMechanics] = useState([]);
  const bbox = '51.5145,-0.1423,51.5161,-0.1393'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const overpassQuery = `
          [out:json];
          (
            node["shop"="car_repair"](${bbox}); // Search for nodes with shop=car_repair tag
            way["shop"="car_repair"](${bbox});  // Search for ways with shop=car_repair tag
            node["a]
          );
          out body;
          >;
          out skel qt;`;

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
        setMechanics(fetchedMechanics);
      } catch (error) {
        console.error('Error fetching mechanics:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className='container'>
      <h1>Mechanics</h1>
      <ul>
        {mechanics.map(mechanic => (
          <li key={mechanic.id}>
            Mechanic ID: {mechanic.id}, Latitude: {mechanic.lat}, Longitude: {mechanic.lon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalMechanics;
