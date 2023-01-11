import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route path='registration' element={<Registration />} />
					<Route path='login' element={<Login />} />
					<Route path='courses'>
						<Route index element={<Courses />} />
						<Route path='add' element={<CreateCourse />} />
						<Route path=':courseId' element={<CourseInfo />} />
					</Route>
				</Route>

				{/* <Header /> */}
				{/* <Courses /> */}
				{/* <Registration /> */}
				{/* <Login /> */}
				{/* <CourseInfo /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
