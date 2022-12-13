import React from 'react';
import './button.css';

const Button = ({ value, onClick }) => {
	return (
		<button className='btn' onClick={() => onClick()}>
			{value}
		</button>
	);
};

export default Button;
