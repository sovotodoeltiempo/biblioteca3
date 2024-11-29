const db = require('../config/db');

// Crear una nueva persona
exports.createPersona = async (nombre, apellido, dni, telefono) => {
  try {
    const query = 'INSERT INTO personas (nombre, apellido, dni, telefono) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(query, [nombre, apellido, dni, telefono]);  // Ejecutamos la consulta con promesas
    return result;  // Devolvemos el resultado de la inserción
  } catch (err) {
    throw new Error('Error al crear la persona: ' + err.message);
  }
};

// Obtener todas las personas
exports.getAllPersonas = async () => {
  try {
    const query = 'SELECT * FROM personas';
    const [result] = await db.execute(query);  // Consultamos todas las personas
    return result;  // Devolvemos todas las personas
  } catch (err) {
    throw new Error('Error al obtener las personas: ' + err.message);
  }
};

// Obtener una persona por ID
exports.getPersonaById = async (id) => {
  try {
    const query = 'SELECT * FROM personas WHERE id = ?';
    const [result] = await db.execute(query, [id]);  // Consultamos la persona por ID
    return result[0];  // Devolvemos la persona
  } catch (err) {
    throw new Error('Error al obtener la persona: ' + err.message);
  }
};

// Actualizar una persona
exports.updatePersona = async (id, nombre, apellido, dni, telefono) => {
  try {
    const query = 'UPDATE personas SET nombre = ?, apellido = ?, dni = ?, telefono = ? WHERE id = ?';
    const [result] = await db.execute(query, [nombre, apellido, dni, telefono, id]);  // Actualizamos la persona
    return result;  // Devolvemos el resultado de la actualización
  } catch (err) {
    throw new Error('Error al actualizar la persona: ' + err.message);
  }
};

// Eliminar una persona
exports.deletePersona = async (id) => {
  try {
    const query = 'DELETE FROM personas WHERE id = ?';
    const [result] = await db.execute(query, [id]);  // Eliminamos la persona
    return result;  // Devolvemos el resultado de la eliminación
  } catch (err) {
    throw new Error('Error al eliminar la persona: ' + err.message);
  }
};
