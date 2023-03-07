import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

export interface IDishes {
	id: number;
	name: string;
	time?: string[];
	about: string;
	price: number;
	allergan?: string[];
	icons: string[];
	sides?: string[];
	changes?: string[];
	img: string;
	signatureDish?: boolean;
	title?: string;
	dishtitle: string;
}

export const dishesSchema = new Schema<IDishes>({
	id: { type: Number, required: false },
	name: { type: String, required: true },
	time: { type: [String], required: false },
	about: { type: String, required: true },
	price: { type: Number, required: true },
	allergan: { type: [String], required: false },
	icons: { type: [String], required: false },
	sides: { type: [String], required: false },
	changes: { type: [String], required: false },
	img: { type: String, required: true },
	signatureDish: { type: Boolean, required: false },
	title: { type: String, required: false },
	dishtitle: { type: String, required: true },
});

export const DishesModal = mongoose.model<IDishes>('dishes', dishesSchema);
