import { dishOrder, getDishes, deleteDish } from '../service/dishes.service';
import express, { Request, Response } from 'express';
import { DishesModal } from '../model/dishes.model';
import { RestaurantsModal } from '../model/restaurant.model';

export const getAllDishes = async (req: Request, res: Response) => {
	try {
		const dishes = await getDishes();
		return res.status(200).json(dishes);
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const postDish = async (req: Request, res: Response) => {
	try {
		const { restId, img, about, name, price, icons } = req.body;
		if (!(restId && about && name && price && icons && img)) {
			return res.status(400).send('All input is required');
		}
		const dish = await DishesModal.create({
			about,
			name,
			price,
			icons,
			img,
		});
		const newdish = await dishOrder(req.body);
		const restaurant = await RestaurantsModal.findById(restId);
		if (!restaurant) {
			return res.status(404).send('Restaurant not found');
		}
		restaurant.dishes?.push(dish._id);
		await restaurant.save();

		res.status(201).json(newdish);
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const deleteDishes = async (req: Request, res: Response) => {
	try {
		const restaurant = await RestaurantsModal.findById(req.body.dishID);
		if (!restaurant) {
			return res.status(404).send('Restaurant not found');
		}

		const dishIndex: number =
			restaurant.dishes?.findIndex(
				(dish: any) => dish._id.toString() === req.body.id
			) ?? -1;
		if (dishIndex === -1) {
			return res.status(404).send('Dish not found');
		}

		const removedDish = restaurant.dishes?.splice(dishIndex, 1)[0];
		await restaurant.save();

		const dishes = await deleteDish(req.body.id);
		return res.status(200).json({
			status: 200,
			data: dishes,
			message: 'Successfully removed dish',
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: 'Internal server error',
		});
	}
};
