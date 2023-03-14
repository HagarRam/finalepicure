import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

export interface IChef {
	id: number;
	name: string;
	restaurant?: number[];
	age?: number;
	icons?: string;
	img: string;
	description?: string;
	chefOfTheWeek?: boolean;
	newChef?: boolean;
	views?: number;
}

export const chefsSchema = new Schema<IChef>({
	id: { type: Number, required: false },
	name: { type: String, required: true },
	restaurant: { type: [Number], required: false },
	age: { type: Number, required: false },
	icons: { type: String, required: false },
	img: { type: String, required: true },
	description: { type: String, required: false },
	chefOfTheWeek: { type: Boolean, required: false },
	newChef: { type: Boolean, required: false },
	views: { type: Number, required: false },
});

export const chefsModal = mongoose.model<IChef>('chefs', chefsSchema);
