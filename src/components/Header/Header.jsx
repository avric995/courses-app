import './header.css';
import { Outlet } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { useLoginContext } from '../../context/loginContext';

const Header = () => {
	const { logedUser, setLogedUser } = useLoginContext();
	const logout = () => {
		setLogedUser({});
	};
	return (
		<>
			<header className='header'>
				<div className='logo'>
					<Logo />
				</div>
				<div className='btn-div'>
					<p className='user-loged'>{logedUser.name}</p>
					{logedUser.token ? <Button value='Logout' onClick={logout} /> : null}
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
