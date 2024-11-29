const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamoController'); // Importamos el controlador de préstamos

// Crear un nuevo préstamo (sin autenticación necesaria)
router.post('/', prestamoController.createPrestamo);

// Obtener todos los préstamos (sin autenticación necesaria)
router.get('/', prestamoController.getAllPrestamos);

// Obtener un préstamo específico (sin autenticación necesaria)
router.get('/:id', prestamoController.getPrestamoById);

// Actualizar un préstamo (sin autenticación necesaria)
router.put('/:id', prestamoController.updatePrestamo);

// Eliminar un préstamo (sin autenticación necesaria)
router.delete('/:id', prestamoController.deletePrestamo);

module.exports = router;
