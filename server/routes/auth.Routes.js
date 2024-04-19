import express from 'express';
import { login, register } from '../controllers/auth.Controller.js';
import { limitLogin } from '../middlewares/timeout.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', limitLogin,login,);

export default router;