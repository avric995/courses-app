import React from 'react';
import './input.css';

const Input = ({ placeholderText, onChange, lableText, name }) => {
	return (
		<div className='input-div'>
			<label htmlFor='text'>{lableText}</label>
			<input
				type='text'
				placeholder={placeholderText}
				name={name}
				id='text'
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
