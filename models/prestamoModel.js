const db = require('../config/db');

// Crear un nuevo préstamo
exports.createPrestamo = async (id_persona, id_libro, desde, hasta) => {
  try {
    const query = 'INSERT INTO prestamos (id_persona, id_libro, desde, hasta) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(query, [id_persona, id_libro, desde, hasta]);  // Ejecutamos la consulta con promesas
    return result;  // Devolvemos el resultado de la inserción
  } catch (err) {
    throw new Error('Error al crear el préstamo: ' + err.message);
  }
};

// Obtener todos los préstamos
exports.getAllPrestamos = async () => {
  try {
    const query = 'SELECT * FROM prestamos';
    const [result] = await db.execute(query);  // Consultamos todos los préstamos
    return result;  // Devolvemos todos los préstamos
  } catch (err) {
    throw new Error('Error al obtener los préstamos: ' + err.message);
  }
};

// Obtener los préstamos por ID de persona
exports.getPrestamosByPersona = async (id_persona) => {
  try {
    const query = 'SELECT * FROM prestamos WHERE id_persona = ?';
    const [result] = await db.execute(query, [id_persona]);  // Consultamos los préstamos de una persona
    return result;  // Devolvemos los préstamos de esa persona
  } catch (err) {
    throw new Error('Error al obtener los préstamos de la persona: ' + err.message);
  }
};

// Obtener los préstamos por ID de libro
exports.getPrestamosByLibro = async (id_libro) => {
  try {
    const query = 'SELECT * FROM prestamos WHERE id_libro = ?';
    const [result] = await db.execute(query, [id_libro]);  // Consultamos los préstamos de un libro
    return result;  // Devolvemos los préstamos de ese libro
  } catch (err) {
    throw new Error('Error al obtener los préstamos del libro: ' + err.message);
  }
};

// Eliminar un préstamo
exports.deletePrestamo = async (id) => {
  try {
    const query = 'DELETE FROM prestamos WHERE id = ?';
    const [result] = await db.execute(query, [id]);  // Eliminamos un préstamo
    return result;  // Devolvemos el resultado de la eliminación
  } catch (err) {
    throw new Error('Error al eliminar el préstamo: ' + err.message);
  }
};
