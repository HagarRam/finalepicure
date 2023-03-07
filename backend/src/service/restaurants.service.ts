import { IRestaurants, restaurantsModal } from '../model/restaurant.model';

export const getRestaurants = async () => {
	try {
		const Restaurants = await restaurantsModal.find();
		return Restaurants;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
