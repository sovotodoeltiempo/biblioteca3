// routes/prestamoRoutes.js

const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamoController');

// Ruta para obtener todos los préstamos
router.get('/', prestamoController.getAllPrestamos);

// Ruta para obtener un préstamo por su id
router.get('/:id', prestamoController.getPrestamoById);

// Ruta para crear un nuevo préstamo
router.post('/', prestamoController.createPrestamo);

// Ruta para actualizar un préstamo existente
router.put('/:id', prestamoController.updatePrestamo);

// Ruta para eliminar un préstamo
router.delete('/:id', prestamoController.deletePrestamo);

module.exports = router;
