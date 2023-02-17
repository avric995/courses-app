import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders logo', () => {
	render(<Header />);
	const logo = screen.getByTestId('logo');
	expect(logo).toBeInTheDocument();
});
