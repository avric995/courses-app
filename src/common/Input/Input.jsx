import React from 'react';
import './input.css';

const Input = ({ placeholderText, onChange, lableText }) => {
	return (
		<div className='input'>
			<label htmlFor='text'></label>
			<input
				type='text'
				placeholder={placeholderText}
				name=''
				id='text'
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
