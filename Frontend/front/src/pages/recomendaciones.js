import React, { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import './recomendaciones.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Recomendaciones() {
  const [canciones, setCanciones] = useState([]);
  const usuario_id = localStorage.getItem("usuario_id"); 
  const emocion_detectada = localStorage.getItem("emocion_detectada");
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario_id && emocion_detectada) {
      axios.post('https://api.mrmoodify.click/api/recomendaciones', {
        emocion: emocion_detectada,
        usuario_id: parseInt(usuario_id)
      })
        .then((res) => {
          setCanciones(res.data);
        })
        .catch((err) => {
          console.error('Error al cargar recomendaciones', err);
        });
    }
  }, [usuario_id, emocion_detectada]);

  return (
    <div className="recomendaciones-container">
      <Header />
      <main className="recomendaciones-list">
        <h3>🎶 Recomendaciones para: <span className="emocion">{emocion_detectada}</span></h3>
        <ul>
          {canciones.map((cancion) => (
            <li key={cancion.id}>
              🎵 {cancion.titulo} - {cancion.artista}
              {' '}
              <a href={cancion.url_spotify} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7477/7477009.png"
                  alt="Play"
                  className="play-icon"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="buttons">
          <button className="action-button" onClick={() => navigate('/RecomendacionesNuevas')}>
            Subir otra foto
          </button>
          <button className="action-button" onClick={() => navigate('/Historico')}>
            Ver historial
          </button>
        </div>
      </main>
    </div>
  );
}

export default Recomendaciones;
