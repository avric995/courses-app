import React from 'react';
import Input from '../../common/Input/Input';
import './createCourse.css';

const CreateCourse = () => {
	return (
		<>
			<div className='header-div'>
				<div className='input-div'>
					<label htmlFor='inputTitle'>Title</label>
					<input id='inputTitle' placeholder='Enter title...'></input>
				</div>

				<button className='btn'>Add Course</button>
			</div>
		</>
	);
};

export default CreateCourse;
