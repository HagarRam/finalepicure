import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const data3 = () => {
	fetch('http://localhost:8000/chef/', {
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

export const chefSlice = createSlice({
	name: 'chef',
	initialState: {
		value: data3(),
		filteredValue: data.chefs,
	},
	reducers: {
		setAllchefs: (state) => {
			state.filteredValue = data.chefs;
		},
		setNewChef: (state) => {
			state.filteredValue = data.chefs.filter((chef) => chef.newChef === true);
		},
		setMostView: (state) => {
			state.filteredValue = [...data.chefs].sort(
				(a: any, b: any) => b?.views - a?.views
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const { setAllchefs, setNewChef, setMostView } = chefSlice.actions;

export default chefSlice.reducer;
