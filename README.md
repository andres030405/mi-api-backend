# 📦 API REST de Usuarios

Este proyecto es una **API REST** sencilla para gestionar usuarios, desarrollada con **Node.js** y **Express**.

Permite realizar operaciones básicas como:

- Obtener lista de usuarios (GET)
- Agregar nuevo usuario (POST)
- Editar usuario existente (PUT)
- Eliminar usuario (DELETE)

---

## 📁 Estructura del Proyecto

mi-api-backend/
├── routes/
│ └── usuarios.js
├── test/
│ └── test-usuarios.rest
├── index.js
├── package.json
└── README.md



---

## ▶️ Cómo Ejecutar Localmente

1. Clonar el repositorio:


git clone https://github.com/andres030405/mi-api-backend.git
cd mi-api-backend

2. Clonar el repositorio:

npm install

3. Ejecutar el servidor:

node index.js

4. Acceder en el navegador o usar Postman/REST Client:

http://localhost:3000/api/usuarios



🧪 Endpoints disponibles:
Método	Ruta	Descripción
GET	/api/usuarios	Lista todos los usuarios
POST	/api/usuarios	Crea un nuevo usuario
PUT	/api/usuarios/:id	Edita un usuario por ID
DELETE	/api/usuarios/:id	Elimina un usuario por ID

🌐 API Desplegada en Render
🔗 https://mi-api-backend-07cu.onrender.com/api/usuarios

👨‍💻 Autor
Nombre: Andrés Durán

Proyecto de práctica: Frameworks para Backend

Repositorio: https://github.com/andres030405/mi-api-backend