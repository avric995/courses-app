import { createContext, useState, useContext } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../constants';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [auth, setAuth] = useState({});

	return (
		<CourseContext.Provider
			value={{ courses, authors, setCourses, setAuthors, auth, setAuth }}
		>
			{children}
		</CourseContext.Provider>
	);
};

export const useCourseContext = () => {
	return useContext(CourseContext);
};
