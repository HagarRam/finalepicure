import { Schema, model, ObjectId } from 'mongoose';
import mongoose from 'mongoose';

export interface IRestaurants {
	_id: ObjectId;
	id?: number;
	userId: ObjectId;
	name: string;
	address?: string[];
	chef: string;
	chefid?: number;
	openHours?: string[];
	openDays?: number[];
	openYear?: number;
	img: string;
	dishes?: ObjectId[];
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
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		auto: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		auto: true,
	},
	id: { type: Number, required: false },
	name: { type: String, required: true },
	address: { type: [String], required: false },
	chef: { type: String, required: true },
	chefid: { type: Number, required: false },
	openHours: { type: [String], required: false },
	openDays: { type: [Number], required: false },
	openYear: { type: [Number], required: false },
	img: { type: String, required: true },
	dishes: { type: [Schema.Types.ObjectId], required: false },
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
