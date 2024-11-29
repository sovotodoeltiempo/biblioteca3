const mysql = require('mysql2');

// Crear una conexión a la base de datos usando Promesas
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'cacarulo01', 
  database: 'biblioteca',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
console.log(`base de datos conectada`);
// Usamos `.promise()` para obtener una versión con Promesas
module.exports = db.promise();