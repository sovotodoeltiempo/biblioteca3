const db = require('../config/db');
const bcrypt = require('bcryptjs');  // Asegúrate de tener bcryptjs o bcrypt moderno
const jwt = require('jsonwebtoken');

// Crear un nuevo bibliotecario
exports.createBibliotecario = async (mail, pass) => {
  try {
    // Hasheamos la contraseña usando bcryptjs que ya retorna una promesa
    const hashedPass = await bcrypt.hash(pass, 10);

    const query = 'INSERT INTO bibliotecarios (mail, pass) VALUES (?, ?)';
    const [result] = await db.execute(query, [mail, hashedPass]);  // Ejecutamos la consulta con promesas
    return result;  // Devolvemos el resultado de la inserción
  } catch (err) {
    throw new Error('Error al crear el bibliotecario: ' + err.message);
  }
};

// Login de bibliotecario
exports.login = async (mail, pass) => {
  try {
    const query = 'SELECT * FROM bibliotecarios WHERE mail = ?';
    const [result] = await db.execute(query, [mail]);

    if (result.length === 0) {
      throw new Error('Usuario no encontrado');
    }

    // Comprobamos la contraseña usando bcrypt.compare (promisificado)
    const match = await bcrypt.compare(pass, result[0].pass);

    if (match) {
      // Generamos el token JWT
      const token = jwt.sign(
        { id: result[0].id, mail: result[0].mail },
        'secret_key', { expiresIn: '1h' }
      );
      return token;  // Devolvemos el token
    } else {
      throw new Error('Contraseña incorrecta');
    }
  } catch (err) {
    throw new Error('Error al iniciar sesión: ' + err.message);
  }
};
