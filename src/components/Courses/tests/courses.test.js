/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Courses from '../Courses';

const mockedAuthors = [
	'df32994e-b23d-497c-9e4d-84e4dc02882f',
	'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
];

const mockInitialState = {
	user: {
		user: {
			isAuth: false,
			name: 'Mock',
			email: 'mock@email.com',
			token: 'asd',
			role: 'admin',
		},
	},
	courses: {
		courses: {
			id: '1',
			title: 'Mock1',
			description: 'Mocked 1',
			creationDate: '12/21/2015',
			duration: Number(120),
			authors: mockedAuthors,
			authorsList: mockedAuthors,
		},
		status: 'succeeded',
	},
	authors: {
		authors: mockedAuthors,
	},
};
const mockStore = configureStore();
let store;
store = mockStore(mockInitialState);

const MockCourses = () => {
	return (
		<Provider store={store}>
			<MemoryRouter>
				<Courses />
			</MemoryRouter>
		</Provider>
	);
};

describe('Header', () => {
	it('shoud press on courseForm button and display the form', () => {
		render(<MockCourses />);

		const courseForm = screen.queryByTestId('course-form');
		expect(courseForm).not.toBeInTheDocument();

		const openCourseFormButton = screen.getByText('Add new course');
		fireEvent.click(openCourseFormButton);

		const courseFormVisible = screen.getByTestId('course-form');
		expect(courseFormVisible).toBeInTheDocument();
	});
});
