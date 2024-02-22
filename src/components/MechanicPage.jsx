import React from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MechanicCard.css";

//For future use when user clicks on a mechanic. Not in use right now
const MechanicPage = ({id, tags, coords}) => {
    const { mechanicId } = useParams()

    return (
        <div></div>
  );
};

export default MechanicPage;