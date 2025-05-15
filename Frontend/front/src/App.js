import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; 
import MainMenu from './pages/MainMenu';
import RegisterPage from './pages/RegisterPage'; 
import History from './pages/Historico';
import RecomendacionesNuevas from './pages/RecomendacionesNuevas';
import Recomendaciones from './pages/recomendaciones';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}  />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main-menu" element={<MainMenu />} />
          <Route path="/Historico" element={<History />} />
          <Route path="/RecomendacionesNuevas" element={<RecomendacionesNuevas />} />
          <Route path="/recomendaciones" element={<Recomendaciones/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;