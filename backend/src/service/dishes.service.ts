import { IDishes, DishesModal } from '../model/dishes.model';

export const getDishes = async () => {
	try {
		const Dishes = await DishesModal.find();
		return Dishes;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const dishOrder = async (dish: IDishes) => {
	const dishOrder = new DishesModal(dish);
	try {
		await dishOrder.save();
		return dishOrder;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export const deleteDish = async (dishId: string) => {
	try {
		await DishesModal.findByIdAndDelete(dishId);
		return await DishesModal.find();
	} catch (err) {
		console.log(err);
		throw err;
	}
};
