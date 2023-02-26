import { configureStore } from '@reduxjs/toolkit';
import chefReducer from './slices/chefSlice';
import restaurantsReducer from './slices/restaurantsSlice';
import dishesReducer from './slices/dishesSlice';
import { IChefState } from '../components/ChefPage/ChefPage';
import { IDishes } from '../components/SignatureDish/DishCard';
import { IrestaurantsState } from '../components/RestaurantPage/RestaurantPage';

export interface Rootstate {
	chef: IChefState;
	restaurants: IrestaurantsState;
	dishes: IDishesState;
}

export interface IDishesState {
	value: IDishes[];
}

export default configureStore({
	reducer: {
		chef: chefReducer,
		restaurants: restaurantsReducer,
		dishes: dishesReducer,
	},
});
