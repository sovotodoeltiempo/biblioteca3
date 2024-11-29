const prestamoModel = require('../models/prestamoModel');

// Crear un nuevo préstamo
exports.createPrestamo = async (req, res) => {
  const { id_persona, id_libro, desde, hasta } = req.body;

  try {
    // Llamamos al modelo para crear el préstamo
    const result = await prestamoModel.createPrestamo(id_persona, id_libro, desde, hasta);
    res.status(201).json({ message: 'Préstamo creado', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los préstamos
exports.getAllPrestamos = async (req, res) => {
  try {
    // Llamamos al modelo para obtener todos los préstamos
    const result = await prestamoModel.getAllPrestamos();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un préstamo por ID
exports.getPrestamoById = async (req, res) => {
  const { id } = req.params;

  try {
    // Llamamos al modelo para obtener el préstamo por ID
    const result = await prestamoModel.getPrestamoById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Préstamo no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un préstamo
exports.updatePrestamo = async (req, res) => {
  const { id } = req.params;
  const { id_persona, id_libro, desde, hasta } = req.body;

  try {
    // Llamamos al modelo para actualizar el préstamo
    const result = await prestamoModel.updatePrestamo(id, id_persona, id_libro, desde, hasta);
    res.status(200).json({ message: 'Préstamo actualizado', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un préstamo
exports.deletePrestamo = async (req, res) => {
  const { id } = req.params;

  try {
    // Llamamos al modelo para eliminar el préstamo
    const result = await prestamoModel.deletePrestamo(id);
    res.status(200).json({ message: 'Préstamo eliminado', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
