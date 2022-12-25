export default function time_convert(num) {
	const hours = Math.floor(num / 60)
		.toString()
		.padStart(2, '0');
	const minutes = (num % 60).toString().padStart(2, '0');
	return `${hours}:${minutes}`;
}
