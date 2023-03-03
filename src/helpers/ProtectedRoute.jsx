import { Navigate } from 'react-router-dom';
import React from 'react';

import { useSelector } from 'react-redux';
import { user } from '../features/user/userSlice';
const ProtectedRoute = ({ children }) => {
	const logedUser = useSelector(user);

	return logedUser.token ? children : <Navigate to='/login' />;
};
export default ProtectedRoute;
