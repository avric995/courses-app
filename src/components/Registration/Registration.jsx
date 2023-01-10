import Button from '../../common/Button/Button';
import './registration.scss';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate('/login');
	};
	return (
		<section className='registration-section'>
			<form className='registration-form' onSubmit={handleSubmit}>
				<h2 className='reg-title'>Registration</h2>
				<label htmlFor='name'>Name</label>
				<input type='text' placeholder='Enter name' id='name' />
				<label htmlFor='email'>Email</label>
				<input type='text' placeholder='Enter email' id='email' />
				<label htmlFor='password'>Password</label>
				<input type='password' placeholder='Enter password' id='password' />
				<Button type='submit' value='Registration' />
				<p>
					If you have an account you can <a href='#'>Login</a>
				</p>
			</form>
		</section>
	);
};

export default Registration;
