import { Link } from 'react-router-dom';
import './courseCard.scss';
import Button from '../../../../common/Button/Button';
import timeConvert from '../../../../helpers/pripeDuration';
import formatDate from '../../../../helpers/formatDate';
import findAutor from '../../../../helpers/findAuthors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '../../coursesSlice';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
	authorsList,
	logedUser,
}) => {
	const dispatch = useDispatch();
	const handleDeleteClick = (id) => {
		dispatch(deleteCourse({ id }));
	};

	const handleEditClick = (id) => {};

	return (
		<>
			<article className='course'>
				<div className='flex-1'>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className='flex-2'>
					<h4>
						Author:
						<span>{`${findAutor(authorsList, authors).substring(
							0,
							25
						)}...`}</span>
					</h4>
					<h4>
						Duration: <span>{timeConvert(duration)} hours</span>
					</h4>
					<h4>
						Created: <span> {formatDate(creationDate)} </span>
					</h4>
					<div className='buttons'>
						<Link to={`${id}`}>
							<Button value='Show course' />
						</Link>
						{logedUser.role === 'admin' ? (
							<Button
								value={
									<FontAwesomeIcon
										icon={faEdit}
										onClick={() => handleEditClick(id)}
									/>
								}
							/>
						) : (
							''
						)}
						{logedUser.role === 'admin' ? (
							<Button
								value={
									<FontAwesomeIcon
										icon={faTrash}
										onClick={() => handleDeleteClick(id)}
									/>
								}
							/>
						) : (
							''
						)}
					</div>
				</div>
			</article>
		</>
	);
};

export default CourseCard;
