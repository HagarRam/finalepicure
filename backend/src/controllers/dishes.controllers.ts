import { dishOrder, getDishes } from '../service/dishes.service';
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
