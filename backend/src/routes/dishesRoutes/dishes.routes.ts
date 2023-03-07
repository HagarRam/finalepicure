import express, { Request, Response } from 'express';
import { getAllDishes } from '../../controllers/dishes.controllers';
// let bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', getAllDishes);
