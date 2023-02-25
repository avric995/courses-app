/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { mockedAuthorsList } from '../../../../../constants';
import CourseCard from '../CourseCard';

const mockInitialState = {
	user: {
		isAuth: false,
		name: 'Mock',
		email: 'mock@email.com',
		token: 'asd',
		role: 'admin',
	},
};
const mockStore = configureStore();
let store;
store = mockStore(mockInitialState);

const mockedAuthors = [
	'df32994e-b23d-497c-9e4d-84e4dc02882f',
	'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
];

const MockCourseCard = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<CourseCard
					title='naslov'
					description='opis'
					duration={Number(120)}
					creationDate='12/21/2015'
					authorsList={mockedAuthorsList}
					authors={mockedAuthors}
				/>
			</Provider>
		</BrowserRouter>
	);
};

describe('CourseCard', () => {
	it('Shoud display title', () => {
		render(<MockCourseCard />);
		const titleEl = screen.getByRole('heading', {
			name: /naslov/i,
		}).textContent;
		expect(titleEl).toBe('naslov');
	});

	it('Should display description', () => {
		render(<MockCourseCard />);
		const descEl = screen.getByTestId('desc').textContent;
		expect(descEl).toBe('opis');
	});
	it('Should display duration in correct format HH:MM', () => {
		render(<MockCourseCard />);
		const durationEl = screen.getByTitle('duration').textContent;
		expect(durationEl).toBe('02:00 hours');
	});
	it('Should display date in correct format MMMM.DDDD.YYYY', () => {
		render(<MockCourseCard />);
		const dateEl = screen.getByTitle('date').textContent;
		expect(dateEl.trim()).toBe('12.21.2015');
	});
	it('Should display authors list', () => {
		render(<MockCourseCard />);
		const authorsEl = screen.getByTitle('courseAuthors').textContent.split(',');
		expect(authorsEl.length).toBe(2);
	});
});
