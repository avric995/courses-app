import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import { mockedCoursesList } from '../../constants.js';
import './courses.scss';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { useCourseContext } from '../../context/coursesContext';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectAllCourses,
	getCoursesStatus,
	getCoursesError,
	fetchCourses,
} from './coursesSlice';

const Courses = () => {
	const context = useCourseContext();
	// const { courses, authors, setCourses } = context;
	const dispatch = useDispatch();

	const courses = useSelector(selectAllCourses);
	const coursesStatus = useSelector(getCoursesStatus);
	const error = useSelector(getCoursesError);
	console.log(courses);

	const { authors, setCourses } = context;

	const [query, setQuery] = useState('');

	useEffect(() => {
		if (coursesStatus === 'idle') {
			dispatch(fetchCourses());
		}
	}, [coursesStatus, dispatch]);

	let content;
	if (coursesStatus === 'loading') {
		content = <p>"Loading..."</p>;
	} else if (coursesStatus === 'succeeded') {
		content = courses.map((course) => {
			return <CourseCard key={course.id} {...course} authorsList={authors} />;
		});
	} else if (coursesStatus === 'failed') {
		content = <p>{error}</p>;
	}

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
				<div>{content}</div>
			</section>
			)
		</main>
	);
};

export default Courses;
