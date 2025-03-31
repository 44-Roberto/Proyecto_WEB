import React from 'react';
import Header from '../componentes/Header';
import './Historico.css';

function Historico() {
  return (
    <div className="history-container">
      <Header />

      <main className="history-list">
        <h3> Recomendaciones Recientes</h3>

        <section className="history-section">
          <h4>Hoy</h4>
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
          </ul>
        </section>

        <section className="history-section">
          <h4> Ayer</h4>
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
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Historico;
