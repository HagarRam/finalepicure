import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// connection to local mongoDB
// const uri = process.env.TOKENSECRET;
const uri =
	'mongodb+srv://hagaram11:20122000@cluster0.v6aycac.mongodb.net/Epicure';
// a connection will usually be to a remote cloud one using
// a connection string const uri:
// "mongodb+srv://hagaram11:@cluster0.v6aycac.mongodb.net/test";
// name of db i want to connect to
export const connectToDB = async () => {
	try {
		await connect(uri);
		console.log('db connected');
	} catch (err) {
		console.log('error connecting to db', err);
	}
};
