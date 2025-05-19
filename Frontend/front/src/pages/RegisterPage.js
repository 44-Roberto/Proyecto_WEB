import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.css"; 

function RegisterPage() {

 const [nombreUsuario, setNombreUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError('');

    

    try {
      const response = await fetch('https://api.mrmoodify.click/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_usuario: nombreUsuario, email, contrasena }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Usuario registrado exitosamente:', data);
        localStorage.setItem('token', data.token);
        navigate('/main-menu');
      } else {
        setError(data.message || 'Error al registrar el usuario');
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
       {error && <p className="error-message">{error}</p>}
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
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
          
        </div>
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
         <Link to="/login" className="register-btn2" onClick={handleRegister}> 
                  Registrarse
                </Link>
      </div>
    </div>
  );
}

export default RegisterPage;