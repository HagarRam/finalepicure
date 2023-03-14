import express, { Request, Response } from 'express';
import { getAllChefs, deleteChefs } from '../../controllers/chefs.controllers';

const router = express.Router();

router.get('/', getAllChefs);
router.delete('/', deleteChefs);
export default router;
