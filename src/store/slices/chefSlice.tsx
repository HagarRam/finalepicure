import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';
export const chefSlice = createSlice({
	name: 'chef',
	initialState: {
		value: data.chefs,
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
