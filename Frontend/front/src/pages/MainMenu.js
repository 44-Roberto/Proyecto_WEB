import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css'; 

function MainMenu() {
  return (
    <div className="main-menu-container">
      <div className="header">
        <h1>
        <Link to="/main-menu" className='moodify' >MOODIFY</Link> {/*sujeto a cambios, quizas por un icono?*/}
           </h1>
        <div className="user-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2102/2102633.png" 
            alt="Usuario"
            className="user-icon"
          />
        
        </div>
        
      </div>
      <h1 className="titulo-usuario" >Usuario</h1>

      <nav className="menu">
        <ul>
          <li>
            <Link to="/history">Revisar historial</Link>
          </li>
          <li>
            <Link to="/recommendations">Lista de recomendaciones</Link>
          </li>
          <li>
            <Link to="/new-recommendation">Nueva recomendación</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainMenu;