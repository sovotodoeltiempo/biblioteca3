const personaModel = require('../models/personaModel');

// Crear una nueva persona
exports.createPersona = async (req, res) => {
  const { nombre, apellido, dni, telefono } = req.body;

  try {
    // Llamamos al modelo para crear la persona
    const result = await personaModel.createPersona(nombre, apellido, dni, telefono);
    res.status(201).json({ message: 'Persona creada', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todas las personas
exports.getAllPersonas = async (req, res) => {
  try {
    // Llamamos al modelo para obtener todas las personas
    const result = await personaModel.getAllPersonas();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una persona por ID
exports.getPersonaById = async (req, res) => {
  const { id } = req.params;

  try {
    // Llamamos al modelo para obtener la persona por ID
    const result = await personaModel.getPersonaById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar una persona
exports.updatePersona = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, dni, telefono } = req.body;

  try {
    // Llamamos al modelo para actualizar la persona
    const result = await personaModel.updatePersona(id, nombre, apellido, dni, telefono);
    res.status(200).json({ message: 'Persona actualizada', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una persona
exports.deletePersona = async (req, res) => {
  const { id } = req.params;

  try {
    // Llamamos al modelo para eliminar la persona
    const result = await personaModel.deletePersona(id);
    res.status(200).json({ message: 'Persona eliminada', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
