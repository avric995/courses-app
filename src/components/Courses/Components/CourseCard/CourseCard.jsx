import { Link, useNavigate } from 'react-router-dom';
import './courseCard.scss';
import Button from '../../../../common/Button/Button';
import timeConvert from '../../../../helpers/pripeDuration';
import formatDate from '../../../../helpers/formatDate';
import findAutor from '../../../../helpers/findAuthors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '../../coursesSlice';
import React from 'react';

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
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleDeleteClick = (id) => {
		dispatch(deleteCourse(id));
	};

	const handleEditClick = (id) => {
		navigate(`/courses/update/${id}`);
	};

	return (
		<>
			<article data-testid='CourseCard' className='course'>
				<div className='flex-1'>
					<h3>{title}</h3>
					<p data-testid='desc'>{description}</p>
				</div>
				<div className='flex-2'>
					<h4>
						Author:
						<span title='courseAuthors'>
							{findAutor(authorsList, authors).toString().length > 25
								? `${findAutor(authorsList, authors)
										.toString()
										.substring(0, 25)}...`
								: findAutor(authorsList, authors).toString()}
						</span>
					</h4>
					<h4>
						Duration:
						<span title='duration'>{timeConvert(duration)} hours</span>
					</h4>
					<h4>
						Created: <span title='date'> {formatDate(creationDate)} </span>
					</h4>
					<div className='buttons'>
						<Link to={`${id}`}>
							<Button value='Show course' />
						</Link>
						{logedUser?.role === 'admin' ? (
							<Button
								value={
									<FontAwesomeIcon
										icon={faEdit}
										onClick={(e) => handleEditClick(id)}
									/>
								}
							/>
						) : (
							''
						)}
						{logedUser?.role === 'admin' ? (
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
