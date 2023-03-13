import express, { Request, Response } from 'express';
import { getAllDishes, postDish } from '../../controllers/dishes.controllers';
// let bcrypt = require('bcrypt');

const dishesRouter = express.Router();

dishesRouter.get('/', getAllDishes);
dishesRouter.post('/orderdish', postDish);
export default dishesRouter;
