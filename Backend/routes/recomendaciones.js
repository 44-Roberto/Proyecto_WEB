const express = require('express');
const router = express.Router();
const { generarRecomendaciones, obtenerHistorial } = require('../controllers/recomendacionesController');

router.post('', generarRecomendaciones);
router.get('/historial/:usuarioId', obtenerHistorial);

module.exports = router;
