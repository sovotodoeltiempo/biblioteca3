const jwt = require('jsonwebtoken');

// Middleware para verificar si el usuario está autenticado
const authMiddleware = (req, res, next) => {
  // Obtener el token desde los headers
  const token = req.headers['authorization']?.split(' ')[1]; // Asumimos que el token se pasa como 'Bearer <token>'

  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado, no se proporcionó un token' });
  }

  // Verificar el token
  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    // Si el token es válido, se agrega la información del usuario al objeto request
    req.user = decoded;
    next(); // Llamamos a next() para continuar con la ejecución de la ruta
  });
};

module.exports = authMiddleware;
