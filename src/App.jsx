import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RequestPage from './components/RequestPage';
import CodeInfoPage from './components/CodeInfoPage';
import ProfilePage from './components/ProfilePage';
import NavPage from './components/NavPage';
import LoginPage from "./components/LoginPage"
import LocalMechanics from './components/LocalMechanics';
import NavButton from './components/NavButton';
import RepairOptionsPage from './components/RepairOptionsPage';
import RepairGuide from './components/RepairGuide';
import PartsLocationPage from './components/PartsLocationPage';


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
          <Route path="/options" element={<RepairOptionsPage/>}/>
          <Route path="/repairguide" element={<RepairGuide />} />
          <Route path="/location" element={<PartsLocationPage />} />
      </Routes> 
      <NavButton/>
    </BrowserRouter>
  );
}

export default App;
