import React from 'react';
import Header from '../componentes/Header';
import './recomendaciones.css';
import { useNavigate } from 'react-router-dom';

function Recomendaciones() {
  const navigate = useNavigate();

  return (
    <div className="recomendations-container">
      <Header />

      <main className="recomendations-content">
        <h3>Recomendaciones Recientes</h3>

        <section className="recomendations-section">
          <ul className="song-list">
            <li>
              🎵 Canción 1 - Artista 1 {' '}
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7477/7477009.png"
                  alt="Play"
                  className="play-icon"
                />
              </a>
            </li>
            <li>
              🎵 Canción 2 - Artista 2 {' '}
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7477/7477009.png"
                  alt="Play"
                  className="play-icon"
                />
              </a>
            </li>
            <li>
              🎵 Canción 3 - Artista 3 {' '}
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7477/7477009.png"
                  alt="Play"
                  className="play-icon"
                />
              </a>
            </li>
            <li>
              🎵 Canción 4 - Artista 4 {' '}
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7477/7477009.png"
                  alt="Play"
                  className="play-icon"
                />
              </a>
            </li>
            <li>
              🎵 Canción 5 - Artista 5 {' '}
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7477/7477009.png"
                  alt="Play"
                  className="play-icon"
                />
              </a>
            </li>
          </ul>
        </section>

        <div className="buttons">
          <button
            className="action-button"
            onClick={() => navigate('/RecomendacionesNuevas')}
          >
            Subir otra foto
          </button>
          <button
            className="action-button"
            onClick={() => navigate('/Historico')}
          >
            Historial
          </button>
        </div>
      </main>
    </div>
  );
}

export default Recomendaciones;
