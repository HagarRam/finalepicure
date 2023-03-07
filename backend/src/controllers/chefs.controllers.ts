import { getChefs } from '../service/chefs.service';
import express, { Request, Response } from 'express';

export const getAllChefs = async (req: Request, res: Response) => {
	try {
		const chefs = await getChefs();
		return res.status(200).json(chefs);
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};
