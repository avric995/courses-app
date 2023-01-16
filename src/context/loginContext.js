import { createContext, useState, useContext } from 'react';

const LoginConext = createContext(null);

export const LoginProvider = ({ children }) => {
	const [logedUser, setLogedUser] = useState({});

	return (
		<LoginConext.Provider
			value={{
				logedUser,
				setLogedUser,
			}}
		>
			{children}
		</LoginConext.Provider>
	);
};

export const useLoginContext = () => {
	return useContext(LoginConext);
};
