import React from 'react';
import "./NavPage.css"
import { Link } from 'react-router-dom';
import profile from ".././icons/user.png"
import repair from ".././icons/carRepair.png"
import settings from ".././icons/settings.png"
import contact from ".././icons/contact.png"
import { useAuthState } from '.././utilities/firebase';


const NavPage = () => {

  const username = useAuthState()[0]?.displayName
  console.log(username)

  return (
    <div className="container">
      <h3>Welcome, {username}!</h3>
      <div className='nav-list'>
          <Link className= "nav-link" to="/request">            
            <img src={repair} alt="repair"/>
            <h4 className='nav-heading'>Diagnose<br/>Repair</h4>
          </Link>
          <Link className= "nav-link" to="/profile">
            <img src={profile} alt="profile"/>
            <h4 className='nav-heading'>Profile</h4>
          </Link>
          <div className= "nav-link">
            <img src={settings} alt="setting"/>
            <h4 className='nav-heading'>Settings</h4>
          </div>
          <Link className= "nav-link" to="/mechanics">
            <img src={contact} alt="contact"/>
            <h4 className='nav-heading'>Contact <br/>Mechanics</h4>
          </Link>
      </div>
    </div>
  );
};

export default NavPage;