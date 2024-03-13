import React from 'react';
import "./NavPage.css"
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, signOut } from '.././utilities/firebase';


const NavPage = () => {

  const username = useAuthState()[0]?.displayName
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className="container">
  
      <h3>Welcome, {username}!</h3>
      <div className='nav-list'>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body" data-cy="repair">
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
      <button onClick={handleLogout} className="btn btn-primary">Logout</button>
    </div>
  );
};

export default NavPage;