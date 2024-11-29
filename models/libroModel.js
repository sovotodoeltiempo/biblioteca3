const db = require('../config/db');

// Crear un nuevo libro
exports.createLibro = async (nombre, autor, isbn) => {
  try {
    const query = 'INSERT INTO libros (nombre, autor, isbn) VALUES (?, ?, ?)';
    const [result] = await db.execute(query, [nombre, autor, isbn]);  // Ejecutamos la consulta con promesas
    return result;  // Devolvemos el resultado de la inserción
  } catch (err) {
    throw new Error('Error al crear el libro: ' + err.message);
  }
};

// Obtener todos los libros
exports.getAllLibros = async () => {
  try {
    const query = 'SELECT * FROM libros';
    const [result] = await db.execute(query);  // Consultamos todos los libros
    return result;  // Devolvemos todos los libros
  } catch (err) {
    throw new Error('Error al obtener los libros: ' + err.message);
  }
};

// Obtener un libro por ID
exports.getLibroById = async (id) => {
  try {
    const query = 'SELECT * FROM libros WHERE id = ?';
    const [result] = await db.execute(query, [id]);  // Consultamos un libro por ID
    return result[0];  // Devolvemos el libro
  } catch (err) {
    throw new Error('Error al obtener el libro: ' + err.message);
  }
};

// Actualizar un libro
exports.updateLibro = async (id, nombre, autor, isbn) => {
  try {
    const query = 'UPDATE libros SET nombre = ?, autor = ?, isbn = ? WHERE id = ?';
    const [result] = await db.execute(query, [nombre, autor, isbn, id]);  // Actualizamos el libro
    return result;  // Devolvemos el resultado de la actualización
  } catch (err) {
    throw new Error('Error al actualizar el libro: ' + err.message);
  }
};

// Eliminar un libro
exports.deleteLibro = async (id) => {
  try {
    const query = 'DELETE FROM libros WHERE id = ?';
    const [result] = await db.execute(query, [id]);  // Eliminamos el libro
    return result;  // Devolvemos el resultado de la eliminación
  } catch (err) {
    throw new Error('Error al eliminar el libro: ' + err.message);
  }
};