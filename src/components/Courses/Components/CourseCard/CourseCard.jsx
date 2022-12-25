import React from 'react';
import './courseCard.css';
import Button from '../../../../common/Button/Button';
import time_convert from '../../../../helpers/pripeDuration';
import formatDate from '../../../../helpers/formatDate';
import findAutor from '../../../../helpers/findAuthors';
// import { mockedAuthorsList } from '../../../../constants';

const CourseCard = ({
	title,
	description,
	creationDate,
	duration,
	authors,
	authorsList,
}) => {
	return (
		<>
			<article className='course'>
				<div className='flex-1'>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className='flex-2'>
					{/* spread operator <h4>Authors: {...authors}</h4> */}
					<h4>
						Author:
						<span>{`${findAutor(authorsList, authors).substring(
							0,
							25
						)}...`}</span>
					</h4>
					<h4>
						Duration: <span>{time_convert(duration)} hours</span>
					</h4>
					<h4>
						Created: <span> {formatDate(creationDate)} </span>
					</h4>
					<Button value='Show course' />
				</div>
			</article>
		</>
	);
};

export default CourseCard;
