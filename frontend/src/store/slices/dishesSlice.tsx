import { createSlice } from '@reduxjs/toolkit';
import { IDishes } from '../../components/SignatureDish/DishCard';

const data = async () => {
	try {
		const response = await fetch('http://localhost:8000/dishes/', {
			method: 'GET',
		});
		const data = await response.json();
		console.log(data);
		return data;
	} catch (err) {
		console.log();
	}
};
const dishes: IDishes[] = await data();

export const dishesSlice = createSlice({
	name: 'dishes',
	initialState: {
		value: dishes,
		filteredValue: dishes,
	},
	reducers: {},
});

export default dishesSlice.reducer;
