import {
	getRestaurants,
	newRestaurant,
	removeRest,
} from '../service/restaurants.service';
import express, { Request, Response } from 'express';
import { RestaurantsModal } from '../model/restaurant.model';

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
		const {
			restName,
			address,
			chefId,
			chefName,
			img,
			openDays,
			openHours,
			openYears,
			rating,
		} = req.body;
		if (
			!(
				restName &&
				address &&
				chefName &&
				chefId &&
				img &&
				openDays &&
				openHours &&
				openYears &&
				rating
			)
		) {
			return res.status(400).send('All input is required');
		}
		const oldrest = await RestaurantsModal.findOne({ restName });
		if (oldrest) {
			return res.status(409).send('User Already Exist. Please write again');
		}
		const rest = await RestaurantsModal.create({
			restName,
			address,
			chefId,
			chefName,
			img,
			openDays,
			openHours,
			openYears,
			rating,
		});
		const newrest = await newRestaurant(req.body);
		res.status(201).json(newrest);
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};
