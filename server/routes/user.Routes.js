import express from 'express';
import { deleteUser, logout, test, updateUser } from '../controllers/user.Controller.js';
import { verifyToken } from '../utils/veryfyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser );
router.post('/logout', logout)

export default router;