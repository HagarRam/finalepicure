import { getChefs, deleteChef } from '../service/chefs.service';
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
export const deleteChefs = async (req: Request, res: Response) => {
	try {
		const chefs = await deleteChef(req.body.id);
		return res.status(200).json({
			status: 200,
			data: chefs,
			message: 'Successfully removed chef',
		});
	} catch (err: any) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: 'Internal server error',
		});
	}
};
