import './button.css';
import React from 'react';

const Button = ({ value, onClick, type }) => (
	<button className='btn' type={type} onClick={onClick}>
		{value}
	</button>
);

export default Button;
