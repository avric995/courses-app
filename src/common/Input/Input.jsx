import React from 'react';
import './input.css';

const Input = ({ placeholderText, onChange, lableText, name, type, min }) => {
	return (
		<div className='input-div'>
			<label htmlFor='text'>{lableText}</label>
			<input
				type={type}
				placeholder={placeholderText}
				min={min}
				name={name}
				id='text'
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
