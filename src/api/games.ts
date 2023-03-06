/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */

// /* eslint-disable camelcase */
// interface GamesResponseI {
// 	id: 1136;
// 	title: string;
// 	thumbnail: string;
// 	short_description: string;
// 	game_url: string;
// 	genre: string;
// 	platform: string;
// 	publisher: string;
// 	developer: string;
// 	release_date: string;
// 	profile_url: string;
// }

export default (instance: any) => ({
	allGames() {
		return instance.get('games');
	},
});
