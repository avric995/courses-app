import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './registration.scss';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/Input/Input';

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
				<Input
					placeholderText='Enter name'
					type='text'
					lableText='Name'
					name='name'
					id='name'
				/>
				<Input
					placeholderText='Enter email'
					type='text'
					lableText='Email'
					name='email'
					id='email'
				/>
				<Input
					placeholderText='Enter password'
					type='password'
					lableText='Password'
					name='password'
					id='password'
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
