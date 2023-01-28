import './courseInfo.scss';
import { useParams, Link } from 'react-router-dom';
import findAutor from '../../helpers/findAuthors';
import timeConvert from '../../helpers/pripeDuration';
import formatDate from '../../helpers/formatDate';

import { useSelector } from 'react-redux';
import { selectCourseById } from '../Courses/coursesSlice';
import { selectAllAuthors } from '../../features/authors/authorsSlice';

const CourseInfo = () => {
	const authors = useSelector(selectAllAuthors);
	const { courseId } = useParams();

	const selectedCourseInfo = useSelector((state) =>
		selectCourseById(state, courseId)
	);

	return (
		<section className='course-info-section'>
			<p>
				<Link to={-1} className='back'>
					&lt; Back to courses
				</Link>
			</p>
			<div className='course-info'>
				<h1 className='course-title'>{selectedCourseInfo.title}</h1>
				<p className='course-desc'>{selectedCourseInfo.description}</p>
				<div className='flex-2'>
					<h4>
						ID : <span>{selectedCourseInfo.id}</span>
					</h4>
					<h4>
						Duration: <span>{timeConvert(selectedCourseInfo.duration)}</span>
					</h4>
					<h4>
						Created:
						<span> {formatDate(selectedCourseInfo.creationDate)} </span>
					</h4>
					<h4>
						Author:
						<span> {findAutor(authors, selectedCourseInfo.authors)}</span>
					</h4>
				</div>
			</div>
		</section>
	);
};

export default CourseInfo;
