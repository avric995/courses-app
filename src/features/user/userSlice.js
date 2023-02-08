import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../api/axios';
import { routes } from '../../constants';

const initialState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	},
};

export const fetchCurrentUser = createAsyncThunk(
	'authors/fetchCurrentUser',
	async () => {
		const { data } = await API.get(routes.currentUser);
		return data.result;
	}
);

// export const logout = createAsyncThunk

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login(state, action) {
			state.user.isAuth = action.payload.isAuth;
			state.user.name = action.payload.name;
			state.user.email = action.payload.email;
			state.user.token = action.payload.token;
			state.user.role = action.payload.role;
		},
		logout(state) {
			state.user = { isAuth: false, name: '', email: '', token: '', role: '' };
		},
	},
	// extraReducers(builder) {
	// 	builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
	// 		state.user.role = action.payload.role;
	// 	});
	// },
});

export const user = (state) => state.user.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
