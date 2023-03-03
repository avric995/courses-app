module.exports = {
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy',
		'.+\\.(css|styl|less|sass|scss|png|webp|jpg|ttf|woff|woff2)$':
			'identity-obj-proxy',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'./__mocks__/fileMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
