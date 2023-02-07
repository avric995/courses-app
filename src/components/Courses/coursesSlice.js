import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../api/axios';
import { routes } from '../../constants';

const initialState = {
	courses: [],
	status: 'idle',
	error: null,
};

export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async () => {
		const { data } = await API.get(routes.allCourses);
		return data;
	}
);

export const addNewCourse = createAsyncThunk(
	'courses/addNewCourse',
	async (initialCourse) => {
		// console.log(initialCourse);
		const { data } = await API.post(routes.addCourse, initialCourse);
		return data.result;
	}
);

export const updateCourse = createAsyncThunk(
	'courses/updateCourse',
	async (initialCourse) => {
		const { id } = initialCourse;
		try {
			const { data } = await API.put(
				`${routes.updateCourse}/${id}`,
				initialCourse
			);
			return data.result;
		} catch (err) {
			return err.message;
			// return initialCourse;
		}
	}
);

export const deleteCourse = createAsyncThunk(
	'courses/deleteCourse',
	async (initialCourse) => {
		const { id } = initialCourse;

		try {
			const { data } = await API.delete(`${routes.deleteCourse}/${id}`);
			if (data?.successful === true) return initialCourse;
		} catch (err) {
			return err.message;
		}
	}
);

const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		courseAdded(state, action) {
			state.courses.push(action.payload);
		},
		courseUpdated(state, action) {},
		courseDeleted(state, action) {
			const { id } = action.payload;
			const newCourses = state.courses.filter((course) => course.id !== id);
			state.courses = newCourses;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchCourses.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchCourses.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.courses = action.payload.result;
			})
			.addCase(fetchCourses.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(addNewCourse.fulfilled, (state, action) => {
				state.courses.push(action.payload);
			})
			.addCase(updateCourse.fulfilled, (state, action) => {
				if (!action.payload?.id) {
					console.log('Update could not complete');
					console.log(action.payload);
					return;
				}
				const { id } = action.payload;
				const courses = state.courses.filter((course) => course.id !== id);
				state.courses = [...courses, action.payload];
			})
			.addCase(deleteCourse.fulfilled, (state, action) => {
				if (!action.payload?.id) {
					console.log('Delete could not complete');
					console.log(action.payload);
					return;
				}
				const { id } = action.payload;
				const courses = state.courses.filter((course) => course.id !== id);
				state.courses = courses;
			});
	},
});

export const selectAllCourses = (state) => state.courses.courses;
export const getCoursesStatus = (state) => state.courses.status;
export const getCoursesError = (state) => state.courses.error;

export const { courseAdded, courseDeleted, courseUpdated } =
	coursesSlice.actions;

export const selectCourseById = (state, courseId) =>
	state.courses.courses.find((course) => course.id === courseId);

export default coursesSlice.reducer;
