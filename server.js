// server.js

const app = require('./app'); // Importamos la configuración de la app
//const dotenv = require('dotenv');
//dotenv.config(); // Cargamos las variables de entorno

const PORT = process.env.PORT || 3000; // Si no está definido en .env, usamos el puerto 3000

// Iniciamos el servidor
app.listen(3000, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
