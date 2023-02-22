import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';
export const restaurantsSlice = createSlice({
	name: 'restaurants',
	initialState: {
		value: data.restaurant,
		filteredValue: data.restaurant,
	},
	reducers: {
		setAllRestuarants: (state) => {
			state.filteredValue = data.restaurant;
		},
		setPopularRestuarants: (state) => {
			state.filteredValue = [...data.restaurant].sort(
				(a: any, b: any) => b.views - a.views
			);
		},
		setNewRestuarants: (state) => {
			state.filteredValue = data.restaurant.filter(
				(restaurant) => restaurant.newRest === true
			);
		},
		setOpenNow: (state) => {
			state.filteredValue = data.restaurant.filter(
				(restaurant) => restaurant.openNow === true
			);
			// state.filteredValue = data.restaurant;
		},
		setMap: (state) => {
			state.filteredValue = data.restaurant;
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
