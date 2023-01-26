import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../components/Courses/coursesSlice';

export const store = configureStore({
	reducer: {
		courses: coursesReducer,
	},
});
