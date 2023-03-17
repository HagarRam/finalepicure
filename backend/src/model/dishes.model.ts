import { Schema, model, ObjectId } from 'mongoose';
import mongoose from 'mongoose';

export interface IDishes {
	_id: ObjectId;
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
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		auto: true,
	},
	id: { type: Number, required: false },
	name: { type: String, required: false },
	time: { type: [String], required: false },
	about: { type: String, required: false },
	price: { type: Number, required: false },
	allergan: { type: [String], required: false },
	icons: { type: [String], required: false },
	sides: { type: [String], required: false },
	changes: { type: [String], required: false },
	img: { type: String, required: false },
	signatureDish: { type: Boolean, required: false },
	title: { type: String, required: false },
	dishtitle: { type: String, required: false },
});

export const DishesModal = mongoose.model<IDishes>('dishes', dishesSchema);
