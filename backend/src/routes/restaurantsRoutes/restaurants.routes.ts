import express from 'express';
import {
	getAllRestaurants,
	deleteRest,
	newRest,
} from '../../controllers/restaurants.controllers';
import isAdmin from '../../middleWare/AdminMiddleWare';

const RestaurantsRouter = express.Router();
RestaurantsRouter.get('/', getAllRestaurants);
RestaurantsRouter.delete('/', isAdmin('640dae4cd58da0771cc7b736'), deleteRest);
RestaurantsRouter.post('/', isAdmin('640dae4cd58da0771cc7b736'), newRest);

export default RestaurantsRouter;
