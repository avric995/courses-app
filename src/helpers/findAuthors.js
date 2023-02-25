export default function findAutor(authorsList, authors) {
	const result = [];
	if (authorsList && authors) {
		for (const author of authors) {
			let fullAuthor = authorsList.find((a) => a.id === author);
			if (findAutor && findAutor.name) {
				result.push(fullAuthor.name);
			}
		}
	}

	return result;
}
