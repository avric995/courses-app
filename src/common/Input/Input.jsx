import './input.css';

const Input = ({
	placeholderText,
	onChange,
	lableText,
	name,
	type,
	min,
	className,
	id,
}) => (
	<div className='input-div'>
		<label htmlFor={id}>{lableText}</label>
		<input
			type={type}
			placeholder={placeholderText}
			min={min}
			name={name}
			id={id}
			onChange={onChange}
			className={className}
		/>
	</div>
);

export default Input;
