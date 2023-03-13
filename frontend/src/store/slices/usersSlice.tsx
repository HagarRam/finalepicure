import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
	name: any;
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
console.log(users);
export const userSlice = createSlice({
	name: 'users',
	initialState: {
		value: users,
		filteredValue: {},
	},
	reducers: {
		setAllUsers: (state) => {
			state.value = state.value;
		},
		getName: (state, action) => {
			const currentUser = action.payload;
			const userLogIn = users.find((user: IUser) => {
				return user.email === currentUser.email;
			});
			state.value = userLogIn ? [userLogIn] : [];
			console.log(userLogIn);
		},
		setActiveUsers: (state, action) => {
			const currentUser = action.payload;
			const userLogIn = users.find((user: IUser) => {
				return user.email === currentUser.email;
			});
			state.filteredValue = userLogIn || {};
			console.log(userLogIn);
		},
	},
});

export const { setAllUsers, getName, setActiveUsers } = userSlice.actions;

export default userSlice.reducer;
