import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.css";


function LoginPage() {

//const [nombreUsuario, setNombreUsuario] = useState('');
const [email, setEmail] = useState(''); 
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    try {
      const response = await fetch('http://localhost:3001/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, contrasena }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // Almacena el token
        navigate('/main-menu');
      } else {
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      setError('Error al conectar con el servidor');
    }
  };

return (
  
<div className="login-container">
<header className="app-header">
              <h1 className="moodify-title">
                <Link to="/" className="moodify-link">
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
    <h1 className="titulo" >Iniciar Sesión</h1>
    {error && <p className="error-message">{error}</p>}
    <br></br>
          
      <img
        src="https://cdn-icons-png.flaticon.com/512/2102/2102633.png"
        alt="User"
        className="user-icon"
      />
      
      <div className="input-group">
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          className="input-field"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </div>
      <Link to="/register" className="register-btn">
        Registrarse
      </Link>
      <Link className="login-btn" onClick={handleLogin}>
        Iniciar Sesión
      </Link>
    </div>
  </div>
);
}

export default LoginPage;