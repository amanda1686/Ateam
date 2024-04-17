import { validationResult } from 'express-validator';

// Middleware de validación
const validateInputs = (req, res, next) => {
  // Ejecuta las validaciones definidas en las rutas
  const errors = validationResult(req);
  // Verifica si hay errores
  if (!errors.isEmpty()) {
    // Si hay errores, retorna una respuesta con el código 422 y los errores
    return res.status(422).json({ errors: errors.array() });
  }
  // Si no hay errores, continúa con el siguiente middleware
  next();
};

export default validateInputs;
