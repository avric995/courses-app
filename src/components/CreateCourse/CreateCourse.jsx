import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './createCourse.scss';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import timeConvert from '../../helpers/pripeDuration';

import { courseAdded } from '../Courses/coursesSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
	authorAdded,
	selectAllAuthors,
} from '../../features/authors/authorsSlice';

const CreateCourse = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const authors = useSelector(selectAllAuthors);

	const [addAuthor, setAddAuthor] = useState({
		name: '',
	});
	const [allAuthors, setAllAuthors] = useState(authors);

	const [duration, setDuration] = useState(0);

	const [courseAuthorsList, setCourseAuthorsList] = useState([]);

	const [addCourse, setAddCourse] = useState({
		title: '',
		description: '',
	});

	// Add Author

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
		const name = addAuthor.name;
		if (name === '') {
			alert('Input name cant be empty');
		} else if (name.length <= 2) {
			alert('Must contain 2 or more char');
		} else {
			const newAuthor = {
				id: uuidv4(),
				name: name,
			};

			dispatch(authorAdded(newAuthor));

			setAllAuthors((prevState) => [...prevState, newAuthor]);
		}

		const inputField = document.querySelector('.input-author');

		inputField.value = '';
	};

	// Add duration

	const handleAddDurationChange = (event) => {
		event.preventDefault();

		const fieldValue = event.target.value;

		setDuration(fieldValue);
	};

	// add course author

	const addCourseAut = (event, id) => {
		event.preventDefault();
		const selectedAuthor = allAuthors.find((author) => author.id === id);
		const newAuthors = allAuthors.filter((autor) => autor.id !== id);

		setAllAuthors(newAuthors);

		const courseAuthorNew = selectedAuthor;
		const courseAuthorList = [...courseAuthorsList, courseAuthorNew];
		setCourseAuthorsList(courseAuthorList);
	};

	//remove course author

	const removeCourseAut = (id) => {
		const authorsOnCourse = courseAuthorsList.filter(
			(author) => author.id !== id
		);
		setCourseAuthorsList(authorsOnCourse);

		const deletedCourseAuthor = courseAuthorsList.filter(
			(author) => author.id === id
		);
		setAllAuthors((prevState) => [...prevState, ...deletedCourseAuthor]);
	};

	// add course

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
		let mm = today.getMonth() + 1; // Meseci krecu od 0!
		let dd = today.getDate();

		if (dd < 10) dd = '0' + dd;
		if (mm < 10) mm = '0' + mm;

		const formattedToday = dd + '/' + mm + '/' + yyyy;

		const newCourse = {
			id: uuidv4(),
			title: addCourse.title,
			description: addCourse.description,
			creationDate: formattedToday,
			duration: duration,
			authors:
				courseAuthorsList.length === 0
					? []
					: courseAuthorsList.map((item) => item.id),
		};

		if (
			newCourse.title === '' ||
			newCourse.description === '' ||
			duration === 0
		) {
			alert('Must fill all fields');
		} else if (newCourse.authors.length === 0) {
			alert('Please select authors');
		} else {
			dispatch(courseAdded(newCourse));
			setAllAuthors(authors);
			navigate('/courses');
		}
	};

	return (
		<section className='container-add'>
			<form onSubmit={handleAddCourseFormSubmit}>
				<div className='header-div'>
					<Input
						placeholderText='Enter title...'
						type='text'
						lableText='Title'
						name='title'
						id='title'
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
							id='authName'
							name='name'
							type='text'
							min='2'
							onChange={handleAddFormChange}
							className='input-author'
						/>
						<Button value='Create Author' onClick={handleAddFormSubmit} />
					</div>
					<div className='authors'>
						<h2>Authors</h2>
						<ul>
							{allAuthors.map((author) => {
								return (
									<li key={author.id}>
										{author.name}
										<Button
											value='Add Author'
											onClick={(e) => addCourseAut(e, author.id)}
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
							type='number'
							id='duration'
							min='1'
							lableText='Duration'
							name='duration'
							onChange={handleAddDurationChange}
						/>
						<p>
							Duration: <span>{timeConvert(duration)}</span> hours
						</p>
					</div>
					<div className='course-authors'>
						<h2>Course Authors</h2>
						<ul>
							{courseAuthorsList.map((author) => {
								return (
									<li key={author.id}>
										{author.name}
										<Button
											value='Remove Author'
											onClick={() => removeCourseAut(author.id)}
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</form>
		</section>
	);
};

export default CreateCourse;
