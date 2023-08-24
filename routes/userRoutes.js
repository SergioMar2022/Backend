const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para obtener usuarios principales
router.get('/api/u', userController.getMainUsers);

module.exports = router;
