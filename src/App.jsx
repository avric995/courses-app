import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { CourseProvider } from './context/coursesContext';
import Error from './components/Error/Error';
import ProtectedRoute from './helpers/ProtectedRoute';
import { LoginProvider } from './context/loginContext';
function App() {
	return (
		<CourseProvider>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigate to='login' />}></Route>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route
						path='courses'
						element={
							<ProtectedRoute>
								<Courses />
							</ProtectedRoute>
						}
					></Route>
					<Route
						path='courses/add'
						element={
							<ProtectedRoute>
								<CreateCourse />
							</ProtectedRoute>
						}
					/>
					<Route
						path='courses/:courseId'
						element={
							<ProtectedRoute>
								<CourseInfo />
							</ProtectedRoute>
						}
					/>

					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</CourseProvider>
	);
}

export default App;
