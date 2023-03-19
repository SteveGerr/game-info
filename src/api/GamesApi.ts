/* eslint-disable @typescript-eslint/no-explicit-any */
import API from './API';

type Options = {
	method: string,
	params?: {
		[key:string]: string | number,
	},
	headers: {
		[x: string]: string
	}
}

const APIKey = 'rapidapi-key=58c92d3c33msh6459bc552f9a8ffp14d0ccjsn9e318546f38b';

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

	getGame(idGame: unknown) {
		return API('https://mmo-games.p.rapidapi.com').get<any, any>(`game?${APIKey}&id=${idGame}`, options);
	},

	getGameByCategory(category: string) {
		return API('https://mmo-games.p.rapidapi.com').get<any, any>(`game?${APIKey}&category=${category}`, options);
	},
};
