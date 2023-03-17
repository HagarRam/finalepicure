import { dishOrder, getDishes, deleteDish } from '../service/dishes.service';
import express, { Request, Response } from 'express';
import { DishesModal } from '../model/dishes.model';

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
		const { about, dishName, dishPrice, icons, img } = req.body;
		if (!(about && dishName && dishPrice && icons && img)) {
			return res.status(400).send('All input is required');
		}
		const dish = await DishesModal.create({
			about,
			dishName,
			dishPrice,
			icons,
			img,
		});
		const newdish = await dishOrder(req.body);
		res.status(201).json(newdish);
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
