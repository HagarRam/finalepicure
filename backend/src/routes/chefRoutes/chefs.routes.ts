import express, { Request, Response } from 'express';
import { getAllChefs } from '../../controllers/chefs.controllers';

const router = express.Router();

router.get('/', getAllChefs);
export default router;
