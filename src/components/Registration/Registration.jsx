import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './registration.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/Input/Input';
import { API } from '../../api/axios';

const REGISTER_URL = '/register';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const newUser = { name, email, password };

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await API.post(REGISTER_URL, JSON.stringify(newUser), {
				headers: { 'Content-Type': 'application/json' },
			});

			navigate('/login');
		} catch (error) {
			if (!error.response) {
				alert('No Server Response');
			} else if (error.response?.status === 400) {
				alert('Invalid data');
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
