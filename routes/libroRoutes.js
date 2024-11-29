// routes/libroRoutes.js

const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// Ruta para obtener todos los libros
router.get('/', libroController.getAllLibros);

// Ruta para obtener un libro por su id
router.get('/:id', libroController.getLibroById);

// Ruta para crear un nuevo libro
router.post('/', libroController.createLibro);

// Ruta para actualizar un libro existente
router.put('/:id', libroController.updateLibro);

// Ruta para eliminar un libro
router.delete('/:id', libroController.deleteLibro);

module.exports = router;
