// routes/personaRoutes.js

const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

// Ruta para obtener todos los préstamos
router.get('/', personaController.getAllPersonas);

// Ruta para obtener un préstamo por su id
router.get('/:id', personaController.getPersonaById);

// Ruta para crear una nueva persona
router.post('/', personaController.createPersona);

// Ruta para actualizar una persona existente
router.put('/:id', personaController.updatePersona);

// Ruta para eliminar un préstamo
router.delete('/:id', personaController.deletePersona);

module.exports = router;
