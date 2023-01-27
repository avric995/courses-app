import { Navigate } from 'react-router-dom';
// import { useLoginContext } from '../context/loginContext';
import { useSelector } from 'react-redux';
import { user } from '../features/user/userSlice';
const ProtectedRoute = ({ children }) => {
	// const { logedUser } = useLoginContext();
	const logedUser = useSelector(user);
	// console.log(logedUser);

	return <>{logedUser.token ? children : <Navigate to='/login' />}</>;
};
export default ProtectedRoute;
