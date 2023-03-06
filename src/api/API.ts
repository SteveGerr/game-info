// https://www.mmobomb.com/api
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const instance = (url = 'https://www.mmobomb.com/api1/') => axios.create({
	baseURL: url,
});

export default instance;
