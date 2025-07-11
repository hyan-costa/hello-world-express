import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/user', userController.getUser);

export default router;
