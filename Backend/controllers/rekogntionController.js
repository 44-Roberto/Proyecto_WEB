// controllers/rekognitionController.js
const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,         
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY 
});


const rekognition = new AWS.Rekognition();

const getAnalysis = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ message: 'Imagen no enviada' });
    }

    const base64Image = content.split(';base64,').pop();
    const imageBuffer = Buffer.from(base64Image, 'base64');

    const params = {
      Image: { Bytes: imageBuffer },
      Attributes: ['ALL']
    };

    const response = await rekognition.detectFaces(params).promise();

    if (response.FaceDetails.length > 0) {
      const emotion = response.FaceDetails[0].Emotions[0];
      return res.status(200).json({
        emotion: emotion.Type,
        confidence: emotion.Confidence
      });
    } else {
      return res.status(400).json({ message: 'No se detectó un rostro claro' });
    }
  } catch (error) {
    console.error('Error en Rekognition:', error);
    return res.status(500).json({
      message: 'Error al analizar imagen',
      error: error.message
    });
  }
};

module.exports = { getAnalysis };
