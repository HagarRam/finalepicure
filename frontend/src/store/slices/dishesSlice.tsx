import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const data2 = () => {
	fetch('http://localhost:8000/dishes/', {
		method: 'GET',
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export const dishesSlice = createSlice({
	name: 'dishes',
	initialState: {
		value: data2(),
	},
	reducers: {},
});

export default dishesSlice.reducer;
