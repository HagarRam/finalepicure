import express, { Request, Response } from 'express';
import {
	getAllChefs,
	deleteChefs,
	newChef,
} from '../../controllers/chefs.controllers';

const router = express.Router();

router.get('/', getAllChefs);
router.post('/', newChef);
router.delete('/', deleteChefs);
export default router;
