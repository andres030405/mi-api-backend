const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Endpoint de prueba
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola Andrés, esta es tu API funcionando!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
