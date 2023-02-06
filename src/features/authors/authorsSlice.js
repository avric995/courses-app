import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../api/axios';
import { routes } from '../../constants';

const initialState = {
	authors: [],
	status: 'idle',
	error: null,
};

export const fetchAuthors = createAsyncThunk(
	'authors/fetchAuthors',
	async () => {
		const { data } = await API.get(routes.allAuthors);
		return data;
	}
);

export const addNewAuthor = createAsyncThunk(
	'courses/addNewAuthor',
	async (initialAuthor) => {
		const { data } = await API.post(routes.addAuthor, initialAuthor);
		return data.result;
	}
);

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		authorAdded(state, action) {
			state.authors.push(action.payload);
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchAuthors.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchAuthors.fulfilled, (state, action) => {
				state.status = 'success';
				state.authors = action.payload.result;
			})
			.addCase(fetchAuthors.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(addNewAuthor.fulfilled, (state, action) => {
				// state.status = 'created';
				state.authors.push(action.payload);
			});
	},
});

export const { authorAdded } = authorsSlice.actions;

export const selectAllAuthors = (state) => state.authors.authors;
export const getAuhorStatus = (state) => state.authors.status;

export default authorsSlice.reducer;
