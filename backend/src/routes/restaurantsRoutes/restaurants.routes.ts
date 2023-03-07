import express, { Request, Response } from 'express';
import { getAllRestaurants } from '../../controllers/restaurants.controllers';
// let bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', getAllRestaurants);
