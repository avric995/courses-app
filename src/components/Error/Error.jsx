import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './error.scss';

const Error = () => {
	return (
		<section className='error-section'>
			<div className='container'>
				<h2>404</h2>
				<p>Page not found</p>
				<Link to='/login'>
					<Button value='Go to Login' />
				</Link>
			</div>
		</section>
	);
};
export default Error;
