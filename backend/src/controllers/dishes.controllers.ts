import { dishOrder, getDishes, deleteDish } from '../service/dishes.service';
import express, { Request, Response } from 'express';

export const getAllDishes = async (req: Request, res: Response) => {
	try {
		const dishes = await getDishes();
		return res.status(200).json(dishes);
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};
export const postDish = async (req: Request, res: Response) => {
	try {
		const dishes = dishOrder(req.body);
		return res.status(200).json({
			status: 200,
			data: dishes,
			message: 'Successfully Create Studant',
		});
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};
export const deleteDishes = async (req: Request, res: Response) => {
	try {
		const dishes = await deleteDish(req.body.id);
		return res.status(200).json({
			status: 200,
			data: dishes,
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
