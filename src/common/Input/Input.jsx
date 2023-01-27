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
	required,
	value,
}) => (
	<div className='input-div'>
		<label htmlFor={id}>{lableText}</label>
		<input
			type={type}
			placeholder={placeholderText}
			min={min}
			name={name}
			id={id}
			value={value}
			onChange={onChange}
			className={className}
			required={required}
		/>
	</div>
);

export default Input;
