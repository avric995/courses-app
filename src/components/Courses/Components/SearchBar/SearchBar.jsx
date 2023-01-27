import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import './searchBar.scss';

const SearchBar = ({
	placeholderText,
	onChange,
	coursesFilter,
	query,
	setAllCourses,
}) => {
	const handleSearchClick = (query) => {
		if (query !== '') {
			const filteredCourse = coursesFilter.filter(
				(course) =>
					course.title.toLowerCase().includes(query.toLowerCase()) ||
					course.id.toLowerCase().includes(query.toLowerCase())
			);
			setAllCourses(filteredCourse);
		} else {
			setAllCourses(coursesFilter);
		}
	};

	return (
		<div className='search-div'>
			<Input placeholderText={placeholderText} onChange={onChange} />
			<Button value='Search' onClick={() => handleSearchClick(query)} />
		</div>
	);
};

export default SearchBar;
