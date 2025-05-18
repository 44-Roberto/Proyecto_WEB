// routes/rekognition.js
const express = require('express');
const router = express.Router();
const { getAnalysis } = require('../controllers/rekogntionController');

router.post('/api/analyze', getAnalysis);

module.exports = router;
