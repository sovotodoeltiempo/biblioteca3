const express = require('express');
const bodyParser = require('body-parser');
const bibliotecarioRoutes = require('./routes/bibliotecarioRoutes');
const prestamoRoutes = require('./routes/prestamoRoutes');
const personaRoutes = require('./routes/personaRoutes');
const libroRoutes = require('./routes/libroRoutes');  // Ruta para libros

const app = express();

// Middleware para parsear el body de las solicitudes como JSON
app.use(bodyParser.json());

// Rutas para cada entidad
app.use('/api/bibliotecarios', bibliotecarioRoutes); // Ruta para bibliotecarios
app.use('/api/prestamos', prestamoRoutes);           // Ruta para préstamos
app.use('/api/personas', personaRoutes);             // Ruta para personas
app.use('/api/libros', libroRoutes);                 // Ruta para libros

module.exports = app; // Exportamos la instancia de la app