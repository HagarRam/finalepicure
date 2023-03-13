import { getRestaurants } from '../service/restaurants.service';
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
