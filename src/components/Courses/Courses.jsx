import React, { useState } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from '../../constants.js';
import './courses.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

const Courses = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const [query, setQuery] = useState('');
	// console.log(query);

	// proba za search
	const newCourses = courses.filter((course) => {
		if (query === '') {
			return course;
		} else if (
			course.title.toLowerCase().includes(query.toLowerCase()) ||
			course.id.toLowerCase().includes(query.toLowerCase())
		) {
			return course;
		}
	});

	// console.log(newCourses);

	return (
		<main>
			<section className='container'>
				<div className='section-element'>
					<SearchBar
						placeholderText='Enter course name or id...'
						onChange={(event) => setQuery(event.target.value)}
						query={query}
					/>
					<Button value='Add new course' />
				</div>
				<div>
					{courses
						.filter((course) => {
							if (query === '') {
								return course;
							} else if (
								course.title.toLowerCase().includes(query.toLowerCase()) ||
								course.id.toLowerCase().includes(query.toLowerCase())
							) {
								return course;
							}
						})
						.map((course) => {
							return (
								<CourseCard key={course.id} {...course} authorsList={authors} />
							);
						})}
				</div>
			</section>
		</main>
	);
};

export default Courses;
