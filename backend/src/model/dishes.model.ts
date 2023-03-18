import { Schema, model, ObjectId } from 'mongoose';
import mongoose from 'mongoose';

export interface IDishes {
	_id: ObjectId;
	id: number;
	userId: ObjectId;
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
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		auto: true,
	},
	id: { type: Number, required: false },
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		auto: true,
	},
	name: { type: String, required: true },
	time: { type: [String], required: false },
	about: { type: String, required: true },
	price: { type: Number, required: true },
	allergan: { type: [String], required: false },
	icons: { type: [String], required: true },
	sides: { type: [String], required: false },
	changes: { type: [String], required: false },
	img: { type: String, required: true },
	signatureDish: { type: Boolean, required: false },
	title: { type: String, required: false },
	dishtitle: { type: String, required: false },
});

export const DishesModal = mongoose.model<IDishes>('dishes', dishesSchema);
