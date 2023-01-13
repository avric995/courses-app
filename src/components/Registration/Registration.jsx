import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './registration.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/Input/Input';
import axios from '../../api/axios';

const REGISTER_URL = '/register';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const newUser = { name, email, password };

	// async function postData(
	// 	url = 'http://localhost:4000/register',
	// 	data = newUser
	// ) {
	// 	const response = await fetch('http://localhost:4000/register', {
	// 		method: 'POST',
	// 		body: JSON.stringify(newUser),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	});
	// 	const result = await response.json();
	// 	console.log(JSON.stringify(result));
	// }

	const handleSubmit = async (e) => {
		e.preventDefault();
		// postData();

		try {
			const response = await axios.post(REGISTER_URL, JSON.stringify(newUser), {
				headers: { 'Content-Type': 'application/json' },
			});

			console.log(response.data);
			console.log(JSON.stringify(response));
			navigate('login');
		} catch (error) {
			if (!error.response) {
				alert('No Server Response');
			} else if (error.response?.status === 400) {
				alert('Username taken');
			} else {
				alert('Registration Failed');
			}
		}
	};

	return (
		<section className='registration-section'>
			<form className='registration-form' onSubmit={handleSubmit}>
				<h2 className='reg-title'>Registration</h2>
				<Input
					placeholderText='Enter name'
					type='text'
					lableText='Name'
					name='name'
					id='name'
					value={name}
					required={true}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholderText='Enter email'
					type='email'
					lableText='Email'
					name='email'
					id='email'
					value={email}
					required={true}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholderText='Enter password'
					type='password'
					lableText='Password'
					name='password'
					id='password'
					value={password}
					required={true}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button type='submit' value='Registration' />
				<p>
					If you have an account you can <Link to='/login'>Login</Link>
				</p>
			</form>
		</section>
	);
};

export default Registration;
