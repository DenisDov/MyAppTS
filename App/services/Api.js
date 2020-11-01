// a library to wrap and simplify api calls
import apisauce from 'apisauce';

const { API_URL } = require('../config/env');

const create = (baseURL = API_URL) => {
	const api = apisauce.create({
		baseURL,
		headers: {
			'Cache-Control': 'no-cache',
		},
	});

	const getTodos = () => api.get('');

	return {
		getTodos,
	};
};

export default {
	create,
};
