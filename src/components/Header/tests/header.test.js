/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../Header';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('renders logo', () => {
	const initialState = {
		user: {
			isAuth: false,
			name: 'Mock',
			email: 'mock@email.com',
			token: 'asd',
			role: 'admin',
		},
		logedUser: {
			token: 'asd',
		},
	};
	const mockStore = configureStore();
	let store;

	store = mockStore(initialState);
	render(
		<Provider store={store}>
			<Header />
		</Provider>
	);
	const logo = screen.getByTestId('logo');
	expect(logo).toBeInTheDocument();
});
