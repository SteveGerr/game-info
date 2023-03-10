/* eslint-disable @typescript-eslint/no-explicit-any */
import API from './API';

type Options = {
	method: string,
	headers: {
		[x: string]: string
	}
}

const options: Options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '58c92d3c33msh6459bc552f9a8ffp14d0ccjsn9e318546f38b',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
	},
};

export default {
	getAllGames() {
		return API('https://mmo-games.p.rapidapi.com').get<any, any>('games', options);
	},
};
