import express, { Request, Response } from 'express';
import {
	getAllChefs,
	deleteChefs,
	newChef,
} from '../../controllers/chefs.controllers';
import isAdmin from '../../middleWare/AdminMiddleWare';

const router = express.Router();

router.get('/', getAllChefs);
router.post('/', isAdmin('640dae4cd58da0771cc7b736'), newChef);
router.delete('/', isAdmin('640dae4cd58da0771cc7b736'), deleteChefs);
export default router;
