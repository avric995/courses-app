import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../api/axios';
import { routes } from '../../constants';

const initialState = {
	authors: [],
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
		console.log(initialAuthor);
		const { data } = await API.post(routes.addAuthor, initialAuthor);
		return data;
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

			.addCase(fetchAuthors.fulfilled, (state, action) => {
				state.authors = action.payload.result;
			})

			.addCase(addNewAuthor.fulfilled, (state, action) => {
				state.authors.push(action.payload);
			});
	},
});

export const { authorAdded } = authorsSlice.actions;

export const selectAllAuthors = (state) => state.authors.authors;

export default authorsSlice.reducer;
