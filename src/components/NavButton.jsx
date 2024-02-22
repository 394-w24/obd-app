import React from 'react';
import './NavButton.css'; 
import home from ".././icons/home.png"
import { Link, useLocation} from 'react-router-dom';

const NavButton = () => {
  const location = useLocation()

  if(location.pathname === "/" || location.pathname === "/navpage") {
    return null
  }

  return (
    <div className="banner">
      <Link to="/navpage">
        <img src={home} alt="house icon"/>
      </Link>
    </div>
  );
};

export default NavButton;