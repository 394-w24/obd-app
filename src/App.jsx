import React from 'react'
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequestPage from './components/RequestPage';
import CodeInfoPage from './components/CodeInfoPage';
import ProfilePage from './components/ProfilePage';
import NavPage from './components/NavPage';

const App = ()  => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavPage />}/>
        <Route path="/request" element={<RequestPage/>}/>
        <Route path="/codeinfo" element={<CodeInfoPage /> } />
        <Route path="/profile" element={<ProfilePage /> } />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
