const express = require('express');
const router = express.Router();

// Importa el controlador de bibliotecarios
const bibliotecarioController = require('../controllers/bibliotecarioController');

// Importa el middleware de autenticación
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta protegida para obtener información del bibliotecario
router.get('/bibliotecario', authMiddleware, bibliotecarioController.getBibliotecario);

// Ruta protegida para crear un bibliotecario
router.post('/bibliotecario', bibliotecarioController.createBibliotecario);

// Ruta protegida para login
router.post('/login', bibliotecarioController.login);

module.exports = router;