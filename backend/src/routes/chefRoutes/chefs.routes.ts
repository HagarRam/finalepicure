import express, { Request, Response } from 'express';
import { getAllChefs } from '../../controllers/chefs.controllers';
// let bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', getAllChefs);
export default router;
