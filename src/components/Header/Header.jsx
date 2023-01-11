import './header.css';
import { Outlet } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

const Header = () => {
	const handleClick = () => {
		console.log('Clicked');
	};
	return (
		<>
			<header className='header'>
				<div className='logo'>
					<Logo />
				</div>
				<div className='btn-div'>
					<p className='user-loged'>Dave</p>
					<Button value='Logout' onClick={handleClick} />
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
