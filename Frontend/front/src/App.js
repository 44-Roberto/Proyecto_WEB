import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; 
import MainMenu from './pages/MainMenu';
import RegisterPage from './pages/RegisterPage'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main-menu" element={<MainMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;