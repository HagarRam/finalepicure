import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';
export const dishesSlice = createSlice({
	name: 'dishes',
	initialState: {
		value: data.dishes,
	},
	reducers: {},
});

export default dishesSlice.reducer;
