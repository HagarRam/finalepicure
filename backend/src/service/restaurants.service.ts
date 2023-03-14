import { IRestaurants, RestaurantsModal } from '../model/restaurant.model';

export const getRestaurants = async () => {
	try {
		const Restaurants = await RestaurantsModal.find();
		console.log(Restaurants);
		return Restaurants;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const removeRest = async (restId: string) => {
	try {
		await RestaurantsModal.findByIdAndDelete(restId);
		return await RestaurantsModal.find();
	} catch (err) {
		console.log(err);
		throw err;
	}
};
