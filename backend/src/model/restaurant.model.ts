import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

export interface IRestaurants {
	id: number;
	name: string;
	address?: string[];
	chef: string;
	chefid?: number;
	openHours?: string[];
	openDays?: number[];
	openYear?: number;
	img: string;
	dishes?: number[];
	rating: number;
	popular?: boolean;
	newRest?: boolean;
	openNow?: boolean;
	views?: number;
	locationLat?: number;
	locationLng?: number;
	title?: string;
	titleImg?: string;
	titleStar?: string;
}

export const restaurantsSchema = new Schema<IRestaurants>({
	id: { type: Number, required: false },
	name: { type: String, required: true },
	address: { type: [String], required: false },
	chef: { type: String, required: true },
	chefid: { type: Number, required: false },
	openHours: { type: [String], required: false },
	openDays: { type: [Number], required: false },
	openYear: { type: [Number], required: false },
	img: { type: String, required: true },
	dishes: { type: [Number], required: false },
	rating: { type: Number, required: true },
	popular: { type: Boolean, required: false },
	newRest: { type: Boolean, required: false },
	openNow: { type: Boolean, required: false },
	views: { type: Number, required: false },
	locationLat: { type: Number, required: false },
	locationLng: { type: Number, required: false },
	title: { type: String, required: false },
	titleImg: { type: String, required: false },
	titleStar: { type: String, required: false },
});

export const RestaurantsModal = mongoose.model<IRestaurants>(
	'restaurants',
	restaurantsSchema
);
