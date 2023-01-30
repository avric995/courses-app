import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: { isAuth: false, name: '', email: '', token: '' },
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login(state, action) {
			state.user.isAuth = action.payload.isAuth;
			state.user.name = action.payload.name;
			state.user.email = action.payload.email;
			state.user.token = action.payload.token;
		},
		logout(state) {
			state.user = { isAuth: false, name: '', email: '', token: '' };
		},
	},
});

export const user = (state) => state.user.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
