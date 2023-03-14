import {
	getRestaurants,
	newRestaurant,
	removeRest,
} from '../service/restaurants.service';
import express, { Request, Response } from 'express';

export const getAllRestaurants = async (req: Request, res: Response) => {
	try {
		const restaurants = await getRestaurants();
		return res.status(200).json(restaurants);
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};

export const deleteRest = async (req: Request, res: Response) => {
	try {
		const restaurants = await removeRest(req.body.id);
		return res.status(200).json({
			status: 200,
			data: restaurants,
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

export const newRest = async (req: Request, res: Response) => {
	try {
		const rest = newRestaurant(req.body);
		return res.status(200).json({
			status: 200,
			data: rest,
			message: 'Successfully Create Studant',
		});
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};
