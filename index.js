const express = require('express');
const app = express();
const puerto = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.static('public'));


// Importar rutas
const rutasUsuarios = require('./routes/usuarios');

// Usar rutas
app.use('/api/usuarios', rutasUsuarios);

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API de usuarios 🎉');
  });
  

// Iniciar servidor
app.listen(puerto, () => {
  console.log(`Servidor corriendo en puerto ${puerto}`);
});
