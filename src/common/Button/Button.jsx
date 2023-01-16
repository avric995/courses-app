import './button.css';

const Button = ({ value, onClick, type }) => (
	<button className='btn' type={type} onClick={onClick}>
		{value}
	</button>
);

export default Button;
