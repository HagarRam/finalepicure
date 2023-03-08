import { getDishes } from '../service/dishes.service';
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
		const dishes = await getDishes();
		return res.status(200).json(dishes);
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};
