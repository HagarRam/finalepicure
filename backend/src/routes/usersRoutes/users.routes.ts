import express, { Request, Response } from 'express';
import { getAllUsers, newUser } from '../../controllers/users.controllers';
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/create', newUser);
export default userRouter;
