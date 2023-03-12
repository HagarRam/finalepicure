import { Schema, model, ObjectId } from 'mongoose';
import mongoose from 'mongoose';

export interface IActive {
	email: string;
	password: string;
	token?: string;
	connect?: boolean;
}

export const activeSchema = new Schema<IActive>({
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, required: false },
	connect: { type: Boolean, required: false },
});

export const ActiveModal = mongoose.model<IActive>('activeusers', activeSchema);
