import React, { useState } from 'react';
import { signInWithGoogle, signOut } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Include the CSS for the new design
import LoginLogo from ".././icons/LoginLogo.png"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate('/navpage'); // Replace with your desired path
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithEmail = () => {
    // signInWithEmail logic here
  };

  const logout = () => {
    signOut();
  };

  return (
    <div className="screen-1">
      <img src={LoginLogo} alt="LoginLogo"/>
      {/* <div className="email">
        <label htmlFor="email">Email Address</label>
        <div className="sec-2">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="email"
            name="email"
            placeholder="Username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <div className="sec-2">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            className="pas"
            type="password"
            name="password"
            placeholder="············"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ion-icon className="show-hide" name="eye-outline"></ion-icon>
        </div>
      </div>
      <button className="login" onClick={loginWithEmail}>Login</button> */}
      <p1 className="header">RepairMate</p1>
      <button className="login" onClick={loginWithGoogle}>Log In with Google</button>
      <div className="footer">
        <span>Don't have an account? Sign Up</span>
      </div>
    </div>
  );
};

export default LoginPage;
