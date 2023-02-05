import axios from 'axios';

export const API = axios.create({
	baseURL: 'http://localhost:4000',
});

API.interceptors.request.use(function (request) {
	const token = localStorage.getItem('token');
	if (token) {
		request.headers['Authorization'] = `Bearer ${token}`;
	}
	return request;
});
