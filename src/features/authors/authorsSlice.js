import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../api/axios';
import { routes } from '../../constants';

const initialState = {
	authors: [],
};

export const fetchAuthors = createAsyncThunk(
	'authors/fetchAuthors',
	async () => {
		try {
			const { data } = await API.get(routes.allAuthors);
			return data;
		} catch (err) {
			return err.message;
		}
	}
);

export const addNewAuthor = createAsyncThunk(
	'courses/addNewAuthor',
	async (initialAuthor) => {
		try {
			const { data } = await API.post(routes.addAuthor, initialAuthor);
			return data.result;
		} catch (err) {
			return err.message;
		}
	}
);

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchAuthors.fulfilled, (state, action) => {
				state.status = 'success';
				state.authors = action.payload.result;
			})

			.addCase(addNewAuthor.fulfilled, (state, action) => {
				state.authors.push(action.payload);
			});
	},
});

export const selectAllAuthors = (state) => state.authors.authors;

export default authorsSlice.reducer;
