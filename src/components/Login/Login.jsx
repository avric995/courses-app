import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import './login.scss';

import { useNavigate } from 'react-router-dom';

import { API } from '../../api/axios';
import { routes } from '../../constants';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';
// import { useEffect } from 'react';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await API.post(
				routes.login,
				JSON.stringify({ email, password }),
				{
					headers: { 'Content-Type': 'application/json' },
				}
			);

			console.log(response);

			const nameString = response?.data.user.name;
			const emailString = response?.data.user.email;
			const role = response?.data.user.role;

			const [barrer, token] = response?.data.result.split(' ');
			localStorage.setItem('token', token);
			if (localStorage.getItem('token')) {
				dispatch(
					login({
						isAuth: true,
						name: nameString,
						email: emailString,
						token: token,
						role: role,
					})
				);

				navigate('/courses');
			} else if (!localStorage.getItem('token')) {
				localStorage.setItem('token', token);
			}
		} catch (error) {
			if (!error?.response) {
				alert('No Server Response');
			} else if (error.response?.status === 400) {
				alert(error.response?.data.result);
			}
		}
	};
	return (
		<section className='login-section'>
			<form className='login-form' onSubmit={handleSubmit}>
				<h2 className='reg-title'>Login</h2>
				<Input
					placeholderText='Enter email'
					type='email'
					lableText='Email'
					name='email'
					id='email'
					required={true}
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<Input
					placeholderText='Enter password'
					type='password'
					lableText='Password'
					name='password'
					id='password'
					required={true}
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<Button type='submit' value='Login' />
				<p>
					If you don't have an account you can
					<Link to='/registration'>Register</Link>
				</p>
			</form>
		</section>
	);
};

export default Login;
