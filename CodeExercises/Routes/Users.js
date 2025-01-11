import express from 'express';
import { User } from './db.js';  // Importamos el modelo User
const router = express.Router();

// Obtener lista de usuarios (GET)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const users = await User.findAll();  // Usamos el modelo User para obtener todos los usuarios

    // Paginación (puedes ajustar la lógica según sea necesario)
    const paginatedUsers = users.slice((page - 1) * limit, page * limit);
    res.json(paginatedUsers);
  } catch (error) {
    res.status(500).send('Error al obtener los usuarios');
  }
});

// Obtener un usuario específico (GET)
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);  // Usamos el modelo User para obtener un usuario por ID

    if (!user) return res.status(404).send('Usuario no encontrado');
    res.json(user);
  } catch (error) {
    res.status(500).send('Error al obtener el usuario');
  }
});

// Crear un nuevo usuario (POST)
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });  // Usamos el modelo User para crear un nuevo usuario
    res.status(201).json(newUser);  // Respondemos con el usuario creado
  } catch (error) {
    res.status(500).send('Error al crear el usuario');
  }
});

// Actualizar un usuario existente (PUT)
router.put('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email } = req.body;
    const user = await User.findByPk(userId);  // Encontramos al usuario por su ID

    if (!user) return res.status(404).send('Usuario no encontrado');

    // Actualizamos los datos del usuario
    user.name = name;
    user.email = email;
    await user.save();  // Guardamos los cambios

    res.json(user);
  } catch (error) {
    res.status(500).send('Error al actualizar el usuario');
  }
});

// Eliminar un usuario (DELETE)
router.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);  // Encontramos al usuario por su ID

    if (!user) return res.status(404).send('Usuario no encontrado');

    await user.destroy();  // Eliminamos el usuario
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).send('Error al eliminar el usuario');
  }
});

export default router;
