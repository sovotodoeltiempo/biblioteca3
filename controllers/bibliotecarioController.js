const bibliotecarioModel = require('../models/bibliotecarioModel');



// Controlador para obtener los datos del bibliotecario autenticado
exports.getBibliotecario = (req, res) => {
  const userId = req.user.id;  // Aquí obtenemos el ID del usuario desde el token JWT
  bibliotecarioModel.getBibliotecarioById(userId)
    .then((result) => {
      res.status(200).json({ bibliotecario: result });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error al obtener los datos del bibliotecario', error: err });
    });
};

// Controlador para crear un nuevo bibliotecario
exports.createBibliotecario = (req, res) => {
  const { mail, pass } = req.body;
  
  bibliotecarioModel.createBibliotecario(mail, pass)
    .then((result) => {
      res.status(201).json({ message: 'Bibliotecario creado', result });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error al crear el bibliotecario', error: err });
    });
};

// Controlador para login
exports.login = (req, res) => {
  const { mail, pass } = req.body;

  bibliotecarioModel.login(mail, pass)
    .then((token) => {
      res.status(200).json({ token });
    })
    .catch((err) => {
      res.status(400).json({ message: 'Error al iniciar sesión', error: err });
    });
};
