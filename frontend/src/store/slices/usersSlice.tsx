import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

const datausers = async () => {
	try {
		const response = await fetch('http://localhost:8000/users/', {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	} catch (err) {
		console.log();
	}
};
const users: IUser[] = await datausers();

interface UsersState {
	value: IUser[];
	filteredValue: IUser[];
}

const initialState: UsersState = {
	value: users,
	filteredValue: users,
};

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setAllUsers: (state) => {
			state.filteredValue = state.value;
		},
		getName: (state, action) => {
			const currentUser = action.payload;
			const userLogIn = users.find((user) => {
				return user.email === currentUser.email;
			});
			state.filteredValue = userLogIn ? [userLogIn] : [];
			console.log(userLogIn);
		},
	},
});

export const { setAllUsers, getName } = userSlice.actions;

export default userSlice.reducer;
