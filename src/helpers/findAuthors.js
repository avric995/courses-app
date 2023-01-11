export default function findAutor(authorsList, authors) {
	const result = [];
	for (const author of authors) {
		let fullAuthor = authorsList.find((a) => a.id === author);
		result.push(fullAuthor.name);
	}
	return result.toString();
}
