import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const token = process.env.TOKENSECRET;
const uri = token;
// const uri =
// 	'mongodb+srv://hagaram11:20122000@cluster0.v6aycac.mongodb.net/Epicure';
export const connectToDB = async () => {
	try {
		await connect(`${uri}`);
		console.log('db connected');
	} catch (err) {
		console.log('error connecting to db', err);
	}
};
