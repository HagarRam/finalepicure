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

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export interface IActive {
// 	email: string;
// 	password: string;
// 	token?: string;
// 	connect?: boolean;
// }

// interface IUserState {
// 	users: IActive[];
// 	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
// 	error: string | null;
// }

// const initialState: IUserState = {
// 	users: [],
// 	loading: 'idle',
// 	error: null,
// };

// export const fetchUsers = createAsyncThunk('login/fetchUsers', async () => {
// 	const response = await fetch('http://localhost:8000/login');
// 	if (!response.ok) {
// 		throw new Error('Failed to fetch users');
// 	}
// 	const data = await response.json();
// 	return data;
// });

// export const userSlice = createSlice({
// 	name: 'users',
// 	initialState,
// 	reducers: {
// 		setActiveUsers: (state, action) => {
// 			state.value = action.payload;
// 			// state.filteredValue = action.payload;
// 		},
// 	},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(fetchUsers.pending, (state) => {
// 				state.loading = 'pending';
// 				state.error = null;
// 			})
// 			.addCase(fetchUsers.fulfilled, (state, action) => {
// 				state.loading = 'succeeded';
// 				state.error = null;
// 				state.users = action.payload;
// 			})
// 			.addCase(fetchUsers.rejected, (state, action) => {
// 				state.loading = 'failed';
// 				state.error = action.error.message ?? 'Failed to fetch users';
// 			});
// 	},
// });

// export default userSlice.reducer;
