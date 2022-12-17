import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import './searchBar.css';

const SearchBar = ({
	placeholderText,
	onChange,
	coursesFilter,
	query,
	setCourses,
}) => {
	// const coursesFilter = data;

	const handleSearchClick = (searchTerm) => {
		if (query !== '') {
			const filteredCourse = coursesFilter.filter((course) => {
				if (query === '') {
					return course;
				} else if (
					course.title.toLowerCase().includes(query.toLowerCase()) ||
					course.id.toLowerCase().includes(query.toLowerCase())
				) {
					return course;
				}
			});
			setCourses(filteredCourse);
		} else {
			setCourses(coursesFilter);
		}
	};

	return (
		<div className='search-div'>
			<Input placeholderText={placeholderText} onChange={onChange} />
			<Button value='Search' onClick={() => handleSearchClick(query)} />
		</div>
	);
};

export default SearchBar;
