const libroModel = require('../models/libroModel');

// Crear un nuevo libro
exports.createLibro = async (req, res) => {
  const { nombre, autor, isbn } = req.body;

  try {
    // Llamamos al modelo para crear el libro
    const result = await libroModel.createLibro(nombre, autor, isbn);
    res.status(201).json({ message: 'Libro creado', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los libros
exports.getAllLibros = async (req, res) => {
  try {
    // Llamamos al modelo para obtener todos los libros
    const result = await libroModel.getAllLibros();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un libro por ID
exports.getLibroById = async (req, res) => {
  const { id } = req.params;

  try {
    // Llamamos al modelo para obtener un libro por ID
    const result = await libroModel.getLibroById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un libro
exports.updateLibro = async (req, res) => {
  const { id } = req.params;
  const { nombre, autor, isbn } = req.body;

  try {
    // Llamamos al modelo para actualizar el libro
    const result = await libroModel.updateLibro(id, nombre, autor, isbn);
    res.status(200).json({ message: 'Libro actualizado', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un libro
exports.deleteLibro = async (req, res) => {
  const { id } = req.params;

  try {
    // Llamamos al modelo para eliminar el libro
    const result = await libroModel.deleteLibro(id);
    res.status(200).json({ message: 'Libro eliminado', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
