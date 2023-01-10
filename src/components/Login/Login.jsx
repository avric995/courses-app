import Button from '../../common/Button/Button';
import './login.scss';

const Registration = () => {
	return (
		<section className='login-section'>
			<form className='login-form'>
				<h2 className='reg-title'>Login</h2>
				<label htmlFor='email'>Email</label>
				<input type='text' placeholder='Enter email' id='email' />
				<label htmlFor='password'>Password</label>
				<input type='password' placeholder='Enter password' id='password' />
				<Button type='submit' value='Login' />
				<p>
					If you don't have an account you can <a href='#'>Register</a>
				</p>
			</form>
		</section>
	);
};

export default Registration;
