import React, { useState } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from '../../constants.js';
import './courses.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import CreateCourse from '../CreateCourse/CreateCourse';

const Courses = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const [query, setQuery] = useState('');
	const [isShown, setIsShown] = useState(false);

	const handleClick = () => {
		setIsShown(!isShown);
	};

	return (
		<main>
			{!isShown ? (
				<section className='container-list'>
					<div className='section-element'>
						<SearchBar
							placeholderText='Enter course name or id...'
							onChange={(event) => setQuery(event.target.value)}
							coursesFilter={mockedCoursesList}
							setCourses={setCourses}
							query={query}
						/>
						<Button value='Add new course' onClick={handleClick} />
					</div>
					<div>
						{courses.map((course) => {
							return (
								<CourseCard key={course.id} {...course} authorsList={authors} />
							);
						})}
					</div>
				</section>
			) : (
				<section className='container-add'>
					<CreateCourse
						authors={authors}
						setAuthors={setAuthors}
						courses={courses}
						setCourses={setCourses}
						isShown={isShown}
						setIsShown={setIsShown}
					/>
					<button onClick={handleClick}>Revert</button>
				</section>
			)}
		</main>
	);
};

export default Courses;
