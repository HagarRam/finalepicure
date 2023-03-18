import { DishesModal, dishesSchema, IDishes } from '../model/dishes.model';
import { IRestaurants, RestaurantsModal } from '../model/restaurant.model';

export const getRestaurants = async () => {
	try {
		const Restaurants = await RestaurantsModal.find();
		return Restaurants;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const removeRest = async (restId: string) => {
	try {
		const restData = await RestaurantsModal.findById(restId);
		if (restData && restData.dishes) {
			for (const dish of restData.dishes) {
				await DishesModal.findByIdAndDelete(dish);
			}
		} else {
			throw new Error(`Restaurant with ID ${restId} not found`);
		}
		await RestaurantsModal.findByIdAndDelete(restId);
		return await RestaurantsModal.find();
	} catch (err) {
		console.error(err);
		throw err;
	}
};

export const newRestaurant = async (rest: IRestaurants) => {
	const newRest = new RestaurantsModal(rest);
	try {
		await newRest.save();
		return newRest;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
