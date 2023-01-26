import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../components/Courses/coursesSlice';
import authorsReducer from '../features/authors/authorsSlice';

export const store = configureStore({
	reducer: {
		courses: coursesReducer,
		authors: authorsReducer,
	},
});
