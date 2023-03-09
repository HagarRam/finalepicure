import { createSlice } from '@reduxjs/toolkit';
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
console.log(users);
export const userSlice = createSlice({
	name: 'users',
	initialState: {
		value: users,
		filteredValue: users,
	},
	reducers: {
		setAllUsers: (state) => {
			state.filteredValue = state.value;
		},
	},
});

export const { setAllUsers } = userSlice.actions;

export default userSlice.reducer;
