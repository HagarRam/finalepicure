import express, { Request, Response } from 'express';
import {
	getAllDishes,
	postDish,
	deleteDishes,
} from '../../controllers/dishes.controllers';
import isAdmin from '../../middleWare/AdminMiddleWare';

const dishesRouter = express.Router();

dishesRouter.get('/', getAllDishes);
dishesRouter.delete('/', isAdmin('640dae4cd58da0771cc7b736'), deleteDishes);
dishesRouter.post('/', isAdmin('640dae4cd58da0771cc7b736'), postDish);
export default dishesRouter;
