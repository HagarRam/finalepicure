import {
	getRestaurants,
	newRestaurant,
	removeRest,
} from '../service/restaurants.service';
import express, { Request, Response } from 'express';
import { RestaurantsModal } from '../model/restaurant.model';
import { chefsModal } from '../model/chefs.model';

export const getAllRestaurants = async (req: Request, res: Response) => {
	try {
		const restaurants = await getRestaurants();
		return res.status(200).json(restaurants);
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export const deleteRest = async (req: Request, res: Response) => {
	try {
		const restaurants = await removeRest(req.body.id);
		// const chefs = await chefsModal.findByIdAndDelete(req.body.id);
		// if (!chefs) {
		// 	return res.status(404).send('chef not found');
		// }
		// await chefs.save();
		return res.status(200).json({
			status: 200,
			data: restaurants,
			message: 'Successfully removed chef',
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: 'Internal server error',
		});
	}
};

export const newRest = async (req: Request, res: Response) => {
	try {
		const { name, address, chefId, chef, img, openDays, openHours, rating } =
			req.body;
		if (
			!(
				name &&
				address &&
				chef &&
				chefId &&
				openDays &&
				openHours &&
				img &&
				rating
			)
		) {
			return res.status(400).send('All input is required');
		}
		const oldrest = await RestaurantsModal.findOne({ name });
		if (oldrest) {
			return res.status(409).send('User Already Exist. Please write again');
		}
		const rest = await RestaurantsModal.create({
			name,
			address,
			chef,
			chefId,
			img,
			openDays,
			openHours,
			rating,
		});
		const newrest = await newRestaurant(req.body);
		const restChef = await chefsModal.findById(chefId);
		if (!restChef) {
			return res.status(404).send('chef not found');
		}
		restChef.restaurant?.push(rest._id);
		await restChef.save();
		res.status(201).json(newrest);
	} catch (err) {
		console.log(err);
		throw err;
	}
};
