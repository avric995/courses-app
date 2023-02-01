import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { user } from '../features/user/userSlice';
import { routes } from '../constants';
const UserProtectedRoute = ({ children }) => {
	const logedUser = useSelector(user);

	return (
		<>{logedUser.role === 'admin' ? children : <Navigate to={'/courses'} />}</>
	);
};

export default UserProtectedRoute;
