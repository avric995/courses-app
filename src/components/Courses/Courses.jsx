import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';

import './courses.scss';
import SearchBar from './Components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import {
	selectAllCourses,
	getCoursesStatus,
	getCoursesError,
	fetchCourses,
} from './coursesSlice';

import {
	selectAllAuthors,
	fetchAuthors,
} from '../../features/authors/authorsSlice';
import { user } from '../../features/user/userSlice';

const Courses = () => {
	const dispatch = useDispatch();

	const courses = useSelector(selectAllCourses);

	const [allCourses, setAllCourses] = useState([]);

	const coursesStatus = useSelector(getCoursesStatus);
	// console.log(coursesStatus);
	const error = useSelector(getCoursesError);

	const authors = useSelector(selectAllAuthors);
	// console.log(authros);

	const logedUser = useSelector(user);

	const [query, setQuery] = useState('');

	useEffect(() => {
		if (coursesStatus === 'idle') {
			dispatch(fetchAuthors());
			dispatch(fetchCourses());
		}
	}, [coursesStatus, dispatch]);

	useEffect(() => {
		if (courses && !allCourses.length) {
			setAllCourses(courses);
		}
	}, [courses, allCourses]);
	let content;
	if (coursesStatus === 'loading') {
		content = <p>"Loading..."</p>;
	} else if (coursesStatus === 'succeeded') {
		content = courses.map((course) => {
			return (
				<CourseCard
					key={course.id}
					{...course}
					setCourses={setAllCourses}
					courses={courses}
					authorsList={authors}
					logedUser={logedUser}
				/>
			);
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
						coursesFilter={allCourses}
						setAllCourses={setAllCourses}
						query={query}
					/>
					{logedUser.role === 'admin' ? (
						<Link to='add'>
							<Button value='Add new course' />
						</Link>
					) : (
						''
					)}
				</div>
				<div>{content}</div>
			</section>
			)
		</main>
	);
};

export default Courses;
