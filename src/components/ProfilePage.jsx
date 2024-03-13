import React from 'react';
import profile from ".././icons/user.png"
import "./ProfilePage.css"
import { useAuthState } from '.././utilities/firebase';

const ProfilePage = () => {

  const username = useAuthState()[0]?.displayName

  return (
    <div className='container'>
      <div className="inner">
          <img src={profile} alt="Profile Icon" className="logo" />
      </div>
      <h1 className="title">{username}</h1>
    </div>
  );
};

export default ProfilePage;