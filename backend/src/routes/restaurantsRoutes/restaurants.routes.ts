import express, { Request, Response } from 'express';
import { getAllRestaurants } from '../../controllers/restaurants.controllers';
// let bcrypt = require('bcrypt');

const RestaurantsRouter = express.Router();
RestaurantsRouter.get('/', getAllRestaurants);

export default RestaurantsRouter;
