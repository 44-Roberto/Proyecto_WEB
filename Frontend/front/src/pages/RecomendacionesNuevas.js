import React, { useState } from 'react';
import Header from '../componentes/Header';
import './RecomendacionesNuevas.css';
import { useNavigate } from 'react-router-dom';

function RecomendacionesNuevas() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleViewRecommendations = () => {
    navigate('/Recomendaciones');
  };

  return (
    <div className="recommendation-container">
      <Header />

      <main className="recommendation-content">
        <p className="description">
          Descripción <br />
          Sube una foto y te recomendamos canciones en base a tu estado emocional
        </p>

        {!image ? (
          <div className="upload-section">
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <label htmlFor="file" className="upload-button">
              Subir foto
            </label>
          </div>
        ) : (
          <div className="result-section">
            <img src={image} alt="Subida" className="uploaded-image" />
            <p>Mood obtenido: <strong className="happy-text">Feliz</strong></p>
            <button className="recommendation-button" onClick={handleViewRecommendations}>
              Ver recomendaciones
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default RecomendacionesNuevas;
