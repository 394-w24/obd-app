import React, { useTransition } from 'react'
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import RequestPage from './components/RequestPage';
import CodeInfoPage from './components/CodeInfoPage';
import ProfilePage from './components/ProfilePage';
import NavPage from './components/NavPage';
import LoginPage from "./components/LoginPage"
import LocalMechanics from './components/LocalMechanics';
import MechanicPage from './components/MechanicPage';
import NavButton from './components/NavButton';

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
          {/* <Route path="/mechanic/:mechanicId" element={<MechanicPage /> } /> */}
      </Routes> 
      <NavButton/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
