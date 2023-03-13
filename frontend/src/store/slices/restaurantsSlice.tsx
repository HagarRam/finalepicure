import { createSlice } from '@reduxjs/toolkit';
import {
	IRestaurants,
	IrestaurantsState,
} from '../../components/RestaurantPage/RestaurantPage';
const data = async () => {
	try {
		const response = await fetch('http://localhost:8000/restaurant/', {
			method: 'GET',
		});
		const data = await response.json();
		console.log(data);
		return data;
	} catch (err) {
		console.log();
	}
};
const rest: IRestaurants[] = await data();
export const restaurantsSlice = createSlice({
	name: 'restaurants',
	initialState: {
		value: rest,
		filteredValue: rest,
	},
	reducers: {
		setAllRestuarants: (state) => {
			state.filteredValue = state.value;
		},
		setPopularRestuarants: (state) => {
			state.filteredValue = [...state.value].sort(
				(a: any, b: any) => b.views - a.views
			);
		},
		setNewRestuarants: (state) => {
			state.filteredValue = state.value.filter(
				(restaurant: any) => restaurant.newRest === true
			);
		},
		setOpenNow: (state, action) => {
			state.filteredValue = action.payload;
		},
		setMap: (state) => {
			state.filteredValue = state.value;
		},
	},
});

export const {
	setAllRestuarants,
	setOpenNow,
	setMap,
	setPopularRestuarants,
	setNewRestuarants,
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
