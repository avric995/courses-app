/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Courses from '../Courses';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import App from '../../../App';

let courses = [
	{
		title: 'title',
		description: 'description',
		creationDate: '9/3/2021',
		duration: 30,
		authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
		id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
	},
	{
		title: 'Kurs',
		description: 'Opis kurs',
		duration: 120,
		authors: [
			'1c972c52-3198-4098-b6f7-799b45903199',
			'072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
		],
		creationDate: '03/02/2023',
		id: 'cdc31026-9fd4-4491-91c5-35a6e48da3ea',
	},
];

const mockInitialState = {
	user: {
		user: {
			isAuth: true,
			name: 'Mock',
			email: 'mock@email.com',
			token: 'asd',
			role: 'admin',
		},
	},

	courses: {
		courses,

		status: 'succeeded',
	},
	authors: {
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
};

const mockStore = configureStore();
let store;
store = mockStore(mockInitialState);
store.clearActions();

const MockCourses = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Courses />
			</Provider>
		</BrowserRouter>
	);
};

const MockApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

describe('Courses', () => {
	it('should display amount of CourseCard equal length of courses array', () => {
		render(<MockCourses />);
		const CourseCardComponent = screen.getAllByTestId('CourseCard');
		expect(CourseCardComponent.length).toBe(
			mockInitialState.courses.courses.length
		);
	});

	it('should display empty container if courses array is 0', () => {
		courses = [];
		store = mockStore({
			...mockInitialState,
			courses: { ...mockInitialState.courses, courses: [] },
		});
		store.clearActions();
		render(<MockCourses />);

		const CourseCardContainer = screen.getByTestId('CourseCardContainer');
		expect(CourseCardContainer).toBeEmptyDOMElement();
	});

	it("should should dispay CourseFrom after clik on button 'Add new course' ", () => {
		render(<MockApp />);

		const addCourseButton = screen.getByText('Add new course');
		fireEvent.click(addCourseButton);

		const CourseFormVisible = screen.getByTestId('CourseForm');

		expect(CourseFormVisible).toBeInTheDocument();
	});
});
