import axios from 'axios';

const getApiResults = async (API: string) => {
	return axios
		.get(API)
		.then((result) => {
			return result.data;
		})
		.catch((error) => {
			return { error: error.message };
		});
};

export { getApiResults };
