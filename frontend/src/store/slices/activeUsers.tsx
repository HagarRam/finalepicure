import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

export interface IActive {
	email: string;
	password: string;
	token?: string;
	connect?: boolean;
}

const data = async () => {
	try {
		const response = await fetch('http://localhost:8000/login', {
			method: 'GET',
		});
		const data = await response.json();
		console.log(data);
		return data;
	} catch (err) {
		console.log();
	}
};

const active: IActive[] = await data();

export const activeUsers = createSlice({
	name: 'active-users',
	initialState: {
		value: active,
		filteredValue: active,
	},
	reducers: {
		createOrder: (state) => {
			state.filteredValue = state.value;
		},
	},
});

export default activeUsers.reducer;
