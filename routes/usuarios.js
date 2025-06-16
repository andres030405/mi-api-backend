const express = require('express');
const router = express.Router();

const usuarios = require('../data/usuariosData');


router.get('/', (req, res) => {
  res.json(usuarios);
});


// POST: agregar un nuevo usuario
router.post('/', (req, res) => {
  const nuevoUsuario = req.body;

  if (!nuevoUsuario.nombre || !nuevoUsuario.correo) {
    return res.status(400).json({ error: 'Faltan datos del usuario' });
  }

  usuarios.push({
    id: usuarios.length + 1,
    nombre: nuevoUsuario.nombre,
    correo: nuevoUsuario.correo
  });

  res.status(201).json({ mensaje: 'Usuario agregado correctamente' });
});

// PUT: editar un usuario existente
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const datosActualizados = req.body;

  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  // Actualizamos los datos
  if (datosActualizados.nombre) usuario.nombre = datosActualizados.nombre;
  if (datosActualizados.correo) usuario.correo = datosActualizados.correo;

  res.json({ mensaje: 'Usuario actualizado correctamente' });
});

// DELETE: eliminar un usuario por ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  usuarios.splice(indice, 1); // eliminamos al usuario
  res.json({ mensaje: 'Usuario eliminado correctamente' });
});




module.exports = router;
