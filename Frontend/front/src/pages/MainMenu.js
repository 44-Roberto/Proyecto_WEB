import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css'; 
import Header from '../componentes/Header';  /*lo agregué para tener un solo encabezado para todos mejor :3*/

function MainMenu() {
  return (
    <div className="main-menu-container">
       <Header />
      <h1 className="titulo-usuario" >Usuario</h1>

      <nav className="menu">
        <ul>
          <li>
            <Link to="/Historico">Revisar historial</Link>
          </li>
          <li>
            <Link to="/recomendaciones">Lista de recomendaciones</Link>
          </li>
          <li>
            <Link to="/RecomendacionesNuevas">Nueva recomendación</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainMenu;