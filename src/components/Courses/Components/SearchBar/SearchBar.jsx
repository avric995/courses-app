import React from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import './searchBar.css';

const SearchBar = ({ placeholderText, onChange, query }) => {
	const handleClick = (searchTerm) => {
		console.log(searchTerm);
	};
	return (
		<div className='search-div'>
			<Input placeholderText={placeholderText} onChange={onChange} />
			<Button value='Search' onClick={() => handleClick(query)} />
		</div>
	);
};

export default SearchBar;
