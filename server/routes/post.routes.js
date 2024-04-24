import express from 'express';
import { verifyToken } from '../utils/veryfyUser.js';
import { create } from '../controllers/post.controllers.js';


const router = express.Router();

router.post('/create', verifyToken, create)


export default router;