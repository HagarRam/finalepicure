import { Schema, model, ObjectId } from 'mongoose';
import mongoose from 'mongoose';

export interface IActive {
	// _id: ObjectId;
	email: string;
	password: string;
	token?: string;
	connect?: boolean;
}

export const activeSchema = new Schema<IActive>({
	// _id: { type: Schema.Types.ObjectId, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, required: false },
	connect: { type: Boolean, required: false },
});

export const ActiveModal = mongoose.model<IActive>('activeusers', activeSchema);
