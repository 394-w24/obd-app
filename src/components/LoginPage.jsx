import React, { useState } from 'react';
import { signInWithGoogle, signOut } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Include the CSS for the new design
import LoginLogo from ".././icons/LoginLogo.png"

const LoginPage = () => {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate('/navpage'); // Replace with your desired path
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="screen-1">
      <img src={LoginLogo} alt="LoginLogo"/>
      <p1 className="header" data-cy="repairmate">RepairMate</p1>
      <button className="login" onClick={loginWithGoogle}>Log In with Google</button>
      <div className="footer">
        <span>Don't have an account? Sign Up</span>
      </div>
    </div>
  );
};

export default LoginPage;
