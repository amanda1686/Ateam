import express from 'express';
import { verifyToken } from '../utils/veryfyUser.js';
import { create, deletepost, getpost, updatepost } from '../controllers/post.controllers.js';


const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getpost', getpost);
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost);
router.put(`/updatepost/:postId/:userId`, verifyToken, updatepost);

export default router;