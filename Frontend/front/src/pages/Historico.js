import React, { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import './Historico.css';
import axios from 'axios';

function Historico() {
  const [historialPorFecha, setHistorialPorFecha] = useState({});
  const usuario_id = localStorage.getItem('usuario_id');

  useEffect(() => {
    if (usuario_id) {
      axios.get(`http://localhost:3001/api/recomendaciones/historial/${usuario_id}`)
        .then(res => {
          const agrupado = {};
          res.data.forEach(item => {
            const fecha = new Date(item.fecha).toLocaleDateString();
            if (!agrupado[fecha]) agrupado[fecha] = [];
            agrupado[fecha].push(item);
          });
          setHistorialPorFecha(agrupado);
        })
        .catch(err => {
          console.error('Error al obtener historial', err);
        });
    }
  }, [usuario_id]);

  return (
    <div className="history-container">
      <Header />
      <main className="history-list">
        <h3>📜 Recomendaciones Recientes</h3>

        {Object.entries(historialPorFecha).map(([fecha, canciones]) => (
          <section className="history-section" key={fecha}>
            <h4>{fecha}</h4>
            <ul className="song-list">
              {canciones.map((item) => (
                <li key={item.id}>
                  🎵 {item.Cancion?.titulo} - {item.Cancion?.artista}{' '}
                  <a href={item.Cancion?.url_spotify} target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/7477/7477009.png"
                      alt="Play"
                      className="play-icon"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Historico;
