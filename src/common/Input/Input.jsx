import React from 'react';
import './input.css';

const Input = ({ placeholderText, onChange }) => {
	return (
		<>
			<label htmlFor='text'></label>
			<input
				type='text'
				placeholder={placeholderText}
				name=''
				id='text'
				onChange={onChange}
			/>
		</>
	);
};

export default Input;
