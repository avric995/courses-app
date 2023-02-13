import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';

import Error from './components/Error/Error';
import ProtectedRoute from './helpers/ProtectedRoute';
import UserProtectedRoute from './helpers/UserProtectedRoute';

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Navigate to='login' />}></Route>
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
								<UserProtectedRoute>
									<CourseForm />
								</UserProtectedRoute>
							</ProtectedRoute>
						}
					/>
					<Route
						path='courses/update/:courseId'
						element={
							<ProtectedRoute>
								<UserProtectedRoute>
									<CourseForm />
								</UserProtectedRoute>
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
		</>
	);
}

export default App;
