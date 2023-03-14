import express from 'express';
import {
	getAllRestaurants,
	deleteRest,
} from '../../controllers/restaurants.controllers';

const RestaurantsRouter = express.Router();
RestaurantsRouter.get('/', getAllRestaurants);
RestaurantsRouter.delete('/', deleteRest);

export default RestaurantsRouter;
