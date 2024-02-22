import React from 'react';
import "./NavPage.css"
import { Link } from 'react-router-dom';
import profile from ".././icons/user.png"
import repair from ".././icons/carRepair.png"
import settings from ".././icons/settings.png"
import contact from ".././icons/contact.png"
import LoginPage from "./LoginPage"
const NavPage = () => {
  return (
    <div className="container">
      <h3>Welcome, user!</h3>
      <LoginPage />
      <div className='nav-list'>
          <Link to="/request">            
            <img src={repair} alt="repair"/>
          </Link>
          <Link to="/profile">
            <img src={profile} alt="profile"/>
          </Link>
          <img src={settings} alt="setting"/>
          <img src={contact} alt="contact"/>
      </div>
    </div>
  );
};

export default NavPage;