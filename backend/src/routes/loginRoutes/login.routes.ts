import express, { Request, Response } from 'express';
import { getData, activeUsers } from '../../controllers/login.controllers';
const activeRouter = express.Router();

activeRouter.get('/', getData);
activeRouter.post('/new', activeUsers);
export default activeRouter;
