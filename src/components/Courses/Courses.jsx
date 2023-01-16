import { Link } from 'react-router-dom';
import { useState } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import { mockedCoursesList } from '../../constants.js';
import './courses.scss';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { useCourseContext } from '../../context/coursesContext';

const Courses = () => {
	const context = useCourseContext();
	const { courses, authors, setCourses } = context;

	const [query, setQuery] = useState('');

	return (
		<main>
			(
			<section className='container-list'>
				<div className='section-element'>
					<SearchBar
						placeholderText='Enter course name or id...'
						onChange={(event) => setQuery(event.target.value)}
						coursesFilter={mockedCoursesList}
						setCourses={setCourses}
						query={query}
					/>
					<Link to='add'>
						<Button value='Add new course' />
					</Link>
				</div>
				<div>
					{courses.map((course) => {
						return (
							<CourseCard key={course.id} {...course} authorsList={authors} />
						);
					})}
				</div>
			</section>
			)
		</main>
	);
};

export default Courses;
