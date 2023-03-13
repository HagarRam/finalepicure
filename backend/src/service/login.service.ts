import { IActive, ActiveModal } from '../model/login.model';

export const getActiveUsers = async () => {
	try {
		const users = await ActiveModal.find();
		console.log(users);
		return users;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const activeUser = async (user: any) => {
	const newUser = new ActiveModal(user);
	try {
		newUser.isNew = true;
		await newUser.save();
		return newUser;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
