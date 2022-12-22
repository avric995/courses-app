import React from 'react';
// import Input from '../../common/Input/Input';
import './createCourse.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const CreateCourse = ({ authors }) => {
	return (
		<>
			<div className='header-div'>
				<Input placeholderText='Enter title...' lableText='Title' />
				<Button value='Add Course' />
			</div>
			<label htmlFor='desc'>Description</label>
			<textarea
				name='Descripion'
				id='desc'
				cols='200'
				rows='10'
				placeholder='Enter description'
			></textarea>
			<div className='add-div'>
				<div className='add-author'>
					<h2>Add Author</h2>
					<Input
						placeholderText='Input author name...'
						lableText='Author name'
					/>
					<Button value='Create Author' />
				</div>
				<div className='authors'>
					<h2>Authors</h2>
					<ul>
						{authors.map((author) => {
							return (
								<li>
									{author.name}
									<Button value='Add Author' />
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
					/>
					<p>
						Duration: <span>00:00</span> hours
					</p>
				</div>
				<div className='course-authors'>
					<h2>Course Authors</h2>
				</div>
			</div>
		</>
	);
};

export default CreateCourse;
