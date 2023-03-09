import { getUsers, createUser } from '../service/users.service';
import express, { Request, Response } from 'express';
import { UsersModal } from '../model/users.model';
let bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const tokenKey = process.env.TOKEN_KEY || 'default_value';

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await getUsers();
		return res.status(200).json(users);
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};

export const newUser = async (req: Request, res: Response) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		if (!(firstName && lastName && email && password)) {
			res.status(400).send('All input is required');
		}
		const oldUser = await UsersModal.findOne({ email });
		if (oldUser) {
			return res.status(409).send('User Already Exist. Please Login');
		}
		const encryptedPassword = await bcrypt.hash(password, 10);
		const user = await UsersModal.create({
			firstName,
			lastName,
			email: email.toLowerCase(), // sanitize: convert email to lowercase
			password: encryptedPassword,
		});
		const token = jwt.sign({ user_id: user._id, email }, tokenKey, {
			expiresIn: '2h',
		});
		user.token = token;
		const newuser = await createUser(user);
		res.status(201).json(newuser);
	} catch (err) {
		console.log(err);
	}
};
