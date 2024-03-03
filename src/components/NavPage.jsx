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

  return (
    <div className="container">
      <h3>Welcome, {username}!</h3>
      <div className='nav-list'>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
              <Link className="card-title" style= {{textAlign:"center"}} to="/request">            
                <h3 className="card-title">Repair</h3>
              </Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', backgroundColor: 'grey'}}>
          <div className="card-body">
            <h3 style={{color: "white", fontWeight: "bold", fontSize: "20px", textAlign: "center"}}>Maintenance</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavPage;