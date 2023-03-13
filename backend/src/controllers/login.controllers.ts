import { getActiveUsers, activeUser } from '../service/login.service';
import express, { Request, Response } from 'express';
import { UsersModal } from '../model/users.model';
let bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const tokenKey = process.env.TOKEN_KEY || 'default_value';

export const getData = async (req: Request, res: Response) => {
	try {
		const users = await getActiveUsers();
		return res.status(200).json(users);
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};

export const activeUsers = async (req: Request, res: Response) => {
	try {
		const { email, password, connect } = req.body;
		if (!(email && password && connect)) {
			return res.status(400).send('All input is required');
		}
		const user = await UsersModal.findOne({ email });

		if (user && (await bcrypt.compare(password, user.password))) {
			const token = jwt.sign({ user_id: user._id, email }, tokenKey, {
				expiresIn: '2h',
			});
			user.token = token;
			const newuser = await activeUser(user);
			console.log(newuser);
			return res.status(201).json(newuser);
		}
	} catch (err) {
		console.log(err);
	}
};
