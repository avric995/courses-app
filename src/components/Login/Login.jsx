import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import './login.scss';

const Registration = () => {
	return (
		<section className='login-section'>
			<form className='login-form'>
				<h2 className='reg-title'>Login</h2>
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
				<Button type='submit' value='Login' />
				<p>
					If you don't have an account you can{' '}
					<Link to='/registration'>Register</Link>
				</p>
			</form>
		</section>
	);
};

export default Registration;
