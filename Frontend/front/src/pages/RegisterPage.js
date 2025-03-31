import React from "react";
import { Link } from 'react-router-dom'; 
import "./LoginPage.css"; 

function LoginPage() {
  return (
    <div className="login-container">
       <header className="app-header">
                      <h1 className="moodify-title">
                        <Link to="/register" className="moodify-link">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/6707/6707113.png"
                            alt="Moodify Icon"
                            className="moodify-icon"
                          />
                          MOODIFY
                        </Link>
                      </h1>
                      <div className="user-info">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2102/2102633.png"
                          alt="Usuario"
                          className="user-icon"
                        />
                      </div>
                    </header>
      <div className="login-card">
      <h1 className="titulo" >Registrarse</h1>
      <br></br>
      
        <img
          src="https://cdn-icons-png.flaticon.com/512/2102/2102633.png"
          alt="User"
          className="user-icon"
        />
        <div className="input-group">
          <label htmlFor="user">Usuario</label>
          <input
            type="user"
            id="usuario"
            className="input-field"
          />
          
        </div>
        <div className="input-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            className="input-field"
          />
        </div>
         <Link to="/" className="register-btn2"> 
                  Registrarse
                </Link>
      </div>
    </div>
  );
}

export default LoginPage;