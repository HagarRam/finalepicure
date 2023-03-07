import express, { Request, Response } from 'express';
import { getAllDishes } from '../../controllers/dishes.controllers';
// let bcrypt = require('bcrypt');

const chefRouter = express.Router();

chefRouter.get('/', getAllDishes);
export default chefRouter;
