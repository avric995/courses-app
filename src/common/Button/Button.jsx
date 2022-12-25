import React from 'react';
import './button.css';

const Button = ({ value, onClick, type }) => {
	return (
		<button className='btn' type={type} onClick={onClick}>
			{value}
		</button>
	);
};

export default Button;
