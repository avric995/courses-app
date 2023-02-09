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

export const logoutUser = createAsyncThunk(
	'courses/logoutUser',
	async (token) => {
		try {
			const response = await API.delete(routes.logout, {
				headers: { Authorization: token },
			});
			if (response.status === 200) return token;
		} catch (err) {
			return err.message;
		}
	}
);

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
	},
	extraReducers(builder) {
		builder.addCase(logoutUser.fulfilled, (state) => {
			state.user = {
				isAuth: false,
				name: '',
				email: '',
				token: '',
				role: '',
			};
		});
	},
});

export const user = (state) => state.user.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
