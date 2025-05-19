import React, { useRef, useState } from 'react';
import Header from '../componentes/Header';
import './RecomendacionesNuevas.css';
import { useNavigate } from 'react-router-dom';

function RecomendacionesNuevas() {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageBase64, setImageBase64] = useState('');
  const [emotionResult, setEmotionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Cargar foto desde archivo
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Tomar foto desde cámara
  const handleTakePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/jpeg');
    setImagePreview(dataUrl);
    setImageBase64(dataUrl);
    setShowCamera(false);
  };

  const startCamera = () => {
    setShowCamera(true);
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  };

  const handleAnalyzeImage = async () => {
    if (!imageBase64) return;

    setLoading(true);
    try {
      const response = await fetch('https://Backend-Proyecto-env.eba-frfujcdg.us-east-1.elasticbeanstalk.com/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: imageBase64 }),
      });

      const data = await response.json();
      if (response.ok) {
        setEmotionResult(data);
        localStorage.setItem('emocion_detectada', data.emotion); 
      } else {
        setEmotionResult({ error: data.message });
      }
    } catch (error) {
      setEmotionResult({ error: 'Error de conexión' });
    } finally {
      setLoading(false);
    }
  };

  const handleViewRecommendations = () => {
    navigate('/recomendaciones');
  };

  return (
    <div className="recommendation-container">
      <Header />
      <main className="recommendation-content">
        <p className="description">
          Elige cómo deseas capturar tu emoción y deja que Moodify analice tu estado
        </p>

        {!imagePreview && !showCamera && (
          <div className="upload-section">
            <input
              type="file"
              id="upload"
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
            <label htmlFor="upload" className="upload-button">Subir foto</label>
            <button className="upload-button" onClick={startCamera}>Usar cámara</button>
          </div>
        )}

        {showCamera && (
          <div className="camera-section">
            <video ref={videoRef} autoPlay className="camera-video" />
            <button className="recommendation-button" onClick={handleTakePhoto}>Tomar foto</button>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
        )}

        {imagePreview && (
          <div className="result-section">
            <img src={imagePreview} alt="Capturada" className="uploaded-image-large" />
            {!emotionResult ? (
              <button className="recommendation-button" onClick={handleAnalyzeImage} disabled={loading}>
                {loading ? 'Analizando...' : 'Analizar emoción'}
              </button>
            ) : emotionResult.error ? (
              <>
                <p><strong>Error:</strong> {emotionResult.error}</p>
                <button className="recommendation-button" onClick={() => window.location.reload()}>Intentar otra vez</button>
              </>
            ) : (
              <>
                <p>
                  Tu emoción: <strong>{emotionResult.emotion}</strong><br />
                  Confianza: <strong>{emotionResult.confidence.toFixed(2)}%</strong>
                </p>
                <button className="recommendation-button" onClick={handleViewRecommendations}>
                  Ver recomendaciones
                </button>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default RecomendacionesNuevas;
