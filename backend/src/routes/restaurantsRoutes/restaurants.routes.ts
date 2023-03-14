import express from 'express';
import {
	getAllRestaurants,
	deleteRest,
	newRest,
} from '../../controllers/restaurants.controllers';

const RestaurantsRouter = express.Router();
RestaurantsRouter.get('/', getAllRestaurants);
RestaurantsRouter.delete('/', deleteRest);
RestaurantsRouter.post('/', newRest);

export default RestaurantsRouter;
