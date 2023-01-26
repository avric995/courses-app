import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { routes } from '../../constants';

const initialState = {
	authors: [],
};

export const fetchAuthors = createAsyncThunk(
	'authors/fetchAuthors',
	async () => {
		const response = await axios.get(routes.allAuthors);
		return response.data;
	}
);

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			state.authors = action.payload.result;
		});
	},
});

export const selectAllAuthors = (state) => state.authors.authors;

export default authorsSlice.reducer;
