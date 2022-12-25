import React, { useState } from 'react';
// import Input from '../../common/Input/Input';
import './createCourse.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import time_convert from '../../helpers/pripeDuration';
// import { mockedAuthorsList } from '../../constants';

const CreateCourse = ({
	authors,
	setAuthors,
	courses,
	setCourses,
	isShown,
	setIsShown,
}) => {
	// Add Author
	const [addAuthor, setAddAuthor] = useState({
		name: '',
	});

	const handleAddFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute('name');

		const fieldValue = event.target.value;

		const newFormData = { ...addAuthor };
		newFormData[fieldName] = fieldValue;

		setAddAuthor(newFormData);
	};

	const handleAddFormSubmit = (event) => {
		event.preventDefault();
		const newAuthor = {
			id: Math.random(),
			name: addAuthor.name,
		};

		const newAuthors = [...authors, newAuthor];
		setAuthors(newAuthors);
	};

	// Add duration
	const [duration, setDuration] = useState(0);

	const handleAddDurationChange = (event) => {
		event.preventDefault();

		// const fieldName = event.target.getAttribute('duration');

		const fieldValue = event.target.value;

		setDuration(fieldValue);
	};

	// add course author
	const [courseAuthor, setCourseAuthor] = useState([]);

	const addCourseAut = (id) => {
		const newAuthors = authors.filter((autor) => autor.id !== id);
		setAuthors(newAuthors);

		const courseAuthorsId = [...courseAuthor, id];
		setCourseAuthor(courseAuthorsId);
	};

	// add course

	const [addCourse, setAddCourse] = useState({
		title: '',
		description: '',
	});

	const handleAddCourseFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute('name');

		const fieldValue = event.target.value;

		const newFormData = { ...addCourse };
		newFormData[fieldName] = fieldValue;

		setAddCourse(newFormData);
	};

	const handleAddCourseFormSubmit = (event) => {
		event.preventDefault();
		const today = new Date();
		const yyyy = today.getFullYear();
		let mm = today.getMonth() + 1; // Months start at 0!
		let dd = today.getDate();

		if (dd < 10) dd = '0' + dd;
		if (mm < 10) mm = '0' + mm;

		const formattedToday = dd + '/' + mm + '/' + yyyy;
		const newCourse = {
			id: Math.random(),
			title: addCourse.title,
			description: addCourse.description,
			creationDate: formattedToday,
			duration: parseInt(duration),
			authors: courseAuthor,
		};

		const newCourses = [...courses, newCourse];
		setCourses(newCourses);
		setIsShown(!isShown);
		// console.log(newCourses);
	};

	return (
		<form onSubmit={handleAddCourseFormSubmit}>
			<div className='header-div'>
				<Input
					placeholderText='Enter title...'
					lableText='Title'
					name='title'
					onChange={handleAddCourseFormChange}
				/>
				<Button value='Add Course' type='submit' />
			</div>
			<label htmlFor='desc'>Description</label>
			<textarea
				name='description'
				id='desc'
				cols='200'
				rows='10'
				minLength='2'
				placeholder='Enter description'
				onChange={handleAddCourseFormChange}
			></textarea>
			<div className='add-div'>
				<div className='add-author'>
					<h2>Add Author</h2>
					<Input
						placeholderText='Input author name...'
						lableText='Author name'
						name='name'
						onChange={handleAddFormChange}
					/>
					<Button value='Create Author' onClick={handleAddFormSubmit} />
				</div>
				<div className='authors'>
					<h2>Authors</h2>
					<ul>
						{authors.map((author) => {
							return (
								<li key={author.id}>
									{author.name}
									<Button
										value='Add Author'
										onClick={() => addCourseAut(author.id)}
									/>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='duration'>
					<h2>Duration</h2>
					<Input
						placeholderText='Enter duration in minutes...'
						lableText='Duration'
						name='duration'
						onChange={handleAddDurationChange}
					/>
					<p>
						Duration: <span>{time_convert(duration)}</span> hours
					</p>
				</div>
				<div className='course-authors'>
					<h2>Course Authors</h2>
					<ul>
						{courseAuthor.map((author) => {
							return (
								<li key={author.id}>
									{author}
									<Button
										value='Remove Author'
										onClick={() => addCourseAut(author.id)}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
