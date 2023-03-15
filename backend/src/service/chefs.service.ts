import { IChef, chefsModal } from '../model/chefs.model';

export const getChefs = async () => {
	try {
		const Chefs = await chefsModal.find();
		return Chefs;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const deleteChef = async (chefId: string) => {
	try {
		await chefsModal.findByIdAndDelete(chefId);
		return await chefsModal.find();
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const createChef = async (chef: IChef) => {
	const newChef = await chefsModal.create(chef);
	try {
		await newChef.save();
		return newChef;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
