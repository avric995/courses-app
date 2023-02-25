/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../Header';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

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
const MockHeader = () => {
	return (
		<Provider store={store}>
			<Header />
		</Provider>
	);
};

describe('Header', () => {
	it('shoud have logo', () => {
		render(<MockHeader />);
		const logoElement = screen.getByTestId('logo');
		expect(logoElement).toBeInTheDocument();
	});

	it("shoud have user's name", () => {
		render(<MockHeader />);
		const nameElement = screen.getAllByTestId('paragraph');
		nameElement.textContent = 'nesto';
		expect(nameElement.textContent).toBe('nesto');
	});
});
