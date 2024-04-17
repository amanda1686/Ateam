import { validationResult } from 'express-validator';
import User from '../models/user.Model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const register = async (req, res, next) => {
  // Ejecuta las validaciones definidas en las rutas
  const errors = validationResult(req);
  // Verifica si hay errores
  if (!errors.isEmpty()) {
    // Si hay errores, retorna una respuesta con el código 422 y los errores
    return res.status(422).json({ errors: errors.array() });
  }

  // Si no hay errores de validación, procede con el registro del usuario
  const { username, lastname, email, password } = req.body;

  // Validaciones adicionales (por ejemplo, comprobación de campos vacíos)
  if (!username || !lastname || !email || !password || username === '' || lastname === '' || email === '' || password === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  // Hash de la contraseña
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // Creación de un nuevo usuario
  const newUser = new User({
    username,
    lastname,
    email,
    password: hashedPassword,
  });

  try {
    // Guardar el nuevo usuario en la base de datos
    await newUser.save();
    res.json('Register successful');
  } catch (error) {
    // Manejo de errores
    next(error);
  }
};

