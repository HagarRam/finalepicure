import { getChefs, deleteChef, createChef } from '../service/chefs.service';
import express, { Request, Response } from 'express';
import { chefsModal } from '../model/chefs.model';

export const getAllChefs = async (req: Request, res: Response) => {
	try {
		const chefs = await getChefs();
		return res.status(200).json(chefs);
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};
export const deleteChefs = async (req: Request, res: Response) => {
	try {
		const chefs = await deleteChef(req.body.id);
		return res.status(200).json({
			status: 200,
			data: chefs,
			message: 'Successfully removed chef',
		});
	} catch (err: any) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: 'Internal server error',
		});
	}
};

export const newChef = async (req: Request, res: Response) => {
	try {
		const { name, description, img } = req.body;
		if (!(name && description && img)) {
			return res.status(400).send('All input is required');
		}
		const oldchef = await chefsModal.findOne({ name });
		if (oldchef) {
			return res.status(409).send('User Already Exist. Please write again');
		}
		const chef = await chefsModal.create({
			name,
			description,
			img,
		});
		const newchef = await createChef(req.body);
		res.status(201).json(newchef);
	} catch (err: any) {
		console.log(err);
		throw err;
	}
};
