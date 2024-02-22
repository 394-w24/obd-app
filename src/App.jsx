import React, { useTransition } from 'react'
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequestPage from './components/RequestPage';
import CodeInfoPage from './components/CodeInfoPage';
import ProfilePage from './components/ProfilePage';
import NavPage from './components/NavPage';
import LoginPage from "./components/LoginPage"
import LocalMechanics from './components/LocalMechanics';
import PrivateRoutes from './utilities/PrivateRoutes';
import { useAuthState } from './utilities/firebase';

const App = ()  => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
          <Route path="/navpage" element={<NavPage />}/>
          <Route path="/request" element={<RequestPage/>}/>
          <Route path="/codeinfo" element={<CodeInfoPage /> } />
          <Route path="/profile" element={<ProfilePage /> } />
          <Route path="/mechanics" element={<LocalMechanics/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
