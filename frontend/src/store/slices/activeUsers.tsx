import { createSlice } from '@reduxjs/toolkit';
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

export interface IActive {
	email: string;
	password: string;
	token?: string;
	connect?: boolean;
}

interface IActiveUsersState {
	value: IActive[];
	filteredValue: IActive[];
}

export const activeUsers = createSlice({
	name: 'users',
	initialState: {
		value: {},
	},
	reducers: {
		setActiveUsers: (state, action) => {
			const currentUser = action.payload;
			const userLogIn = active.find((user) => {
				return user.email === currentUser.email;
			});
			state.value = userLogIn || {};
			console.log(userLogIn);
		},
	},
});

export const { setActiveUsers } = activeUsers.actions;

export default activeUsers.reducer;
