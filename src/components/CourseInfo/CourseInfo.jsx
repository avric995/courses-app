import './courseInfo.scss';

const CourseInfo = () => {
	return (
		<section className='course-info-section'>
			<p>
				<a href='#'> &lt; Back to courses</a>
			</p>
			<div className='course-info'>
				<h1 className='course-title'>Name of Course</h1>
				<p className='course-desc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
					veritatis ut ducimus perferendis molestiae nemo eveniet officiis,
					harum aliquid sapiente dolorum nostrum accusantium cum totam ab
					pariatur ipsum inventore consectetur! Lorem ipsum dolor, sit amet
					consectetur adipisicing elit. Mollitia repellat porro voluptatum
					quisquam et fuga veniam cumque excepturi, sunt, numquam ex, dolorem
					autem tenetur corrupti cupiditate facere explicabo itaque repellendus?
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia et
					asperiores iste saepe veniam ex amet eligendi, a, illo dolorem velit
					non praesentium assumenda odio quos mollitia reprehenderit doloribus!
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
					error non tenetur, eius vitae sint qui esse voluptates odio iure rem
					laudantium! Eaque deserunt praesentium voluptatem ab. Perferendis,
					nulla error! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Enim maxime ullam eveniet! Perspiciatis dolorum mollitia voluptatum
					quo ipsum, ducimus commodi consequatur vel eos, repellat hic illum
					impedit! Amet, assumenda sed.
				</p>
				<div className='flex-2'>
					<h4>
						ID : <span>32324234-dasd-w23423</span>
					</h4>
					<h4>
						Duration: <span>20:43 hours</span>
					</h4>
					<h4>
						Created: <span> 20/12/2023 </span>
					</h4>
					<h4>
						Author:
						<br></br>
						<span> Miladin Avric</span>
						<br></br>
						<span> Nikola Avric</span>
					</h4>
				</div>
			</div>
		</section>
	);
};

export default CourseInfo;
