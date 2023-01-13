import { Navigate } from 'react-router-dom';
import { useLoginContext } from '../context/loginContext';
const ProtectedRoute = ({ children }) => {
	const { logedUser } = useLoginContext();

	// return { children };
	return <>{logedUser.token ? children : <Navigate to='/login' />}</>;
};
export default ProtectedRoute;
