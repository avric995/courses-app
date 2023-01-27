import './header.scss';
import { Outlet } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
// import { useLoginContext } from '../../context/loginContext';
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../../features/user/userSlice';
import { logout } from '../../features/user/userSlice';

const Header = () => {
	// const { logedUser, setLogedUser } = useLoginContext();
	const dispatch = useDispatch();
	const logedUser = useSelector(user);

	const logoutClick = () => {
		// setLogedUser({});
		dispatch(logout());
		localStorage.clear('token');
	};
	return (
		<>
			<header className='header'>
				<div className='logo'>
					<Logo />
				</div>
				<div className='btn-div'>
					<p className='user-loged'>{logedUser.name}</p>
					{logedUser.token ? (
						<Button value='Logout' onClick={logoutClick} />
					) : null}
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
