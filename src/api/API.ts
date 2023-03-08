import axios from 'axios';

export default (url: string) => axios.create({
	baseURL: url,
});
