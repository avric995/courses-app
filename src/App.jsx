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
					<Route path='courses' element={<Courses />} />
					<Route path='courses/add' element={<CreateCourse />} />
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
