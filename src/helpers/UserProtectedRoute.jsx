import { Navigate } from 'react-router-dom';
import React from 'react';

import { useSelector } from 'react-redux';
import { user } from '../features/user/userSlice';
const UserProtectedRoute = ({ children }) => {
	const logedUser = useSelector(user);

	return logedUser.role === 'admin' ? children : <Navigate to={'/courses'} />;
};

export default UserProtectedRoute;
