export const calculateBbox = (lat, lon, radius) => {
  const latCenter = lat;
  const lonCenter = lon;
  const widthMiles = radius;
  const heightMiles = radius;

    // Convert width and height from miles to degrees
    const latDegPerMile = 1 / 69; // Approximate value
    const lonDegPerMile = 1 / (Math.cos((latCenter * Math.PI) / 180) * 69); // Approximate value

    // Calculate the half-width and half-height in degrees
    const halfWidthDeg = 0.5 * widthMiles * latDegPerMile;
    const halfHeightDeg = 0.5 * heightMiles * lonDegPerMile;

    // Calculate the coordinates of the bounding box
    const newLatMin = latCenter - halfHeightDeg;
    const newLatMax = latCenter + halfHeightDeg;
    const newLonMin = lonCenter - halfWidthDeg;
    const newLonMax = lonCenter + halfWidthDeg;

    const bbox = [newLatMin, -newLonMin, newLatMax, -newLonMax]
  

  return bbox;
};

export const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 3958.8; 
    const φ1 = lat1 * Math.PI / 180; 
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;
  
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = R * c; // Distance in miles
    return distance;
  }
  