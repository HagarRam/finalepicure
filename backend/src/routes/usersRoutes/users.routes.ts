import express, { Request, Response } from 'express';
import {
	getAllUsers,
	newUser,
	getoldUser,
} from '../../controllers/users.controllers';
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/login', getoldUser);
userRouter.post('/create', newUser);
export default userRouter;
